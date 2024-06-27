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

  //Enviar Solicitud(Miembro)
  sendRequest(coachId: number, message: string): Observable<any> {
    const payload = { coachId, message };
    return this.http.post(`${this.apiUrl}/confirm-contact`, payload);
  }
  //Aceptar Solicitud(Coach)
  acceptRequest(requestId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/accept-request`, { requestId });
  }
  //Rechazar Solicitud(Coach)
  rejectRequest(requestId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/reject-request`, { requestId });
  }
}
