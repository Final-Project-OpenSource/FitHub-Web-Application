import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoachServiceService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllCoaches(){
    return this.http.get(this.baseUrl);
  }

  getMembers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/members`);
  }

  getRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/requests`);
  }

  acceptRequest(requestId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/accept-request`, { requestId });
  }

  rejectRequest(requestId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reject-request`, { requestId });
  }
}
