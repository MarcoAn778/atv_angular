import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-acordeao',
  templateUrl: './acordeao.html',
  styleUrl: './acordeao.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Acordeao {
  readonly itens = input.required<readonly { titulo: string; texto: string }[]>();
  protected readonly aberto = signal<number | null>(null);

  protected alternar(indice: number): void {
    // Um único índice garante que só uma pergunta fique aberta por vez.
    this.aberto.update((atual) => (atual === indice ? null : indice));
  }
}
