import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {InputTextComponent} from "../infrastructure/ui/input-text/input-text.component";
import {ButtonComponent} from "../infrastructure/ui/button/button.component";
import {ToastModule} from "primeng/toast";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, InputTextComponent, ButtonComponent, ToastModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
//    isNarrowScreen= window.innerWidth < 768;

// @HostListener ('window:resize', [event])
// onresize(event) {
//   this.isNarrowScreen =window.innerWidth < 768;
}
// }