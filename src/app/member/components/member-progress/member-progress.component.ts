import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-member-progress',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './member-progress.component.html',
  styleUrl: './member-progress.component.css'
})
export class MemberProgressComponent {

}
