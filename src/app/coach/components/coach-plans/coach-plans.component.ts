import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";


interface Routine {
  id: number;
  title: string;
  difficulty: string;
  description: string;
}


@Component({
  selector: 'app-coach-plans',
  standalone: true,
  imports: [
    RouterLink,
    MatDivider,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatCardTitle,
    NgForOf,
    MatCard,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    ReactiveFormsModule,
    MatLabel
  ],
  templateUrl: './coach-plans.component.html',
  styleUrl: './coach-plans.component.css'
})
export class CoachPlansComponent {
  routines: Routine[] = [];
  routineForm: FormGroup;
  nextId = 1;

  constructor(private fb: FormBuilder) {
    this.routineForm = this.fb.group({
      title: [''],
      difficulty: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.routines = [
      { id: 1, title: 'Morning Routine', difficulty: 'Easy', description: 'A simple morning routine to start your day.' },
      { id: 2, title: 'Strength Training', difficulty: 'Medium', description: 'A routine focused on building strength.' },
      { id: 3, title: 'Cardio Blast', difficulty: 'Intense', description: 'An intense cardio workout to burn calories.' }
    ];
    this.nextId = this.routines.length + 1;
  }

  onSubmit(): void {
    if (this.routineForm.valid) {
      const newRoutine: Routine = {
        id: this.nextId++,
        ...this.routineForm.value
      };
      this.routines.push(newRoutine);
      this.routineForm.reset();
    }
  }

  editRoutine(routine: Routine): void {
    const editedRoutine = prompt('Edit Routine', JSON.stringify(routine));
    if (editedRoutine) {
      const updatedRoutine = JSON.parse(editedRoutine);
      const index = this.routines.findIndex(r => r.id === routine.id);
      if (index !== -1) {
        this.routines[index] = updatedRoutine;
      }
    }
  }

  deleteRoutine(id: number): void {
    this.routines = this.routines.filter(routine => routine.id !== id);
  }
}
