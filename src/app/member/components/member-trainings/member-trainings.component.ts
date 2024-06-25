import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NutritionPlan} from "../../../shared/model/nutrition-plan.model";
import {Routine} from "../../../shared/model/routine.model";
import {CounselingService} from "../../../services/counseling/counseling.service";

@Component({
  selector: 'app-member-trainings',
  templateUrl: 'member-trainings.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  styleUrls: ['./member-trainings.component.css']
})
export class MemberTrainingsComponent implements OnInit {
  view: string = 'routines';
  diets: NutritionPlan[] = [];
  routines: Routine[] = [];

  constructor(private counselingService: CounselingService) {}

  ngOnInit() {
    this.loadRoutines();
  }

  loadRoutines() {
    this.counselingService.getRoutines().subscribe(routines => {
      this.routines = routines;
    });
  }

  loadDiets() {
    this.counselingService.getNutritionPlans().subscribe(diets => {
      this.diets = diets;
    });
  }

  showDiets() {
    this.view = 'diets';
    this.loadDiets();
  }

  showRoutines() {
    this.view = 'routines';
    this.loadRoutines();
  }

  trackByDiet(index: number, diet: NutritionPlan): number {
    return diet.id;
  }

  trackByRoutine(index: number, routine: Routine): number {
    return routine.id;
  }
}
