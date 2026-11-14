<script>
export default {
  props: {
    valor: { type: Number, required: true },
  },
}
</script>

<template>
  <div class="progresso">
    <progress :value="valor" max="100" aria-label="Progresso do envio"></progress>
    <span>{{ valor }}%</span>
  </div>
</template>
