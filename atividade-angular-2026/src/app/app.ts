import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Abas } from './components/abas/abas';
import { Acordeao } from './components/acordeao/acordeao';
import { BarraProgresso } from './components/barra-progresso/barra-progresso';
import { MenuSuspenso } from './components/menu-suspenso/menu-suspenso';
import { NotificacaoToast } from './components/notificacao-toast/notificacao-toast';
import { Paginacao } from './components/paginacao/paginacao';
import { Catalogo } from './services/catalogo';

@Component({
  selector: 'app-root',
  imports: [Abas, Acordeao, BarraProgresso, MenuSuspenso, NotificacaoToast, Paginacao],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly catalogo = inject(Catalogo);
  private readonly livrosPorPagina = 3;

  protected readonly categorias = this.catalogo.categorias;
  protected readonly categoria = signal('Todas');
  protected readonly paginaAtual = signal(1);
  protected readonly progresso = signal(0);

  protected readonly perguntas = [
    { titulo: 'Quem pode pegar livros?', texto: 'Alunos e funcionários com cadastro na biblioteca.' },
    { titulo: 'Qual é o prazo de devolução?', texto: 'Os livros podem ficar emprestados por até sete dias.' },
    { titulo: 'Posso renovar um empréstimo?', texto: 'Sim, desde que o livro não esteja reservado.' },
  ];

  protected readonly abas = [
    { titulo: 'Horários', texto: 'Segunda a sexta, das 8h às 20h.' },
    { titulo: 'Localização', texto: 'Bloco A, térreo.' },
    { titulo: 'Serviços', texto: 'Empréstimos, reservas e salas de estudo.' },
  ];

  // Os sinais computados atualizam o catálogo quando o filtro ou a página muda.
  protected readonly livrosFiltrados = computed(() => this.catalogo.filtrar(this.categoria()));
  protected readonly totalPaginas = computed(() =>
    Math.ceil(this.livrosFiltrados().length / this.livrosPorPagina),
  );
  protected readonly livrosDaPagina = computed(() => {
    const inicio = (this.paginaAtual() - 1) * this.livrosPorPagina;
    return this.livrosFiltrados().slice(inicio, inicio + this.livrosPorPagina);
  });

  protected filtrar(categoria: string): void {
    this.categoria.set(categoria);
    this.paginaAtual.set(1);
  }
}
