<script>
export default {
  props: {
    mensagem: { type: String, required: true },
  },
  data() {
    return { visivel: false, temporizador: null }
  },
  beforeUnmount() {
    clearTimeout(this.temporizador)
  },
  methods: {
    mostrar() {
      // Cada clique reinicia os quatro segundos do aviso.
      clearTimeout(this.temporizador)
      this.visivel = true
      this.temporizador = setTimeout(this.fechar, 4000)
    },
    fechar() {
      clearTimeout(this.temporizador)
      this.visivel = false
    },
  },
}
</script>

<template>
  <button type="button" @click="mostrar">Simular reserva</button>
  <div class="toast" :class="{ visivel }">
    <span role="status">{{ visivel ? mensagem : '' }}</span>
    <button v-if="visivel" type="button" @click="fechar">Fechar</button>
  </div>
</template>
