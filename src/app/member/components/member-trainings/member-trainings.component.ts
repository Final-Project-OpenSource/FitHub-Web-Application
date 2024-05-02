import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {MatButton, MatFabButton} from "@angular/material/button";
import {RoutinesService} from "../../../services/routines/routines.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-member-trainings',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatButton,
    MatFabButton,
    NgForOf
  ],
  templateUrl: './member-trainings.component.html',
  styleUrl: './member-trainings.component.css'
})
export class MemberTrainingsComponent implements OnInit{
  routines: any = [];

  constructor(private routinesService: RoutinesService) {  }

  ngOnInit() {
    this.routinesService.getRoutines().subscribe((data: any) => {
      console.log(data);
      if (Array.isArray(data.rutinas)) {
        this.routines = data.rutinas;
      } else {
        console.error('Data is not an array');
      }
    });
  }
}
