# 2 pages simples avec Angular (v17+)

Composants standalone, routing et deux pages : **Accueil** (compteur) et **Contact** (formulaire).

## Préparation

```bash
ng new mon-app --routing --style=css
cd mon-app
ng g c pages/accueil
ng g c pages/contact
```

## 1. `app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
];
```

## 2. `app.component.ts` (menu de navigation)

```ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="display:flex;gap:16px;padding:12px;background:#eee">
      <a routerLink="/">Accueil</a>
      <a routerLink="/contact">Contact</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {}
```

## 3. Page Accueil : un compteur

Fichier : `accueil.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  template: `
    <div style="padding:20px;text-align:center">
      <h1>Bienvenue 👋</h1>
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
```

## 4. Page Contact : un formulaire

Fichier : `contact.component.ts`

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="padding:20px;max-width:400px;margin:auto">
      <h1>Contact</h1>
      <input [(ngModel)]="nom" placeholder="Nom"
             style="display:block;width:100%;margin-bottom:10px" />
      <textarea [(ngModel)]="message" placeholder="Message"
                style="display:block;width:100%;margin-bottom:10px"></textarea>
      <button (click)="envoyer()" [disabled]="!nom || !message">Envoyer</button>

      @if (envoye) {
        <p style="color:green">Merci {{ nom }}, message envoyé ✅</p>
      }
    </div>
  `,
})
export class ContactComponent {
  nom = '';
  message = '';
  envoye = false;

  envoyer() {
    this.envoye = true;
  }
}
```

## Lancer le projet

```bash
ng serve
```

Puis ouvrir `http://localhost:4200`.

> **Note :** pour une version d'Angular antérieure à 17, remplacer `@if` par `*ngIf` et utiliser les modules (`NgModule`) à la place des composants standalone.
