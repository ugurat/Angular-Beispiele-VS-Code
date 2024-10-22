import { Component } from '@angular/core';

// 1 - EINTRAGEN
import { CounterService } from '../_services/counter.service';

@Component({
  selector: 'app-displaybox',
  standalone: true,
  imports: [],
  templateUrl: './displaybox.component.html',
  styleUrl: './displaybox.component.scss'
})
export class DisplayboxComponent {

  // 2 – DI
  // protected ermöglicht den Zugriff der Html-Seite auf die Service-Elemente
  constructor(protected counterService: CounterService){ }

}
