import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Saveurs du Togo — Cuisine togolaise à Lomé',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'menu',
    title: 'Notre menu — Saveurs du Togo',
    loadComponent: () => import('./pages/menu/menu').then((m) => m.Menu),
  },
  {
    path: 'commande',
    title: 'Ma commande — Saveurs du Togo',
    loadComponent: () => import('./pages/order/order').then((m) => m.Order),
  },
  {
    path: 'a-propos',
    title: 'Notre histoire — Saveurs du Togo',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    title: 'Contact — Saveurs du Togo',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
