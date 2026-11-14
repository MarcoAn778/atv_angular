# Biblioteca do Campus em Angular

A aplicação recria a tela do projeto Vue com Angular 21 e TypeScript. Os seis componentes têm arquivos separados de TypeScript, HTML e CSS em `src/app/components/`.

## Rodar no Codespace

Na pasta `atividade-angular-2026`, rode os comandos abaixo.

```bash
npm ci
__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS="${CODESPACE_NAME}-4200.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}" npm start -- --host 0.0.0.0
```

Abra a porta **4200** na aba **Portas** do Codespace. Na máquina local, use `npm start` e abra `http://localhost:4200`.

## Demonstrar no vídeo

1. Navegue pelo catálogo e filtre por Literatura. Mostre os sinais computados em `app.ts` e o evento emitido pela paginação.
2. Abra duas perguntas e troque de aba. Mostre como cada componente guarda o índice selecionado.
3. Abra o menu e clique fora, avance a barra de progresso e simule a reserva. Mostre o evento de clique no documento e o temporizador do aviso.
