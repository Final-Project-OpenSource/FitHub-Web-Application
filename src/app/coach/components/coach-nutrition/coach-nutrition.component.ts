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


interface Nutrition {
  id: number;
  title: string;
  photo: string;
  description: string;
  ingredients: string;
  calories: string;
  goal_health: string;

}


@Component({
  selector: 'app-coach-nutrition',
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
  templateUrl: './coach-nutrition.component.html',
  styleUrl: './coach-nutrition.component.css'
})
export class CoachNutritionComponent {
  nutritionPlan: Nutrition[] = [];
  nutritionForm: FormGroup;
  nextId = 1;

  imageSrc: string | ArrayBuffer | null | undefined = null;

  constructor(private fb: FormBuilder) {
    this.nutritionForm = this.fb.group({
      title: [''],
      photo: [''],
      description: [''],
      ingredients: [''],
      calories: [''],
      goal_health: ['']
    });
  }

  ngOnInit(): void {
    this.nutritionPlan = [
      {
        id: 1,
        title: 'Healthy Breakfast',
        photo: 'url-1',
        calories: '300',
        description: 'A balanced breakfast to start your day.',
        ingredients: 'Oats, milk, fruits',
        goal_health: 'Weight maintenance'
      },
      {
        id: 2,
        title: 'Protein-Rich Lunch',
        photo: 'url-2',
        calories: '500',
        description: 'A lunch rich in protein to keep you energized.',
        ingredients: 'Chicken, rice, vegetables',
        goal_health: 'Muscle building'
      },
      {
        id: 3,
        title: 'Light Dinner',
        photo: 'url-3',
        calories: '400',
        description: 'A light dinner to end your day.',
        ingredients: 'Salad, soup, bread',
        goal_health: 'Weight loss'
      }
    ];
    this.nextId = this.nutritionPlan.length + 1;
  }

  onSubmit(): void {
    if (this.nutritionForm.valid) {
      const newRoutine: Nutrition = {
        id: this.nextId++,
        ...this.nutritionForm.value
      };
      this.nutritionPlan.push(newRoutine);
      this.nutritionForm.reset();
    }
  }

  editNutritionPlan(nutrition: Nutrition): void {
    const editedRoutine = prompt('Edit Nutrition Plan', JSON.stringify(nutrition));
    if (editedRoutine) {
      const updatedRoutine = JSON.parse(editedRoutine);
      const index = this.nutritionPlan.findIndex(r => r.id === nutrition.id);
      if (index !== -1) {
        this.nutritionPlan[index] = updatedRoutine;
      }
    }
  }

  deleteNutritionPlan(id: number): void {
    this.nutritionPlan = this.nutritionPlan.filter(nutrition => nutrition.id !== id);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

}
