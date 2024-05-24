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
  templateUrl: './coach-dashboard.component.html',
  styleUrl: './coach-dashboard.component.css'
})
export class CoachDashboardComponent {

}
