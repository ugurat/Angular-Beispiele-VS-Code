import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// EINTRAGEN für Router!
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterboxComponent } from "./counterbox/counterbox.component";
import { DisplayboxComponent } from "./displaybox/displaybox.component"; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, // <-- EINTRAGEN für Router!
    RouterLinkActive,
    CounterboxComponent,
    DisplayboxComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMitServices';
}
