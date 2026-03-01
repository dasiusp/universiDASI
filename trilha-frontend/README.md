# Trilha de Desenvolvimento Front-End

Bem-vindo ao repositório da nossa trilha de aprendizado Front-end no universiDASI! 

Este material foi desenhado para guiar você do absoluto zero até o uso dos frameworks mais modernos. Acreditamos que não adianta aprender as ferramentas complexas sem antes construir uma fundação sólida. Por isso, nossa jornada é progressiva e focada em entender o "porquê" por trás de cada linha de código.

## O Mapa da Trilha

Cada pasta neste repositório representa um degrau na sua evolução. Entre em cada uma delas para acessar os materiais teóricos, exemplos práticos e os desafios propostos.

* **[Aula 01 - HTML](./Aula01-HTML)**: O esqueleto da web. Aqui desmistificamos as tags, entendemos a importância do HTML Semântico para SEO e Acessibilidade, e criamos nossa primeira estrutura de página.
* **[Aula 02 - CSS](./Aula02-CSS)**: Foco em entender o Box Model, seletores, importação de fontes e manipulação de cores.
* **[Aula 03 - Flexbox e Grid](./Aula03-Flexbox)**: Aprenderemos a organizar elementos na tela, alinhar conteúdos de forma moderna e criar layouts responsivos que funcionam perfeitamente em celulares usando Media Queries.
* **[Aula 04 - Tailwind CSS](./Aula04-tailwind)**: Introdução ao conceito de "Utility-First CSS", aprenda a criar designs modernos e responsivos de forma rápida, direto do arquivo HTML, sem criar infinitas linhas de CSS.
* **[Aula 05 - React](./Aula05-React)**: Deixamos as páginas estáticas para trás e aprendemos a pensar em Componentes (peças de LEGO reutilizáveis) e Props, utilizando a ferramenta Vite para altíssima performance.
* **[Aula 06 - Next.js](./Aula06-NextJS)** *(Em breve)*: 

## Como utilizar este repositório?

1.  **Siga a ordem cronológica:** Se você é iniciante, não pule direto para o React ou Tailwind. Uma base sólida em HTML e CSS puro é o que vai te salvar quando os frameworks falharem.
2.  **Leia a teoria:** Cada pasta possui seu próprio arquivo detalhado com explicações passo a passo.
3.  **Faça os desafios:** Programação infelizmente não se aprende apenas lendo. Por conta disso, no final de cada aula teórica, deixamos um desafio prático para fixar o conhecimento e para que vocês possam se divertir e brincar um pouco com o que aprenderam :D

## Como utilizar os materiais e rodar os projetos

A forma de acompanhar as aulas e testar os códigos muda conforme você avança na trilha:

**Fase 1: O Básico (Aulas 01 a 03)**
Para aprender HTML, CSS e Flexbox/Grid, você não precisa clonar este repositório via terminal. 
Você pode simplesmente criar uma pasta no seu computador, abrir no VS Code e criar seus próprios arquivos `.html` e `.css` para acompanhar a teoria. 

**Fase 2: O Avançado (Aulas 04 em diante)**
A partir da introdução ao Tailwind e ao React, os projetos ficam mais complexos. Você precisará baixar o repositório via terminal para instalar as dependências usando o Node.js.

1. Clone o repositório completo, por exemplo, se você desejar clonar o repositório em uma pasta chamada Frontend que você criou/deixou no seu Desktop (Área de Trabalho), faça isso após abrir o seu terminal:
```bash
cd Desktop
git clone https://github.com/dasiusp/universiDASI
```

2. Navegue até a trilha e a aula desejada (exemplo com a Aula 05):
``` bash
cd Desktop
cd universiDASI
cd trilha-frontend
cd Aula05-React
```

3. Instale as dependências e rode o servidor (Vite):

``` bash
npm install
npm run dev
```

O terminal mostrará um link local (geralmente http://localhost:5173/). Segure a tecla Ctrl e clique no link para visualizar o projeto renderizado no seu navegador.

## Pré-requisitos

* Para as Aulas 01 a 03: Apenas um navegador (Google Chrome, Firefox, etc.) e um editor de código (recomendamos o **VS Code**).
* Para as Aulas 04 em diante: Você precisa ter o Node.js instalado (Recomendamos a versão v18 ou superior). Você pode checar sua versão digitando node -v no terminal.

- O arquivo package.json em cada pasta é vital, pois ele diz ao comando npm install exatamente o que baixar para o projeto funcionar.

- Usuários Linux/WSL: Lembrem-se que o sistema diferencia maiúsculas de minúsculas no nome dos arquivos (ex: PricingCard.jsx não é o mesmo que pricingcard.jsx).
