import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Método para obtener los usuarios
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }
  getUsersbyId(index: any) {
    return this.http.get<any>(`${this.baseUrl}/users/${index}`);
  }
}
