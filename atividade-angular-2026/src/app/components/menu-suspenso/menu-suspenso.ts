import { ChangeDetectionStrategy, Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-menu-suspenso',
  templateUrl: './menu-suspenso.html',
  styleUrl: './menu-suspenso.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'fecharAoClicarFora($event)',
    '(keydown.escape)': 'fechar()',
  },
})
export class MenuSuspenso {
  readonly opcoes = input.required<readonly string[]>();
  readonly selecionada = input.required<string>();
  readonly selecionar = output<string>();

  protected readonly aberto = signal(false);
  private readonly elemento = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly botao = viewChild.required<ElementRef<HTMLButtonElement>>('botao');

  protected escolher(opcao: string): void {
    this.fechar();
    this.selecionar.emit(opcao);
  }

  protected fechar(): void {
    this.aberto.set(false);
    this.botao().nativeElement.focus();
  }

  protected fecharAoClicarFora(evento: MouseEvent): void {
    // O Angular gerencia o listener global definido no host.
    if (this.aberto() && evento.target instanceof Node && !this.elemento.nativeElement.contains(evento.target)) {
      this.aberto.set(false);
    }
  }
}
