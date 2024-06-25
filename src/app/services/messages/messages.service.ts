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

  postMessage(chatId: any, senderUserId: any, receivingUserId: any, message: string) {
    const currentDate = new Date().toISOString().slice(0, 10); // Formato: YYYY-MM-DD
    const currentTime = new Date().toLocaleTimeString(); // Formato: HH:MM:SS

    const body = {
      chatid: chatId,
      senderuserid: senderUserId,
      receivinguserid: receivingUserId,
      message: message,
      date: currentDate,
      time: currentTime
    };

    return this.http.post<any>(`${this.baseUrl}/messages`, body);
  }
}
