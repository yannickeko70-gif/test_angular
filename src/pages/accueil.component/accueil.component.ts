import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- HERO -->
    <section class="hero">
      <span class="badge">✨ Propulsé par Angular</span>
      <h1>Construisez des interfaces <span class="gradient-text">modernes</span> et rapides</h1>
      <p class="lead">
        Une petite application de démonstration avec routing, composants
        standalone et un compteur interactif.
      </p>

      <div class="hero-actions">
        <a routerLink="/contact" class="btn-primary">Nous contacter</a>
        <a href="#compteur" class="btn-ghost">Essayer le compteur ↓</a>
      </div>
    </section>

    <!-- COMPTEUR -->
    <section class="counter-section" id="compteur">
      <div class="counter-card">
        <p class="counter-label">Compteur interactif</p>

        <div class="counter-value"
             [class.negative]="compteur < 0"
             [class.zero]="compteur === 0">
          {{ compteur }}
        </div>

        <div class="counter-actions">
          <button class="round minus" (click)="compteur = compteur - 1"
                  aria-label="Retirer 1">−</button>
          <button class="round plus" (click)="compteur = compteur + 1"
                  aria-label="Ajouter 1">+</button>
        </div>

        <button class="reset" (click)="compteur = 0">Réinitialiser</button>
      </div>
    </section>

    <!-- CARTES -->
    <section class="features">
      @for (f of features; track f.titre) {
        <article class="feature">
          <div class="feature-icon">{{ f.icone }}</div>
          <h3>{{ f.titre }}</h3>
          <p>{{ f.texte }}</p>
        </article>
      }
    </section>
  `,
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  compteur = 0;

  features = [
    { icone: '⚡', titre: 'Rapide', texte: 'Des composants légers qui se chargent instantanément.' },
    { icone: '🧩', titre: 'Modulaire', texte: 'Chaque page est un composant indépendant et réutilisable.' },
    { icone: '🎨', titre: 'Élégant', texte: 'Un design propre, responsive et facile à personnaliser.' },
  ];
}

