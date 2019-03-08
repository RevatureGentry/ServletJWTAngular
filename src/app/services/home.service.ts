import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getUserInfo(): Observable<any> {
    return this.http.post<any>(environment.api.userInfo, null, {headers: this.tokenService.getAuthorizedRequestHeader()});
  }
}
