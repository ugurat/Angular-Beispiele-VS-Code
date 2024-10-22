import { Component } from '@angular/core';

// 1 - EINTRAGEN
import { CounterService } from '../_services/counter.service';

@Component({
  selector: 'app-counterbox',
  standalone: true,
  imports: [],
  templateUrl: './counterbox.component.html',
  styleUrl: './counterbox.component.scss'
})
export class CounterboxComponent {

  // 2 - EINTRAGEN - DI
  // protected ermöglicht den Zugriff der Html-Seite auf die Service-Elemente
  constructor( protected counterService: CounterService ) {}

}
