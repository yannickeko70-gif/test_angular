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
