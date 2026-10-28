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
             [routerLinkActiveOptions]="{ exact: true }">
            <i class="fa-solid fa-house"></i> Accueil
          </a>
          <a routerLink="/contact" routerLinkActive="active">
            <i class="fa-solid fa-envelope"></i> Contact
          </a>
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