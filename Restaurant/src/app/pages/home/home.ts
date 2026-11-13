import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES, DISHES } from '../../data/dishes';
import { RESTAURANT } from '../../data/restaurant';
import { DishCard } from '../../shared/dish-card/dish-card';
import { FcfaPipe } from '../../shared/fcfa';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DishCard, FcfaPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly restaurant = RESTAURANT;
  protected readonly categories = CATEGORIES;
  protected readonly featured = DISHES.filter((dish) => dish.popular).slice(0, 6);
  protected readonly whatsapp = whatsappLink('Bonjour ! Je voudrais passer une commande.');

  protected readonly promises = [
    {
      icon: '👩🏾‍🍳',
      title: 'Fait maison, chaque jour',
      text: 'Nos sauces mijotent dès l’aube, selon les recettes transmises par nos mamans.',
    },
    {
      icon: '🧺',
      title: 'Produits du marché',
      text: 'Gboma, gombo, piment, poisson fumé : achetés frais au marché d’Adawlato.',
    },
    {
      icon: '🛵',
      title: `Livré dans le ${RESTAURANT.delivery.zone}`,
      text: 'Commandez en quelques clics, on vous appelle pour confirmer et on livre chaud.',
    },
  ];

  protected readonly steps = [
    { title: 'Choisissez', text: 'Parcourez le menu et ajoutez vos plats au panier.' },
    { title: 'Envoyez', text: 'Validez : votre commande part directement sur notre WhatsApp.' },
    { title: 'Régalez-vous', text: 'On confirme, on cuisine, on livre — ou vous passez la prendre.' },
  ];

  // Exemples à remplacer par de vrais avis clients.
  protected readonly testimonials = [
    {
      quote: 'Le fufu sauce arachide m’a ramenée directement chez ma grand-mère à Kpalimé.',
      author: 'Afi',
      place: 'Bè',
    },
    {
      quote: 'Le koklo mémé est bien pimenté comme il faut. Livraison rapide à Agoè.',
      author: 'Komlan',
      place: 'Agoè',
    },
    {
      quote: 'Enfin un vrai ayimolou du matin, avec le gari et tout. Je recommande !',
      author: 'Essi',
      place: 'Tokoin',
    },
  ];
}
