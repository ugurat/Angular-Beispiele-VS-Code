import { Routes } from '@angular/router';

// EINTRAGEN
import { HomeComponent } from './home/home.component';
import { CounterboxComponent } from './counterbox/counterbox.component';
import { DisplayboxComponent } from './displaybox/displaybox.component';

//export const appRoutes: Routes = [
export const routes: Routes = [

  // EINTRAGEN
  { path: 'home', component: HomeComponent },
  { path: 'counterbox', component: CounterboxComponent },
  { path: 'displaybox', component: DisplayboxComponent },

  // STARTSEITE
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // Wildcard-Route für alle nicht gefundenen Pfade
];