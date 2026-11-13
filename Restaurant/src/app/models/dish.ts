export type CategoryId = 'plats' | 'grillades' | 'street-food' | 'boissons' | 'desserts';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  emoji: string;
}

export interface Dish {
  id: string;
  name: string;
  /** Nom en éwé / mina quand il diffère du nom affiché. */
  localName?: string;
  description: string;
  /** Prix en FCFA. */
  price: number;
  category: CategoryId;
  emoji: string;
  /** Chemin d'une photo dans /public (ex. "images/fufu.jpg"). Sinon, une illustration est affichée. */
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
}

export interface CartLine {
  dish: Dish;
  quantity: number;
}
