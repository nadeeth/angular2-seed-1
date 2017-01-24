import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

  APIResponse: any;
  loginError: String;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', Validators.required],
    });
  }

  submitForm(): void {

    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value).then(data => {

        this.APIResponse = data;
        if (this.APIResponse.success) {
          //If the user is valid, direct user to home page
          this.loginError = '';
          console.log(this.loginService.getToken());
        } else {
          //Else show the error message
          this.loginError = this.APIResponse.error;
          console.log(this.loginService.getToken());
        }
      });
    }
  }
}

