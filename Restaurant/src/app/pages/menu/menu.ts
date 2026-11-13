import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CATEGORIES, DISHES } from '../../data/dishes';
import { CartStore } from '../../services/cart-store';
import { DishCard } from '../../shared/dish-card/dish-card';
import { FcfaPipe } from '../../shared/fcfa';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, DishCard, FcfaPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected readonly cart = inject(CartStore);
  protected readonly categories = CATEGORIES;

  protected readonly activeCategory = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('categorie'))),
    { initialValue: null },
  );
  protected readonly search = signal('');

  /** Plats filtrés, regroupés par catégorie pour l'affichage en sections. */
  protected readonly sections = computed(() => {
    const active = this.activeCategory();
    const term = normalize(this.search().trim());

    return CATEGORIES.filter((category) => !active || category.id === active)
      .map((category) => ({
        category,
        dishes: DISHES.filter(
          (dish) =>
            dish.category === category.id &&
            (!term ||
              normalize(`${dish.name} ${dish.localName ?? ''} ${dish.description}`).includes(term)),
        ),
      }))
      .filter((section) => section.dishes.length > 0);
  });

  protected onSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }
}

/** Minuscules et sans accents, pour que « deguè » trouve « Dèguè ». */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}
