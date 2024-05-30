import { Component, Input } from '@angular/core';
import { ErrorRequiredComponent } from "../errors/error-required/error-required.component";
import { PasswordModule } from "primeng/password";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { PasswordMatchComponent } from '../errors/password-match/password-match.component';
import { MinLengthComponent } from '../errors/min-length/min-length.component';
import {ErrorEmailComponent} from "../errors/error-email/error-email.component";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'sf-input-password',
  standalone: true,
  imports: [
    ErrorRequiredComponent,
    PasswordMatchComponent,
    MinLengthComponent,
    PasswordModule,
    ReactiveFormsModule,
    NgIf,
    ErrorEmailComponent,
    InputTextModule
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {
  /** I/O */
  @Input() formCtrl!: FormControl;
  @Input() ctrlPlaceholder: string = '';
  @Input() ctrlLabel: string = 'Label';
  @Input() formCtrlId: string = 'text-input';
  @Input() minDigits!: number;
}
