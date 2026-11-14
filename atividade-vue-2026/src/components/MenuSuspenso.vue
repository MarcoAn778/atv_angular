<script>
export default {
  props: {
    opcoes: { type: Array, required: true },
    selecionada: { type: String, required: true },
  },
  emits: ['selecionar'],
  data() {
    return { aberto: false }
  },
  // O listener global fecha o menu ao clicar fora e é removido ao desmontar.
  mounted() {
    document.addEventListener('click', this.fecharAoClicarFora)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.fecharAoClicarFora)
  },
  methods: {
    fecharAoClicarFora(evento) {
      if (!this.$el.contains(evento.target)) this.aberto = false
    },
    selecionar(opcao) {
      this.aberto = false
      this.$refs.botao.focus()
      this.$emit('selecionar', opcao)
    },
    fecharComEscape() {
      this.aberto = false
      this.$refs.botao.focus()
    },
  },
}
</script>

<template>
  <div class="menu" @keydown.esc="fecharComEscape">
    <button ref="botao" type="button" :aria-expanded="aberto" @click="aberto = !aberto">
      {{ selecionada }} <span aria-hidden="true">▾</span>
    </button>
    <ul v-if="aberto" class="opcoes">
      <li v-for="opcao in opcoes" :key="opcao">
        <button type="button" :aria-pressed="selecionada === opcao" @click="selecionar(opcao)">
          {{ opcao }}
        </button>
      </li>
    </ul>
  </div>
</template>
