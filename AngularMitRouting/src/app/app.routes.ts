import { Routes } from '@angular/router';

// EINTRAGEN
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ServicesComponent } from './services/services.component';

import { ProduktListComponent } from './produkte/produkt-list/produkt-list.component';
import { ProduktAddEditComponent } from './produkte/produkt-add-edit/produkt-add-edit.component';
import { ProduktDetailsComponent } from './produkte/produkt-details/produkt-details.component';

//export const appRoutes: Routes = [
export const routes: Routes = [

  // EINTRAGEN
  { path: 'home', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'services', component: ServicesComponent },

  // EINTRAGEN
  { path: 'produkte', component: ProduktListComponent },
  { path: 'produkte/add', component: ProduktAddEditComponent },
  { path: 'produkte/edit/:id', component: ProduktAddEditComponent },
  { path: 'produkte/details/:id', component: ProduktDetailsComponent },

  // STARTSEITE
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // Wildcard-Route für alle nicht gefundenen Pfade
];