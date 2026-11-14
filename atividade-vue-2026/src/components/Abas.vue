<script>
export default {
  props: {
    itens: { type: Array, required: true },
  },
  data() {
    return { ativa: 0 }
  },
}
</script>

<template>
  <div class="botoes" role="group" aria-label="Abas sobre a biblioteca">
    <button
      v-for="(item, indice) in itens"
      :key="item.titulo"
      type="button"
      :aria-pressed="ativa === indice"
      @click="ativa = indice"
    >
      {{ item.titulo }}
    </button>
  </div>
  <p class="painel">{{ itens[ativa].texto }}</p>
</template>
