import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ErrorEmailComponent} from "../errors/error-email/error-email.component";
import {ErrorRequiredComponent} from "../errors/error-required/error-required.component";

@Component({
  selector: 'sf-input-text',
  standalone: true,
  imports: [
    ErrorRequiredComponent,
    ErrorEmailComponent,
    InputTextModule,
    NgIf,
    NgClass,
    ReactiveFormsModule,
    ErrorEmailComponent,
    ErrorRequiredComponent
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  /** I/O */
  @Input() formCtrl!: FormControl;
  @Input() ctrlPlaceholder: string = '';
  @Input() ctrlLabel: string = 'Label';
  @Input() formCtrlId: string = 'text-input';
  @Input() formCtrlType: string = 'text';
  @Input() formCtrlClass: string = '';
  @Input() formCtrlIcon?: string;
  @Input() isDisabled: boolean;
  @Output() keyReleased = new EventEmitter<boolean>();
  @Output() inputLeft: EventEmitter<string | number> | null;

  constructor() {
    this.isDisabled = false;
    this.inputLeft = null;
  }

  handleKeyUp(value: any) {
    this.keyReleased.emit(value);
  }

  handleBlur(event: any) {
    if (this.inputLeft) {
      this.inputLeft.emit(event.target.value);
    }
  }
}
