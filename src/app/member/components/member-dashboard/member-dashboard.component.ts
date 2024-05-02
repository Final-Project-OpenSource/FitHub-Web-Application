import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-member-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatButtonToggle,
    MatButton
  ],
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css'
})
export class MemberDashboardComponent {

}
