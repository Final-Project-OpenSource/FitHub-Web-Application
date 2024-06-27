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

  //Obtener todos los planes de nutricion en el feedBack del cliente (Miembro)
  getAllNutritionPlans(): Observable<NutritionPlan[]> {
    return this.http.get<NutritionPlan[]>(this.apiUrl);
  }

  //Una vez se aceptó la solicitud, se obtienen los planes de nutrición del coach al que se le envió la solicitud (Miembro)
  getNutritionPlansByCoachId(coachId: number): Observable<NutritionPlan[]> {
    const url = `${this.apiUrl}/by-coach/${coachId}`;
    return this.http.get<NutritionPlan[]>(url);
  }

  // Crear un nuevo plan de nutrición (Coach)
  addNutritionPlan(nutritionPlan: NutritionPlan): Observable<NutritionPlan> {
    return this.http.post<NutritionPlan>(this.apiUrl, nutritionPlan);
  }

  // Modificar un plan de nutrición existente (Coach)
  updateNutritionPlan(nutritionPlan: NutritionPlan): Observable<NutritionPlan> {
    const url = `${this.apiUrl}/${nutritionPlan.id}`;
    return this.http.put<NutritionPlan>(url, nutritionPlan);
  }

  // Borrar un plan de nutrición existente (Coach)
  deleteNutritionPlan(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
