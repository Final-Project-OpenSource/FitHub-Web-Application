import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {NutritionPlan} from "../../shared/model/nutrition-plan.model";
@Injectable({
  providedIn: 'root'
})
export class NutritionPlanService {

  private apiUrl = 'http://localhost:8080/api/v1/nutrition-plans';

  constructor(private http: HttpClient) {}

  //Obtener todos los planes de nutricion en el feedBack del cliente (Miembro)
  getAllNutritionPlans(): Observable<NutritionPlan[]> {
    return this.http.get<NutritionPlan[]>(this.apiUrl);
  }

  getNutritionPlanById(id: number): Observable<NutritionPlan> {
    return this.http.get<NutritionPlan>(`${this.apiUrl}/${id}`);
  }

  //Una vez se aceptó la solicitud, se obtienen los planes de nutrición del coach al que se le envió la solicitud (Miembro)
  getNutritionPlansByCoachId(coachId: number): Observable<NutritionPlan[]> {
    return this.http.get<NutritionPlan[]>(`${this.apiUrl}/coach/${coachId}`);
  }

  // Crear un nuevo plan de nutrición (Coach)
  createNutritionPlan(nutritionPlan: NutritionPlan): Observable<NutritionPlan> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<NutritionPlan>(this.apiUrl, nutritionPlan, { headers });
  }

  // Modificar un plan de nutrición existente (Coach)
  updateNutritionPlan(id: number, nutritionPlan: NutritionPlan): Observable<NutritionPlan> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<NutritionPlan>(`${this.apiUrl}/${id}`, nutritionPlan, { headers });
  }

  // Borrar un plan de nutrición existente (Coach)
  deleteNutritionPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
