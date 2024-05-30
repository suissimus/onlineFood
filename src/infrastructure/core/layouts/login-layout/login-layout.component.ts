import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {ButtonComponent} from "../../../ui/button/button.component";
import {InputTextComponent} from "../../../ui/input-text/input-text.component";

@Component({
  selector: 'sf-login-layout',
  standalone: true,
    imports: [RouterOutlet, ButtonComponent , InputTextComponent],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
}
