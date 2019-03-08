import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  setCurrentUserToken(token: string) {
    if (token) {
      sessionStorage.setItem("CURRENT_USER", token);
      this.router.navigate(["/home"]);
    } else {
      throw new Error();
    }
  }

  getAuthorizedRequestHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": sessionStorage.getItem("CURRENT_USER"),
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    });
    return headers;
  }

  logout() {
    sessionStorage.removeItem("CURRENT_USER");
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("CURRENT_USER") !== null;
  }
}
