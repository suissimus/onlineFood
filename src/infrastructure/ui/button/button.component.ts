import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ButtonModule } from 'primeng/button';

export enum ButtonSeverity {
  PRIMARY = 'p-button-primary',
  SECONDARY = 'p-button-secondary',
  SUCCESS = 'p-button-success',
  DANGER = 'p-button-danger',
}

export enum ButtonStyle {
  TEXT = 'p-button-text',
  BASIC = 'p-button',
  OUTLINED = 'p-button-outlined',
}

@Component({
  selector: 'sf-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /** I/O */
  @Input() btnLabel: string;
  @Input() btnIcon: string;
  @Input() btnClass: string;
  @Input() isBtnDisabled: boolean;
  @Input() btnId: string;
  @Input() btnType: string;
  @Input() btnStyle: ButtonStyle;
  @Input() btnTooltip: string;
  @Input() btnTooltipPosition: string;
  @Input() btnSeverity: string;
  @Input() btnRounded: boolean;
  @Input() isText: boolean;
 
  @Output() btnClicked: EventEmitter<boolean>;

 
  constructor() {
    this.btnId = `sf-btn-${Guid.create()}`;
    this.btnLabel = '';
    this.btnType = 'button';
    this.btnIcon = '';
    this.btnClass = '';
    this.btnTooltip = '';
    this.btnTooltipPosition = 'bottom';
    this.isBtnDisabled = false;
    this.btnClicked = new EventEmitter<boolean>();
    this.btnSeverity = ButtonSeverity.PRIMARY;
    this.btnStyle = ButtonStyle.TEXT;
    this.btnRounded = false;
    this.isText = false;
   
  }

  handleBtnClick(event: any) {
    this.btnClicked.emit(true);
  }
}
