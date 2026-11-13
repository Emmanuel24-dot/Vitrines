import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESTAURANT } from '../../data/restaurant';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly restaurant = RESTAURANT;

  protected readonly values = [
    {
      icon: '🌽',
      title: 'Le maïs, notre base',
      text: 'Akoumé, ablo, akpan : le maïs est au cœur de la cuisine du Sud-Togo, et de la nôtre.',
    },
    {
      icon: '🔥',
      title: 'Le temps de bien faire',
      text: 'Pas de raccourcis : les sauces mijotent des heures, les grillades cuisent au feu de bois.',
    },
    {
      icon: '🤝🏾',
      title: 'Local avant tout',
      text: 'Nous travaillons avec les revendeuses des marchés de Lomé et des producteurs des Plateaux.',
    },
  ];
}
