import { ChangeDetectionStrategy, Component, input, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-notificacao-toast',
  templateUrl: './notificacao-toast.html',
  styleUrl: './notificacao-toast.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificacaoToast implements OnDestroy {
  readonly mensagem = input.required<string>();
  protected readonly visivel = signal(false);
  private temporizador?: ReturnType<typeof setTimeout>;

  protected mostrar(): void {
    // Cada clique reinicia os quatro segundos do aviso.
    clearTimeout(this.temporizador);
    this.visivel.set(true);
    this.temporizador = setTimeout(() => this.fechar(), 4000);
  }

  protected fechar(): void {
    clearTimeout(this.temporizador);
    this.visivel.set(false);
  }

  ngOnDestroy(): void {
    clearTimeout(this.temporizador);
  }
}
