# Aula 5 - Introdução ao React: 
Até agora, construímos interfaces usando HTML estático e estilizamos com Tailwind CSS. Mas o que acontece quando precisamos repetir o mesmo Card 10 vezes na tela? Copiar e colar código não é uma boa ideia. 

Hoje, vamos entrar no mundo do **React** e aprender a pensar como engenheiros de software: dividindo problemas grandes em peças pequenas e reutilizáveis.

---

## 1. O que é o React?
O React é uma biblioteca JavaScript criada para construir interfaces de usuário. Em vez de criar páginas inteiras, no React nós criamos **Componentes**.

### Pensando em Componentes
Imagine o site da faculdade. Ele tem um cabeçalho, um menu lateral e uma área de notícias. No React, cada uma dessas partes é um arquivo separado (um componente). É como montar um projeto de blocos de LEGO.



---

## 2. O que é JSX? (HTML dentro do JavaScript)
No React, não separamos o HTML do JavaScript. Nós usamos o **JSX**, uma sintaxe que permite escrever "HTML" direto nas funções JS. 

Mas existem **3 Regras de Ouro** para o JSX funcionar:
1. **`class` vira `className`:** Como `class` já existe no JavaScript, usamos `className` para o Tailwind.
2. **Tags precisam ser fechadas:** No HTML normal, `<input>` funciona. No JSX, tem que ser `<input />` ou `<img />`.
3. **JavaScript entre Chaves `{}`:** Sempre que quiser usar uma variável, fazer uma conta ou usar lógica dentro do seu visual, coloque entre chaves.

---

## 3. Props: Passando dados entre componentes
**Props** (abreviação de propriedades) são como os argumentos de uma função matemática. 

Se você cria um componente `<Botao />`, você quer que ele seja reutilizável, certo? Em um lugar ele vai dizer "Entrar", no outro "Sair". Fazemos isso passando Props:

```jsx
// O Componente (A Função)
function Botao(props) {
  return <button className="bg-blue-500">{props.texto}</button>
}

// Como usamos ele na tela
<Botao texto="Entrar" />
<Botao texto="Sair" />
```

## 4. 📚 Aprofunde-se:
A documentação oficial é o melhor amigo de um desenvolvedor de software. Consulte sempre que precisar de exemplos detalhados: Aprenda React (Documentação Oficial - react.dev)

## 🚀 Desafio Prático: Tabela de Preços Dinâmica:
O sistema em que você trabalha precisa lançar uma página de assinaturas com três planos: "Iniciante", "Profissional" e "Enterprise". Copiar e colar código repetido é uma má prática de programação e dificulta a manutenção. Seu objetivo é aplicar os conceitos de componentização para criar uma interface limpa e escalável utilizando React e Tailwind CSS.

Objetivo:
Criar um componente reutilizável PricingCard e renderizá-lo três vezes na tela principal, passando dados diferentes para cada plano.

## Requisitos do Sistema:
Criação do Componente Base: Crie a estrutura de um card de preço utilizando classes utilitárias do Tailwind (fundo branco, bordas arredondadas, sombra e interatividade no hover).

Definição de Props: O componente deve esperar receber três propriedades:

titulo (Ex: "Plano Profissional")

preco (Ex: "49")

destaque (Valor booleano: true ou false).

Lógica Visual (Renderização Condicional): Utilize as chaves {} do JSX para criar uma lógica condicional nas classes do Tailwind.

Se a prop destaque for true, o card deve ganhar um fundo azul (bg-blue-600) e texto branco.

Se for false, o card mantém o design padrão claro.

Composição da Tela: No arquivo principal da aplicação (App.jsx), importe o PricingCard e chame-o três vezes lado a lado, passando as Props correspondentes para formar a tabela completa.

## 💻 Como Rodar o Gabarito deste Desafio
Se você quiser ver o código do desafio funcionando na sua máquina ou testar a base do repositório, siga os passos abaixo. Este projeto utiliza o Vite, a ferramenta padrão da indústria para iniciar projetos React com alta performance.

Passo a passo no Terminal:

Clone o repositório para o seu computador:

```git clone [https://github.com/WalmirFerJr/universiDASI.git](https://github.com/WalmirFerJr/universiDASI.git)```

Instale as dependências (baixa o React, Tailwind e Vite):

```npm install```

```npm run dev```
Acesse no navegador: O terminal mostrará um link local (geralmente http://localhost:5173/). Segure a tecla Ctrl e clique no link para visualizar o projeto renderizado!