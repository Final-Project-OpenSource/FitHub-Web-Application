import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-coach-information',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButtonToggle,
    MatButton
  ],
  templateUrl: './coach-information.component.html',
  styleUrl: './coach-information.component.css'
})
export class CoachInformationComponent {

}
