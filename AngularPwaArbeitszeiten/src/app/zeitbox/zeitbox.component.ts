import { Component } from '@angular/core';

// EINTRAGEN
import { ArbeitszeitenService } from '../_services/arbeitszeiten.service';
import { Arbeitszeit } from '../models/arbeitszeit';

// EINTRAGEN für Formular-Elemente
import { NgForm, FormsModule } from '@angular/forms';  // Importiere FormsModule

// EINTRAGEN für ngFor
import { CommonModule } from '@angular/common';  // CommonModule importieren

@Component({
  selector: 'app-zeitbox',
  standalone: true,
  imports: [
    FormsModule, // EINTRAGEN für Formular-Elemente
    CommonModule, // EINTRAGEN für ngFor
  ],  
  templateUrl: './zeitbox.component.html',
  styleUrl: './zeitbox.component.scss'
})
export class ZeitboxComponent {

  // Formular Objekt
  arbeitszeit: Arbeitszeit = new Arbeitszeit(0, '', '', '');

  // List-Objekt
  arbeitszeiten: Arbeitszeit[] = [];

  // DI für ArbeitszeitenService
  constructor(private arbeitszeitenService: ArbeitszeitenService) {}

  ngOnInit(): void {
    this.arbeitszeiten = this.arbeitszeitenService.getArbeitszeiten();
  }

  onSubmit(): void {
    if (this.arbeitszeit.datum && this.arbeitszeit.startzeit && this.arbeitszeit.endzeit) {
      this.arbeitszeit.id = this.arbeitszeiten.length + 1;  // Generiere eine einfache Id
      this.arbeitszeitenService.addArbeitszeit(this.arbeitszeit);

      this.arbeitszeiten = this.arbeitszeitenService.getArbeitszeiten();  // Aktualisiere die Liste

      this.arbeitszeit = new Arbeitszeit(0, '', '', '');  // Formular leeren
    }
  }

  removeArbeitszeit(id: number): void {
    this.arbeitszeitenService.removeArbeitszeit(id);
    this.arbeitszeiten = this.arbeitszeitenService.getArbeitszeiten();  // Liste aktualisieren
  }

}
