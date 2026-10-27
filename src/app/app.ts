import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar">
      <div class="navbar-inner">
        <nav class="links">
          <a routerLink="/" routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

      </div>
    </header>

    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.css',
})
export class AppComponent {}
