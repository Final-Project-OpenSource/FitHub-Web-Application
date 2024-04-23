import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoachServiceService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllCoaches(){
    return this.http.get(this.baseUrl);
  }
}
