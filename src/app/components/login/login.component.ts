import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginForm } from 'src/app/model/login-form.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = {
    username: "",
    password: ""
  }
  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit() {
  }

  login() {
    this.authService.attemptLogin(this.loginForm).subscribe(
      data => {
        this.tokenService.setCurrentUserToken(data.token);
      },
      err => console.log(err)
    );
  }
}
