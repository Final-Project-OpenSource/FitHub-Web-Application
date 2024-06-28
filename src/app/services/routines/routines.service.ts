import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Routine} from "../../shared/model/routine.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  private apiUrl = `${environment.baseUrl}/routines`;

  constructor(private http: HttpClient) { }

  //Obtener todas los rutinas en el feedBack del cliente (Miembro)
  getAllRoutines() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  //Una vez se aceptó la solicitud, se obtienen las rutinas del coach al que se le envió la solicitud (Miembro)
  getRoutinesByCoachId(coachId: number): Observable<Routine[]> {
    const url = `${this.apiUrl}/by-coach/${coachId}`;
    return this.http.get<Routine[]>(url);
  }

  // Crear un nuevo plan de nutrición (Coach)
  addRoutine(routine: Routine): Observable<Routine> {
    return this.http.post<Routine>(this.apiUrl, routine);
  }

  // Modificar una rutina existente (Coach)
  updateRoutine(routine: Routine): Observable<Routine> {
    const url = `${this.apiUrl}/${routine.id}`;
    return this.http.put<Routine>(url, routine);
  }

  // Borrar una rutina existente (Coach)
  deleteRoutine(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
