import { Injectable } from '@angular/core';
import {NutritionPlan} from "../../shared/model/nutrition-plan.model";
import {Observable} from "rxjs";
import {Routine} from "../../shared/model/routine.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CounselingService {private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getNutritionPlans(): Observable<NutritionPlan[]> {
    return this.http.get<NutritionPlan[]>(`${this.apiUrl}/nutrition-plans`);
  }

  getRoutines(): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.apiUrl}/routines`);
  }

  createNutritionPlan(plan: NutritionPlan): Observable<NutritionPlan> {
    return this.http.post<NutritionPlan>(`${this.apiUrl}/nutrition-plans`, plan);
  }
}
