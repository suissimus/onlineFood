import {Component, OnInit} from '@angular/core';
import {ControlsOf} from "../../shared/forms/forms-common";
import {LoginDto} from "../../shared/model/login-dto";
import {FormGroup} from "@angular/forms";
import {LoginFormService} from "./login-form.service";
import {InputTextComponent} from "../../ui/input-text/input-text.component";
import {FormControlPipe} from "../../shared/pipes/form-control.pipe";
import {InputPasswordComponent} from "../../ui/input-password/input-password.component";
import {ButtonComponent} from "../../ui/button/button.component";
import { Router } from '@angular/router';
import {default as myData} from "@db/users.json";
import { AlertService } from 'infrastructure/shared/services/alert.service';


@Component({
  selector: 'sf-login',
  standalone: true,
  imports: [
    InputTextComponent,
    FormControlPipe,
    InputPasswordComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  form!: FormGroup<ControlsOf<LoginDto>>;
  userData :any[] = [];

  constructor(
    private _fs : LoginFormService,
    private router: Router,
    private _alertService : AlertService
  ){}

  ngOnInit() {
    this.form = this._fs.getForm();
  }

  handleLogin() {
    if (myData.find(
        user => user.username === this.form.value.username && 
        user.password === this.form.value.password)) {  
      this.router.navigate(['/dashboard'])
    }
    else{
      this._alertService.addFailedMsg("Login failed, try again!")
    }
    
  } 

  toOrders() {
    this.router.navigate (['/orders'])
  }
}