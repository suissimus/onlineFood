import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sf-min-length',
  standalone: true,
  imports: [NgIf],
  templateUrl: './min-length.component.html',
  styleUrl: './min-length.component.scss'
})
export class MinLengthComponent implements OnInit {
  /** I/O */
  @Input() formCtrl!: FormControl<any>;

  @Input() minDigits!: number;

  errorMsg: string = '';

  ngOnInit() {
    this.errorMsg = 'Minimalan broj karaktera je ' + this.minDigits;
  }
}
