import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESTAURANT } from '../../data/restaurant';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly restaurant = RESTAURANT;
  protected readonly whatsapp = whatsappLink();
  protected readonly year = new Date().getFullYear();
}
