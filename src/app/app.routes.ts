import { Routes } from '@angular/router';
import { AccueilComponent } from '../pages/accueil.component/accueil.component';
import { ContactComponent } from '../pages/contact.component/contact.component';
export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
];
