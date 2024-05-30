import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[atlasDialogContent]',
  standalone: true,
})
export class DialogContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
