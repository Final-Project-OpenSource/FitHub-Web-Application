import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/coach.model";
import {Member} from "../../member/model/member.model";

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(`${this.baseUrl}/coaches`);
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/members`);
  }

  getCoachById(coachId: number): Observable<Coach> {
    return this.http.get<Coach>(`${this.baseUrl}/${coachId}`);
  }

  updateCoachInformation(coachId: number, coach: Coach): Observable<Coach> {
    return this.http.put<Coach>(`${this.baseUrl}/coaches/${coachId}`, coach);
  }

}
