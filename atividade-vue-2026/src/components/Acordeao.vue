<script>
export default {
  props: {
    itens: { type: Array, required: true },
  },
  data() {
    return { aberto: null }
  },
  methods: {
    alternar(indice) {
      // Guardar um único índice faz a pergunta anterior fechar ao abrir outra.
      this.aberto = this.aberto === indice ? null : indice
    },
  },
}
</script>

<template>
  <div class="acordeao">
    <div v-for="(item, indice) in itens" :key="item.titulo">
      <button type="button" :aria-expanded="aberto === indice" @click="alternar(indice)">
        {{ item.titulo }}
        <span aria-hidden="true">{{ aberto === indice ? '−' : '+' }}</span>
      </button>
      <div class="resposta" :class="{ aberta: aberto === indice }" :aria-hidden="aberto !== indice">
        <div><p>{{ item.texto }}</p></div>
      </div>
    </div>
  </div>
</template>
