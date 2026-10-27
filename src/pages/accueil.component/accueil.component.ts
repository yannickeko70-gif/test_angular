import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  template: `
    <div style="padding:20px;text-align:center">
      <h1>Bienvenue</h1>
      <p>Compteur : {{ compteur }}</p>
      <button (click)="compteur = compteur + 1">+1</button>
      <button (click)="compteur = compteur - 1">-1</button>
      <button (click)="compteur = 0">Reset</button>
    </div>
  `,
})
export class AccueilComponent {
  compteur = 0;
}
