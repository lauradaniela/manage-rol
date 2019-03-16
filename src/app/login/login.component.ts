import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  activeButton = false;
  constructor(private form: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  validForm() {
    this.activeButton = this.loginForm.valid ? true : false;
  }

  login() {
    this.loginService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
  }

}
