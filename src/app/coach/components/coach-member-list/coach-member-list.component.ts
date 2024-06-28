import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

//import { CoachServiceService } from '../../service/coach-service.service';
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-coach-member-list',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatDivider,
    MatCardActions,
    MatButton,
    NgForOf,

  ],
  templateUrl: './coach-member-list.component.html',
  styleUrl: './coach-member-list.component.css'
})

export class CoachMemberListComponent implements OnInit {
  members: any[] = [];
  requests: any[] = [];
  constructor() {}

  ngOnInit() {
    this.members = [
      { id: '1', name: 'John Doe', phone: '956789123'},
      { id: '2', name: 'Jane Smith', phone: '945634123'},
      { id: '3', name: 'Alice Johnson', phone: '976123098' },
      { id: '4', name: 'Michael Brown', phone: '945092345' },
      { id: '5', name: 'Emily Davis', phone: '912045923' }
    ];

    this.requests = [
      { id: '6', name: 'Robert Wilson', phone: '934125659' },
      { id: '7', name: 'Linda Martinez', phone: '923101378' },
      { id: '8', name: 'James Anderson', phone: '930489210' },
      { id: '9', name: 'Patricia Taylor', phone: '957350094' },
      { id: '10', name: 'Charles Thomas', phone: '923065812' }
    ];
  }

  acceptRequest(requestId: string) {
    //console.log(`Accepted request with ID: ${requestId}`);
    //this.requests = this.requests.filter(request => request.id !== requestId);

    //Método para pasar las tarjetas de la lista de solicitudes a miembros actuales
    const index = this.requests.findIndex(request => request.id === requestId);
    if (index !== -1) {
      const [acceptedRequest] = this.requests.splice(index, 1);
      this.members.push(acceptedRequest);
      console.log(`Accepted request with ID: ${requestId}`);
    }
  }

  rejectRequest(requestId: string) {
    console.log(`Rejected request with ID: ${requestId}`);
    this.requests = this.requests.filter(request => request.id !== requestId);
  }

  manageMember(memberId: string) {
    console.log(`Managing member with ID: ${memberId}`);
  }
}

/*

// Cuando el backend este listo usar este codigo

export class CoachMemberListComponent implements OnInit {
  members = [];
  requests = [];

  constructor(private coachService: CoachServiceService) {}

  ngOnInit() {
    //this.coachService.getMembers().subscribe(data => this.members = data);
    //this.coachService.getRequests().subscribe(data => this.requests = data);

  }

  acceptRequest(requestId: string) {
    this.coachService.acceptRequest(requestId).subscribe(response => {
      // Update the UI accordingly
    });
  }

  rejectRequest(requestId: string) {
    this.coachService.rejectRequest(requestId).subscribe(response => {
      // Update the UI accordingly
    });
  }

  manageMember(memberId: string) {
    // Logic to manage member (e.g., redirect to another view, open a modal, etc.)
    console.log(`Administrar miembro con ID: ${memberId}`);
  }
}
 */
