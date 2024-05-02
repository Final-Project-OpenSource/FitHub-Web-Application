import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  private apiURL = 'https://jdu202012207.github.io/pruebas-api/routines.json';

  constructor(private http: HttpClient) { }

  getRoutines() {
    return this.http.get<any>(`${this.apiURL}`);
  }
}
