import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../infrastructure/ui/button/button.component";

@Component({
    selector: 'sf-order-online-dialog',
    standalone: true,
    templateUrl: './order-online-dialog.component.html',
    styleUrl: './order-online-dialog.component.scss',
    imports: [ButtonComponent]
})
export class OrderOnlineDialogComponent {

}
