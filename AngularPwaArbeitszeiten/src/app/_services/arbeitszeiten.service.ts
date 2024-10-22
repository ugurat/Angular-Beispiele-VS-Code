import { Injectable } from '@angular/core';

// EINTRAGEN
import { Arbeitszeit } from '../models/arbeitszeit';

@Injectable({
  providedIn: 'root'
})
export class ArbeitszeitenService {

  constructor() { 
    this.loadArbeitszeiten();  // Lade Arbeitszeiten beim Start
  }


 // Neue Methode zum Speichern der Arbeitszeiten im LocalStorage
 saveArbeitszeiten(): void {
  localStorage.setItem('arbeitszeiten', JSON.stringify(this.arbeitszeiten));
}

// Neue Methode zum Laden der Arbeitszeiten aus dem LocalStorage
loadArbeitszeiten(): void {
  const storedArbeitszeiten = localStorage.getItem('arbeitszeiten');
  if (storedArbeitszeiten) {
    this.arbeitszeiten = JSON.parse(storedArbeitszeiten);
  }
}



  // EINTRAGEN
  arbeitszeiten: Arbeitszeit[] = [];

  // Funktion zum Hinzufügen einer neuen Arbeitszeit
  addArbeitszeit(arbeitszeit: Arbeitszeit): void {
    this.arbeitszeiten.push(arbeitszeit);
    this.saveArbeitszeiten();  // Speichere nach Hinzufügen
  }

  // Funktion zum Entfernen einer Arbeitszeit per Id
  removeArbeitszeit(id: number): void {
    this.arbeitszeiten = this.arbeitszeiten.filter(zeit => zeit.id !== id);
    this.saveArbeitszeiten();  // Speichere nach Entfernen
  }

  // Funktion zum Aktualisieren einer bestehenden Arbeitszeit
  updateArbeitszeit(updatedArbeitszeit: Arbeitszeit): void {
    const index = this.arbeitszeiten.findIndex(zeit => zeit.id === updatedArbeitszeit.id);
    if (index !== -1) {
      this.arbeitszeiten[index] = updatedArbeitszeit;
      this.saveArbeitszeiten();  // Speichere nach Aktualisieren
    }
  }

  // Funktion zum Abrufen aller Arbeitszeiten
  getArbeitszeiten(): Arbeitszeit[] {
    return this.arbeitszeiten;
  }

}
