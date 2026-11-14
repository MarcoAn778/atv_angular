<script>
export default {
  props: {
    paginaAtual: { type: Number, required: true },
    totalPaginas: { type: Number, required: true },
  },
  emits: ['mudar-pagina'],
  methods: {
    mudar(pagina) {
      // O componente emite o número e o App atualiza a página atual.
      this.$emit('mudar-pagina', pagina)
    },
  },
}
</script>

<template>
  <nav class="botoes" aria-label="Paginação do catálogo">
    <button type="button" :disabled="paginaAtual === 1" @click="mudar(paginaAtual - 1)">
      Anterior
    </button>
    <button
      v-for="pagina in totalPaginas"
      :key="pagina"
      type="button"
      :aria-label="'Página ' + pagina"
      :aria-current="paginaAtual === pagina ? 'page' : undefined"
      @click="mudar(pagina)"
    >
      {{ pagina }}
    </button>
    <button type="button" :disabled="paginaAtual === totalPaginas" @click="mudar(paginaAtual + 1)">
      Próxima
    </button>
  </nav>
</template>
