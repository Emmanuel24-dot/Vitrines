import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RESTAURANT } from '../../data/restaurant';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly restaurant = RESTAURANT;
  protected readonly whatsapp = whatsappLink();
  protected readonly phoneHref = `tel:${RESTAURANT.phone.replaceAll(' ', '')}`;
  protected readonly mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.address)}`;

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    subject: ['Question'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly sent = signal(false);

  protected readonly subjects = ['Question', 'Événement / traiteur', 'Réservation', 'Autre'];

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, subject, message } = this.form.getRawValue();
    const text = `Bonjour, je suis ${name}.\n[${subject}]\n\n${message}`;
    window.open(whatsappLink(text), '_blank', 'noopener');
    this.sent.set(true);
    this.form.reset();
  }
}
