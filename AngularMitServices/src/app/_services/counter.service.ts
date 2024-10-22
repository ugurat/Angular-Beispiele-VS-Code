import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  // --- COUNTER ---- START

  public counter : number = 0; // <-- Instanzvariable

  plus(){
    // NUR über this !!!!
    this.counter++; // Greift auf die Instanzvariable zu
  }

  minus(){
    // NUR über this !!!!
    this.counter--; // Greift auf die Instanzvariable zu
  }

  // --- COUNTER ---- ENDE

}
