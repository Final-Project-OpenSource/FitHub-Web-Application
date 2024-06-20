import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Método para obtener los chats por id

  getUserChatbyId(index: any) {
    return forkJoin([
      this.http.get<any>(`${this.baseUrl}/chats/?userid1=${index}`),
      this.http.get<any>(`${this.baseUrl}/chats/?userid2=${index}`)
    ]);
  }
  getChatbyId(index: any) {
    return this.http.get<any>(`${this.baseUrl}/chats/${index}`);
  }
}
