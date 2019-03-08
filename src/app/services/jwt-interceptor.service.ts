import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("login")) {
      return next.handle(req);
    }
    req = req.clone({
      headers: this.tokenService.getAuthorizedRequestHeader()
    })
    return next.handle(req);
  }

  constructor(private tokenService: TokenService) { }
}
