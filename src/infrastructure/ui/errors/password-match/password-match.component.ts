import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sf-password-match',
  standalone: true,
  imports: [NgIf],
  templateUrl: './password-match.component.html',
  styleUrl: './password-match.component.scss'
})
export class PasswordMatchComponent {
  /** Props */
  errorMsg = 'Lozinke se ne podudaraju';

  /** I/O */
  @Input() formCtrl!: FormControl<any>;
}
