import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.html',
  styleUrl: './abas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Abas {
  readonly itens = input.required<readonly { titulo: string; texto: string }[]>();
  protected readonly ativa = signal(0);
}
