import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ControlsOf} from "../../shared/forms/forms-common";
import {LoginDto} from "../../shared/model/login-dto";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  private form!: FormGroup<ControlsOf<LoginDto>> | null;

  constructor(private _fb : FormBuilder) {
    this.form = null;
  }
  
 getForm() : FormGroup<ControlsOf<LoginDto>>{
    if(!this.form){
      this.init();
    }

    return this.form!;
  }

  private init() {
    this.form = this._fb.group<ControlsOf<LoginDto>>({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
