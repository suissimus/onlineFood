import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'sf-error-required',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './error-required.component.html',
  styleUrl: './error-required.component.scss'
})
export class ErrorRequiredComponent {
  /** Props */
  errorMsg = 'Required field';

  /** I/O */
  @Input() formCtrl!: FormControl<any>;
}
