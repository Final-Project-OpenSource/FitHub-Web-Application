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
        photo: 'data:image/jpeg;base64,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',
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
      },
      {
        id: 4,
        title: 'Protein-Rich Lunch',
        photo: 'https://via.placeholder.com/150', // URL de ejemplo
        calories: '500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ingredients: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
        goal_health: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.'
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
