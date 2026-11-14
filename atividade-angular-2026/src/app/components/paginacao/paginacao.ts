import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.html',
  styleUrl: './paginacao.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paginacao {
  readonly paginaAtual = input.required<number>();
  readonly totalPaginas = input.required<number>();
  readonly mudarPagina = output<number>();

  protected readonly paginas = computed(() =>
    Array.from({ length: this.totalPaginas() }, (_, indice) => indice + 1),
  );

  protected mudar(pagina: number): void {
    // O componente emite o número para o App atualizar a página atual.
    this.mudarPagina.emit(pagina);
  }
}
