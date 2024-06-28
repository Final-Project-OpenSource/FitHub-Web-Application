import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Progress } from '../../shared/model/progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private apiUrl = `${environment.baseUrl}/progress`;

  constructor(private http: HttpClient) {}
  //Obtener todos los progresos en el feedBack del cliente (Miembro)
  getProgressByClientIdAndCoachId(clientId: number, coachId: number): Observable<Progress[]> {
    return this.http.get<Progress[]>(`${this.apiUrl}/by-client/${clientId}/by-coach/${coachId}`);
  }
  // Crear un nuevo progreso (Coach)
  addProgress(progress: Progress): Observable<Progress> {
    return this.http.post<Progress>(this.apiUrl, progress);
  }

  // Modificar un progreso existente (Coach)
  updateProgress(progress: Progress): Observable<Progress> {
    return this.http.put<Progress>(`${this.apiUrl}/${progress.id}`, progress);
  }

  // Borrar un progreso existente (Coach)
  deleteProgress(progressId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${progressId}`);
  }
}
