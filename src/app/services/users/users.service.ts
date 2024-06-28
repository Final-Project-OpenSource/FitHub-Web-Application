import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }
  getUsersbyId(index: any) {
    return this.http.get<any>(`${this.baseUrl}/users/${index}`);
  }

  /*private apiUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getUsersbyId(userId: number): Observable<User[]> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User[]>(url);
  }*/
}
