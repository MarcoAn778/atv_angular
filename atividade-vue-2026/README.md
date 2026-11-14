# Biblioteca do Campus

Desafio extra da III Atividade de Vue.js. Os seis componentes ficam em `src/components/` e são usados em `src/App.vue`.

## Rodar no Codespace

Se estiver usando o ZIP, envie-o pelo Explorer do Codespace e rode `unzip atividade-vue-2026.zip` no terminal.

Com Node.js 24, abra a pasta do projeto no terminal e execute:

```bash
cd atividade-vue-2026
npm ci
npm run dev
```

Abra a porta 5173 na aba **Ports** do Codespace.

## Vídeo

1. Passe para outra página do catálogo e selecione uma categoria. O filtro volta para a primeira página. Mostre as propriedades computadas em `App.vue` e o `$emit` em `Paginacao.vue`.
2. Abra duas perguntas, troque de aba e avance a barra. Mostre o estado local do acordeão e das abas e a prop `valor` da barra.
3. Abra o menu e clique fora. Mostre o `mounted` em `MenuSuspenso.vue`. Simule a reserva e mostre o temporizador em `NotificacaoToast.vue`.
