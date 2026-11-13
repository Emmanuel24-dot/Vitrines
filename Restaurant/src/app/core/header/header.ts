import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStore } from '../../services/cart-store';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly cart = inject(CartStore);
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Menu' },
    { path: '/a-propos', label: 'Notre histoire' },
    { path: '/contact', label: 'Contact' },
  ];

  protected toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
