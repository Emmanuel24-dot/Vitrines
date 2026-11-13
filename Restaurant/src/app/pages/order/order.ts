import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RESTAURANT } from '../../data/restaurant';
import { CartStore } from '../../services/cart-store';
import { FcfaPipe, formatFcfa } from '../../shared/fcfa';
import { whatsappLink } from '../../shared/whatsapp';

type Mode = 'livraison' | 'emporter';

@Component({
  selector: 'app-order',
  imports: [RouterLink, ReactiveFormsModule, FcfaPipe],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  protected readonly cart = inject(CartStore);
  protected readonly delivery = RESTAURANT.delivery;

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s]{8,}$/)]],
    mode: ['livraison' as Mode],
    address: [''],
    note: [''],
  });

  protected readonly mode = toSignal(this.form.controls.mode.valueChanges, {
    initialValue: this.form.controls.mode.value,
  });

  protected readonly deliveryFee = computed(() => {
    if (this.mode() !== 'livraison') return 0;
    return this.cart.subtotal() >= this.delivery.freeFrom ? 0 : this.delivery.fee;
  });
  protected readonly total = computed(() => this.cart.subtotal() + this.deliveryFee());
  protected readonly missingForFreeDelivery = computed(() =>
    Math.max(0, this.delivery.freeFrom - this.cart.subtotal()),
  );

  /** Lien WhatsApp de la dernière commande envoyée, pour pouvoir la renvoyer. */
  protected readonly sentLink = signal<string | null>(null);

  protected submit(): void {
    const { address } = this.form.controls;
    const needsAddress = this.mode() === 'livraison' && !address.value.trim();
    address.setErrors(needsAddress ? { required: true } : null);

    if (this.form.invalid || this.cart.count() === 0) {
      this.form.markAllAsTouched();
      return;
    }

    const link = whatsappLink(this.buildMessage());
    this.sentLink.set(link);
    window.open(link, '_blank', 'noopener');
  }

  protected finish(): void {
    this.cart.clear();
    this.form.reset();
    this.sentLink.set(null);
  }

  private buildMessage(): string {
    const { name, phone, mode, address, note } = this.form.getRawValue();
    const lines = this.cart
      .items()
      .map(
        ({ dish, quantity }) =>
          `• ${quantity} × ${dish.name} — ${formatFcfa(dish.price * quantity)}`,
      );

    return [
      `Bonjour ${RESTAURANT.name} ! Je souhaite commander :`,
      '',
      ...lines,
      '',
      `Sous-total : ${formatFcfa(this.cart.subtotal())}`,
      mode === 'livraison'
        ? `Livraison : ${this.deliveryFee() ? formatFcfa(this.deliveryFee()) : 'offerte'}`
        : null,
      `*Total : ${formatFcfa(this.total())}*`,
      '',
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      mode === 'livraison' ? `Livraison à : ${address}` : 'À emporter',
      note.trim() ? `Note : ${note.trim()}` : null,
    ]
      .filter((line) => line !== null)
      .join('\n');
  }
}
