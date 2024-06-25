import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMessagebyChatId(index: any) {
    return this.http.get<any>(`${this.baseUrl}/messages?chatid=${index}`);
  }
}
