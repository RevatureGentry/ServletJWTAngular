import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../model/login-form.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  attemptLogin(loginForm: LoginForm): Observable<any> {
    return this.http.post<any>(environment.api.login, loginForm, { headers: this.getHttpHeaders()});
  }

  private getHttpHeaders(): HttpHeaders {
    const headers:HttpHeaders = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return headers;
  }
}
