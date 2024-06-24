import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {NutritionPlan} from "../../shared/model/nutrition-plan.model";
@Injectable({
  providedIn: 'root'
})
export class NutritionPlanService {

  private apiUrl = `${environment.baseUrl}/nutrition-plans`;

  constructor(private http: HttpClient) {}

  getNutritionPlans(): Observable<NutritionPlan[]> {
    return this.http.get<NutritionPlan[]>(this.apiUrl);
  }
}
