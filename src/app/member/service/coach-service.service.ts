import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Coach} from "../../coach/model/coach.model";
import {Observable} from "rxjs";
import {Member} from "../model/member.model";

@Injectable({
  providedIn: 'root'
})
export class CoachServiceService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/members`);
  }

  getAllCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(`${this.baseUrl}/coaches`);
  }
}
