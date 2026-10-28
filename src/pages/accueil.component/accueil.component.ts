import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accueil.component.html', // <--- CHANGEMENT ICI
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  compteur = 0;

  features = [
    { icone: 'fa-solid fa-bolt', titre: 'Rapide', texte: 'Des composants légers qui se chargent instantanément.' },
    { icone: 'fa-solid fa-puzzle-piece', titre: 'Modulaire', texte: 'Chaque page est un composant indépendant et réutilisable.' },
    { icone: 'fa-solid fa-palette', titre: 'Élégant', texte: 'Un design propre, responsive et facile à personnaliser.' },
  ];
}