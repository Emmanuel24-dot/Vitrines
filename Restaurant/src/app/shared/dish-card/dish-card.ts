import { Component, computed, inject, input } from '@angular/core';
import { Dish } from '../../models/dish';
import { CartStore } from '../../services/cart-store';
import { FcfaPipe } from '../fcfa';

@Component({
  selector: 'app-dish-card',
  imports: [FcfaPipe],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.scss',
})
export class DishCard {
  readonly dish = input.required<Dish>();

  protected readonly cart = inject(CartStore);
  protected readonly quantity = computed(() => this.cart.quantityOf(this.dish().id));
}
