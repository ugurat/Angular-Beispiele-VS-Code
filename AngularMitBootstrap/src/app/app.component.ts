import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Korrektur: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'AngularMitBootstrap';

  // EINTRAGEN
  onButtonClick() {
    alert('Button wurde geklickt!');
  }

}
