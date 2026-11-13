import { Pipe, PipeTransform } from '@angular/core';

const formatter = new Intl.NumberFormat('fr-FR');

export function formatFcfa(amount: number): string {
  return `${formatter.format(amount)} FCFA`;
}

@Pipe({ name: 'fcfa' })
export class FcfaPipe implements PipeTransform {
  transform(amount: number): string {
    return formatFcfa(amount);
  }
}
