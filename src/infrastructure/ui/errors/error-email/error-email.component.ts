import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'sf-error-email',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './error-email.component.html',
    styleUrl: './error-email.component.scss'
})
export class ErrorEmailComponent {
    /** Props */
    errorMsg = 'E-mail is not in a valid form';

    /** I/O */
    @Input() formCtrl!: FormControl<any>;
}
