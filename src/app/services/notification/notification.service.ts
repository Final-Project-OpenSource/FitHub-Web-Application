import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl: string = 'http://api.miempresa.com/notification';

  constructor(private http: HttpClient) { }

  // Notificación al contactar con el coach
  notifyContactCoach(memberId: string, coachId: string, message: string): Observable<any> {
    const payload = {
      memberId: memberId,
      coachId: coachId,
      message: message,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/contact-coach`, payload);
  }

  // Notificación al obtener un plan nutricional o rutina
  notifyGetPlan(memberId: string, planType: string, coachId: string, planId: string): Observable<any> {
    const payload = {
      memberId: memberId,
      planType: planType,
      coachId: coachId,
      planId: planId,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/get-plan`, payload);
  }

  // Notificación al crear una rutina
  notifyCreateRoutine(coachId: string, routineId: string): Observable<any> {
    const payload = {
      coachId: coachId,
      routineId: routineId,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/create-routine`, payload);
  }

  // Notificación al crear un plan nutricional
  notifyCreateNutritionPlan(coachId: string, nutritionPlanId: string): Observable<any> {
    const payload = {
      coachId: coachId,
      nutritionPlanId: nutritionPlanId,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/create-nutrition-plan`, payload);
  }

  // Notificación al crear un progreso
  notifyCreateProgress(coachId: string, progressId: string): Observable<any> {
    const payload = {
      coachId: coachId,
      progressId: progressId,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/create-progress`, payload);
  }
}
