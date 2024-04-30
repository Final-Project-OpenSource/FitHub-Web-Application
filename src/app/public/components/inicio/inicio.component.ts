import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup} from "@angular/material/card";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatDivider,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
