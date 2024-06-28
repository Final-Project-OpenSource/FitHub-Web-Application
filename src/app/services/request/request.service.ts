import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = `${environment.baseUrl}/request`;

  constructor(private http: HttpClient) {}

  //Contactar con el coach(Miembro)
  contactCoach(coachId: number, memberId: number, message: string): Observable<any> {
    const payload = { coachId, memberId, message };
    return this.http.post(`${this.apiUrl}/confirm-contact`, payload);
  }

  getContacts(coachId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/by-coach/${coachId}`);
  }
}
