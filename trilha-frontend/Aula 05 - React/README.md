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