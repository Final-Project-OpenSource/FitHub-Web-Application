import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-coach-contact',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    MatOption,
    MatSelect,
    MatLabel
  ],
  templateUrl: './coach-contact.component.html',
  styleUrl: './coach-contact.component.css'
})
export class CoachContactComponent {

}
