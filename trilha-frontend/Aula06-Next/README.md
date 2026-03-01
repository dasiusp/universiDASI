# Aula 6 - Introdução ao Next.js

Agora que voce ja mexeu um pouco com React e pegou a ideia dos componentes, vamos dar o proximo passo: conhecer o **Next.js**, que hoje e o caminho mais comum para apps React em producao.

---

## 1. O que é o Next.js?

O Next.js e um *framework* em cima do React. Se o React sao as pecas de LEGO, o Next e a caixa completa, com instrucoes e ferramentas prontas para voce subir um app de verdade.

### Pensando em Roteamento e Servidor

No React puro, o navegador monta tudo do zero. No Next.js, voce pode renderizar no servidor (SSR) e mandar o HTML pronto, o que ajuda no desempenho. E o roteamento vem de fabrica: as pastas viram rotas automaticamente.

---

## 2. App Router e Estrutura de Pastas

O Next.js usa um roteamento por arquivos chamado **App Router**. Em resumo: o nome das pastas vira a URL.

Existem alguns arquivos com nomes reservados que voce vai ver sempre:

1. **`page.jsx`:** Conteudo principal da rota. Se voce criar `app/sobre/page.jsx`, o Next.js cria `/sobre` automaticamente.
2. **`layout.jsx`:** A estrutura que envolve a pagina (menu, rodape, etc). Ele nao recarrega quando voce troca de rota.

---

## 3. Server Components vs Client Components

Por padrao, os componentes no Next.js rodam no servidor. Isso e rapido, mas servidor nao lida com interacao (clique, estado local, etc).

Se voce precisa de eventos (tipo `onClick`) ou estado (tipo `useState`), tem que avisar que aquele arquivo vai rodar no navegador. E so colocar `"use client"` na primeira linha:

```jsx
"use client";

import { useState } from "react";

export default function Contador() {
  const [cliques, setCliques] = useState(0);
  return <button onClick={() => setCliques(cliques + 1)}>Cliques: {cliques}</button>;
}
```

---

## 4. Aprofunde-se

A documentacao do Next.js e bem completa. Quando bater duvida, vale consultar: [Aprenda Next.js (Documentacao Oficial)](https://nextjs.org/docs)

---

## Desafio Prático: Dashboard de Planos com Layout Global

O sistema de assinaturas deu certo e agora a aplicacao precisa crescer. A ideia e migrar a tabela de precos da aula passada para um projeto Next.js, usando Layouts para ter um menu superior compartilhado em toda a aplicacao.

### Objetivo

Criar um projeto Next.js, organizar o componente `PricingCard`, exibi-lo na rota principal (`page.jsx`) e colocar uma barra de navegacao no `layout.jsx`.

### Requisitos do Sistema

- **Configuracao do Layout Global:** Modifique o arquivo `app/layout.jsx` para incluir uma tag `<nav>` com o nome do sistema. Ela deve aparecer acima de todo o conteudo.

- **Reaproveitamento de Componentes:** Crie uma pasta `components/` na raiz do projeto e coloque o `PricingCard.jsx` (da Aula 5) dentro dela.

- **Pagina Principal:** Limpe o codigo base gerado pelo Next.js no `app/page.jsx`, importe o `PricingCard` e renderize os tres planos ("Iniciante", "Profissional" e "Enterprise") com as props.

- **Logica Visual (Tailwind CSS):** Aproveite a configuracao nativa do Next.js. Ao iniciar o projeto, confirme que o Tailwind esta processando as cores e sombras da aula anterior.

---

## Como Iniciar o Projeto em Sua Máquina

Siga os passos abaixo, o instalador do Next.js facilita a configuracao.

### Passo a passo no Terminal

**Para iniciar um projeto novinho:**

```bash
npx create-next-app@latest meu-projeto-next
```

> Aceite as opcoes de usar Tailwind CSS e App Router quando o terminal perguntar.
