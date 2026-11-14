<script>
import Acordeao from './components/Acordeao.vue'
import Paginacao from './components/Paginacao.vue'
import BarraProgresso from './components/BarraProgresso.vue'
import Abas from './components/Abas.vue'
import MenuSuspenso from './components/MenuSuspenso.vue'
import NotificacaoToast from './components/NotificacaoToast.vue'
import fotoBiblioteca from './assets/biblioteca.webp'

const livros = [
  { titulo: 'Código Limpo', autor: 'Robert C. Martin', categoria: 'Tecnologia' },
  { titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Literatura' },
  { titulo: 'O Programador Pragmático', autor: 'David Thomas e Andrew Hunt', categoria: 'Tecnologia' },
  { titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', categoria: 'Literatura' },
  { titulo: 'Entendendo Algoritmos', autor: 'Aditya Y. Bhargava', categoria: 'Tecnologia' },
  { titulo: 'Capitães da Areia', autor: 'Jorge Amado', categoria: 'Literatura' },
  { titulo: 'Padrões de Projeto', autor: 'Erich Gamma e outros', categoria: 'Tecnologia' },
]

const livrosPorPagina = 3

export default {
  components: { Acordeao, Paginacao, BarraProgresso, Abas, MenuSuspenso, NotificacaoToast },
  data() {
    return {
      fotoBiblioteca,
      paginaAtual: 1,
      categoria: 'Todas',
      categorias: ['Todas', 'Tecnologia', 'Literatura'],
      progresso: 0,
      perguntas: [
        { titulo: 'Quem pode pegar livros?', texto: 'Alunos e funcionários com cadastro na biblioteca.' },
        { titulo: 'Qual é o prazo de devolução?', texto: 'Os livros podem ficar emprestados por até sete dias.' },
        { titulo: 'Posso renovar um empréstimo?', texto: 'Sim, desde que o livro não esteja reservado.' },
      ],
      abas: [
        { titulo: 'Horários', texto: 'Segunda a sexta, das 8h às 20h.' },
        { titulo: 'Localização', texto: 'Bloco A, térreo.' },
        { titulo: 'Serviços', texto: 'Empréstimos, reservas e salas de estudo.' },
      ],
    }
  },
  computed: {
    // O Vue recalcula a lista quando o filtro ou a página muda.
    livrosFiltrados() {
      if (this.categoria === 'Todas') return livros
      return livros.filter(livro => livro.categoria === this.categoria)
    },
    totalPaginas() {
      return Math.ceil(this.livrosFiltrados.length / livrosPorPagina)
    },
    livrosDaPagina() {
      const inicio = (this.paginaAtual - 1) * livrosPorPagina
      return this.livrosFiltrados.slice(inicio, inicio + livrosPorPagina)
    },
  },
  methods: {
    filtrar(categoria) {
      this.categoria = categoria
      this.paginaAtual = 1
    },
  },
}
</script>

<template>
  <header class="topo">
    <div class="largura barra-topo">
      <a class="marca" href="#inicio">
        <span class="marca-livro" aria-hidden="true"></span>
        Biblioteca
      </a>
      <nav class="navegacao" aria-label="Navegação principal">
        <a href="#catalogo">Catálogo</a>
        <a href="#informacoes">Informações</a>
      </nav>
    </div>
  </header>

  <main id="inicio" class="largura pagina">
    <section class="destaque" aria-labelledby="titulo-principal">
      <div class="destaque-texto">
        <h1 id="titulo-principal">Biblioteca<br>do Campus</h1>
        <p>Explore o acervo e confira os serviços da biblioteca.</p>
        <a class="botao-destaque" href="#catalogo">Explorar catálogo <span aria-hidden="true">↓</span></a>
      </div>
      <img :src="fotoBiblioteca" alt="" width="1774" height="887" fetchpriority="high">
    </section>

    <section id="catalogo" class="cartao catalogo" aria-labelledby="titulo-catalogo">
      <div class="catalogo-topo">
        <div>
          <h2 id="titulo-catalogo">Catálogo</h2>
          <p class="apoio" aria-live="polite">{{ livrosFiltrados.length }} títulos no acervo</p>
        </div>
        <div class="filtro">
          <span>Categoria</span>
          <MenuSuspenso :opcoes="categorias" :selecionada="categoria" @selecionar="filtrar" />
        </div>
      </div>

      <ul class="livros">
        <li v-for="livro in livrosDaPagina" :key="livro.titulo" class="livro">
          <span class="capa" :class="{ literatura: livro.categoria === 'Literatura' }" aria-hidden="true"></span>
          <div>
            <p class="categoria-livro">{{ livro.categoria }}</p>
            <h3>{{ livro.titulo }}</h3>
            <p class="autor">{{ livro.autor }}</p>
          </div>
        </li>
      </ul>

      <Paginacao
        :pagina-atual="paginaAtual"
        :total-paginas="totalPaginas"
        @mudar-pagina="paginaAtual = $event"
      />
    </section>

    <div id="informacoes" class="grade">
      <section class="cartao">
        <h2>Perguntas frequentes</h2>
        <Acordeao :itens="perguntas" />
      </section>

      <section class="cartao">
        <h2>Sobre a biblioteca</h2>
        <Abas :itens="abas" />
      </section>

      <section class="cartao">
        <h2>Simulação de envio</h2>
        <p class="apoio descricao">Acompanhe o progresso do envio de um comprovante.</p>
        <BarraProgresso :valor="progresso" />
        <div class="botoes">
          <button type="button" :disabled="progresso === 100" @click="progresso += 25">
            Avançar 25%
          </button>
          <button type="button" :disabled="progresso === 0" @click="progresso = 0">Reiniciar</button>
        </div>
      </section>

      <section class="cartao reserva">
        <h2>Reserva de livro</h2>
        <p class="apoio descricao">Simule uma reserva para ver a confirmação na tela.</p>
        <NotificacaoToast mensagem="Reserva de exemplo registrada." />
      </section>
    </div>
  </main>
</template>
