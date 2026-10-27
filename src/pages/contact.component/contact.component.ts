import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact">
      <h1>Contactez-nous</h1>
      <p class="subtitle">Une question ? Écrivez-nous.</p>

      <div class="card">
        <label for="nom">Nom</label>
        <input id="nom" [(ngModel)]="nom" placeholder="Votre nom" />

        <label for="message">Message</label>
        <textarea id="message" rows="5" [(ngModel)]="message"
                  placeholder="Votre message..."></textarea>

        <button class="btn-envoyer" (click)="envoyer()"
                [disabled]="!nom || !message">
          Envoyer
        </button>

        @if (envoye) {
          <p class="succes">Merci {{ nom }} ! Message envoyé avec succès !! <i></i></p>
        }
      </div>
    </section>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nom = '';
  message = '';
  envoye = false;

  envoyer() {
    this.envoye = true;
  }
}
