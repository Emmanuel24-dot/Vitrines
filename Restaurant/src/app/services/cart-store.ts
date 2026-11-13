import { Injectable, computed, effect, signal } from '@angular/core';
import { DISHES_BY_ID } from '../data/dishes';
import { CartLine } from '../models/dish';

type StoredLine = { dishId: string; quantity: number };

const STORAGE_KEY = 'saveurs-du-togo.cart';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private readonly lines = signal<StoredLine[]>(loadLines());

  readonly items = computed<CartLine[]>(() =>
    this.lines().flatMap(({ dishId, quantity }) => {
      const dish = DISHES_BY_ID.get(dishId);
      return dish ? [{ dish, quantity }] : [];
    }),
  );
  readonly count = computed(() => this.items().reduce((sum, line) => sum + line.quantity, 0));
  readonly subtotal = computed(() =>
    this.items().reduce((sum, line) => sum + line.dish.price * line.quantity, 0),
  );

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lines()));
      } catch {
        // Stockage indisponible (navigation privée…) : le panier reste en mémoire.
      }
    });
  }

  quantityOf(dishId: string): number {
    return this.lines().find((line) => line.dishId === dishId)?.quantity ?? 0;
  }

  add(dishId: string): void {
    this.setQuantity(dishId, this.quantityOf(dishId) + 1);
  }

  decrement(dishId: string): void {
    this.setQuantity(dishId, this.quantityOf(dishId) - 1);
  }

  remove(dishId: string): void {
    this.setQuantity(dishId, 0);
  }

  clear(): void {
    this.lines.set([]);
  }

  private setQuantity(dishId: string, quantity: number): void {
    this.lines.update((lines) => {
      const others = lines.filter((line) => line.dishId !== dishId);
      if (quantity <= 0) return others;
      const exists = lines.some((line) => line.dishId === dishId);
      return exists
        ? lines.map((line) => (line.dishId === dishId ? { dishId, quantity } : line))
        : [...lines, { dishId, quantity }];
    });
  }
}

function loadLines(): StoredLine[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(parsed)
      ? parsed.filter((line) => typeof line?.dishId === 'string' && line.quantity > 0)
      : [];
  } catch {
    return [];
  }
}
