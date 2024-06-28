import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://fithub-service-18c8410f1ec5.herokuapp.com/api/v1/authentication';
  private rolesUrl = 'https://fithub-service-18c8410f1ec5.herokuapp.com/api/v1/roles';
  private userUrl = 'https://fithub-service-18c8410f1ec5.herokuapp.com/api/v1/users';
  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, userData);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, credentials);
  }

  getUserInfo(userId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.userUrl}/${userId}`, { headers });
  }

  getRoles(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.rolesUrl, { headers });
  }
}
