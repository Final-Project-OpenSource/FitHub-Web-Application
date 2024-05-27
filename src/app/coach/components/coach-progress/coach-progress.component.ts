import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-coach-progress',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './coach-progress.component.html',
  styleUrl: './coach-progress.component.css'
})
export class CoachProgressComponent {

}
