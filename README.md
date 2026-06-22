# Rumo à Bolsa · SuperAção Esportiva

App de formação integral de jovens atletas. Projeto React + Vite.

## Rodar no seu computador

Precisa do Node.js 18+ instalado.

```bash
npm install
npm run dev
```

Abre o link que aparecer (geralmente http://localhost:5173).

## Publicar no GitHub Pages (automático, recomendado)

Este projeto já vem com um workflow que faz o build e publica sozinho.

1. Suba todos os arquivos deste projeto para o repositório `rumo-a-bolsa` (branch `main`).
2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Pronto. A cada `push` na branch `main`, o site é reconstruído e publicado.
5. O link fica em `https://fernandasoares.github.io/rumo-a-bolsa/`.

O primeiro deploy roda assim que você sobe os arquivos. Acompanhe em **Actions**.

## Publicar manualmente (alternativa)

```bash
npm install
npm run build
```

Isso gera a pasta `dist`. Você pode publicar o conteúdo dela no GitHub Pages
(por exemplo, na branch `gh-pages`).

## Estrutura

- `src/App.jsx` — o app inteiro (código-fonte).
- `src/main.jsx` — ponto de entrada que renderiza o app.
- `src/index.css` — Tailwind + ajustes globais.
- `index.html` — HTML base.
- `vite.config.js` — configuração do Vite (base relativa para o GitHub Pages).
- `.github/workflows/deploy.yml` — publicação automática no GitHub Pages.

## Acesso de teste

- Atleta com 12 anos ou mais entra direto.
- Atleta com menos de 12 entra com o código do responsável.
