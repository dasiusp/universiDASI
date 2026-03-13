# [AULA 00 - Conhecendo a Internet](./aula00/)
Já pensou como funciona a Internet? Bem, o site que você acessa não viaja no pelo ar, ele chega via cabos marítima de outros países!

A Internet na realidade é a conexão de diversos computadores que trocam informações entre si, tendo suas regras que devem ser seguidas para o funcionamento harmonicos entre os sitemas.

E esses sitemas devem ser comandado por uma lingua diferente da nossa: o binário. Mas ficar escrevendo 0 e 1 é muito trabalhoso, então criamos outras formas que comunicar com a máquina: as linguagens de programação!

Além disso, a Internet em geral, usa o protocolo TCP/IP para os computadores se comunicarem na rede em geral.

Os protocolos seguidos por páginas webs são os HTTP e HTTPS, em que o último tem segurança. Nisso, segue a estrutura de uma URL:
`protocolo://subdomínio.host:porta.tipo-do-recurso/caminho?query#fragmento/:parametro`
- Protocolo: tipo o http/https;
- Subdomínio: `api` e `www`;
- Host: "onde" está hospedado, como o `google`;
- Porta: em qual porta está o serviço;
- Tipo do Recurso: como "com" de compania, "edu" de educacional etc.;
- Caminho: seria por onde o usuário caminharia para encontrar um recurso específico;
- Query e Parâmetro: ambos são para pegar certos atributos da página, em que o primeiro é separado por "?" e o valor seria o "fragmento" e o segundo "/:";
- Recurso: seria qualquer serviço que seu site oferece.

## Servidor e Cliente
Algo bem importante de entender é o que é o servidor e o que é o cliente.

De forma muito resumida, o cliente é aquele que vai fazer uma requisição para seu site, ou seja, pedindo algo, como o que tem no seu carrinho, procurar um filme etc.

Enquanto o servidor tem que, de alguma maneira, responder esse cliente com o que ele pediu ou informando se deu algum erro.

## Protocolo HTTP/HTTPS
O HTTP, HyperText Transfer Protocol, é uma sequência de regra que deve ser seguida para os computadores se comunicar pela Web. Ele é feito para ter requisições e respostas, em que ele não guarda esses procedimentos. Nisso, temos os tipos de requisição:

POST: para mandar dados;

GET: requisição de dados;

PATCH: atualização de dados, só se o dado existir;

PUT: atualização dos dados, mas se não existir, cria esse novo dado;

DELETE: deletar certos dados.

Terminado com esse tópico, o HTTPS (HyperText Transfer Protocol Secure) é o HTTP com uma camada de segurança, criptografando os dados usando SSL/TLS.

Mais para frente, todos esses nomes farão sentido, mas por hora fiquem com eles guardados na cachola.

# [AULA 01 - Conhecendo o Javascript e Node.js](./aula01/)
Vamos usar o Javascript, uma linguagem para o front, mas que acabaram por desenvolver o Node.js, que permite usar usá-lo no backend.
## Node.js
O Node.js é um ambiente de execução do Javascript no lado do servidor (neste caso, seu computador), sem precisar de um navegador. Ou seja, é possível testar seus comandos sem uma página web e, além disso, poder criar um servidor que grava e devolve informações de um banco de dados.

### Instalação e configuração do Node.js
Todas as instruções está no site do Node.js (https://nodejs.org/).
#### Windows
##### Binário
É bem simples, baixando o .msi, é praticamente apertando apenas o next (próximo) para instalar.
- **Entrar no página do NodeJS e clicando no Baixar Node.js**
![Site do Node JS (https://nodejs.org)](./img-tutorial/w10/img1.png "Site do NODE")
- **Tela de instalação, clicar no botão de Instalador Windows(.msl)**
![Página de Download do Node JS (https://nodejs.org/pt-br/download/)](./img-tutorial/w10/img2.png "Página de download")
- **Tela de Bem-Vindo**(praticamente, daqui em diante é clicar em next)
![Tela de Bem-vindos](./img-tutorial/w10/img3.png "Tela de Bem-vindos")
- **Tela dos termos, só clicar em aceitar os termos**
![Tela dos termos](./img-tutorial/w10/img4.png "Tela dos termos")
- **Tela para escolher onde vai ser instalado o Node.js**
![Tela de escolher o caminho de instalação](./img-tutorial/w10/img5.png "Tela de escolher o caminho de instalação")
- **Tela de instalação de outras ferramentas, apenas clicar em next para o básico**
![Tela de ferramentas para instalar](./img-tutorial/w10/img6.png "Tela de ferramentas para instalar")
- **Tela do instalação do Chocolatey, não vai ser necessário**
![Tela de instalação do Chocolatey](./img-tutorial/w10/img7.png "Tela de instalação do Chocolatey")
- **Tela dos instalação, clicar em instalação**
![Tela inicio de instalação](./img-tutorial/w10/img8.png "Tela inicio de instalação")
- **Clicar em sim**
![Tela de instalação](./img-tutorial/w10/img9.png "Tela de instalação")
- **Finalização**
![Finalização](./img-tutorial/w10/img10.png "Finalização")

#### Linux
Tem duas maneiras de instalar no linux: por terminal e por arquivo binário.
##### Pelo terminal
Acessando o terminal, execute os comandos:

- **Baixar e instalar o nvm (Node Version Manager):**
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash 
    ```

- **Em vez de reiniciar o terminal, carrega o script do nvm no shell atual:**
    ```bash
    \. "$HOME/.nvm/nvm.sh"
    ```

- **Baixar e instalar a versão 24 do Node.js:**
    ```bash
    nvm install 24
    ```

- **Verificar a versão instalada do Node.js:**
    ```bash
    node -v # Deverá imprimir "v24.13.0".
    ```

- **Verificar a versão instalada do npm (gerenciador de pacotes):**
    ```bash
    npm -v # Deverá imprimir "11.6.2".
    ```

##### Pelo binário
- **Baixe o binário**
- **Extrair os arquivos**
    ```bash
    tar -xf node-vX.Y.Z-linux-x64.tar.xz
    ```
    > Substitua vX.Y.Z e linux-x64 pela versão/arquitetura que você baixou. (a versão deste momento é a node-v24.13.1-linux-x64.tar.xz)
- **(OPCIONAL) Mover para a pasta de instalação global**
    ```bash
    sudo mv node-vX.Y.Z-linux-x64 /usr/local/nodejs
    ```
    > /usr/local/nodejs é a pasta de instalação global

- **Atualizar o PATH**
    ```bash
    # exemplo para Bash ou Zsh
    echo 'export PATH=/usr/local/nodejs/bin:$PATH' >> ~/.bashrc
    # então recarregue o profile
    source ~/.bashrc
    ```

- **Verificar se está instalado**
    ```bash
    node -v
    npm -v
    ```

## Visual Studio Code
O VS Code é um ambiente de desenvolvimento de código em geral. Entrando no site, é possível baixar tanto para Linux quanto para Windows.
No Visual Code, é possível baixar o Node.exec para poder executar o arquivo atual do javascript usando o F8.

## Insominia
O Insomnia é uma ferramenta muito útil para testar as rotas que você escreveu! Vamos para instalação dele:
### Linux
Para o nosso maravilhoso Linux, há diversos métodos de baixar o Insomnia, iremos mostrar três deles:
#### Snap
O Snap é uma forma de empacotar apps que funciona em muitas distribuições (Ubuntu, Debian, Fedora, Manjaro, Arch etc.).
1. Instale o Snap caso ainda não tenha:
    ``` bash
    sudo apt update
    sudo apt install snapd
    # Use o instalador de seu Linux, aqui funciona em diversas
    # distros baseados em Derbian
    ```
2. Instale o Insomnia
    ```bash
    sudo snap install insomnia
    ```
    - Agora é possível acessar o Insomnia no Menu ou no terminal digitando `insomnia`

#### Flatpak
Flatpak é outra forma universal de empacotar apps no Linux, funciona bem em Ubuntu, Fedora, openSUSE, Debian, Arch, etc.
1. Instale o flatpak caso ainda não tenha instalado:
    ```bash
    sudo apt update
    sudo apt install flatpak
    # Atente ao instalador da sua distro
    ```
2. Adicione o repositório do Flathub:
    ```bash
    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
    ```
3. Insale o Insomnia;
    ```bash
    flatpak install flathub rest.insomnia.Insomnia
    ```
    - Agora pode acessar o Insomnia no Menu ou pelo terminal através do comando: `flatpak run rest.insomnia.Insomnia`

#### AppImage
Um arquivo que tem a imagem do aplicativo. 
1. Baixar o .AppImage, caso tenha opção:
2. Tornar ele executável. Vai até onde o arquivo foi baixado e rode o seguinte comando:
    ```bash
    chmod +x Insomnia*.AppImage
    ```
    - Agora já é possível usar o aplicativo usando o comando no terminal na pasta do .AppImage: `./Insomnia*.AppImage`.
3. Mover para uma pasta fixa. Pode ser qualquer pasta, mas aqui vai um exemplo:
    ```bash
    mkdir -p ~/.local/bin
    mv ~/Downloads/Insomnia*.AppImage ~/.local/bin/
    ```
    - No `~/.local/bin`, que está no `PATH` do Linux, é possível executar o aplicativo, pode-se chamar no terminal: `Insomnia*.AppImage`
4. Renomear o arquivo para encurtar o comando:
    ```bash
    mv ~/.local/bin/Insomnia*.AppImage ~/.local/bin/insomnia
    ```
    - Agora é possível executar o `insomnia` para abrir o aplicativo.
5. Criar um atalho no Menu
    - Abrir o editor de texto usando:
    ```bash
    nano ~/.local/share/applications/insomnia.desktop
    ```
    - Cole o conteúdo, trocando o `SEU_USUARIO` pelo seu usuário do linux:
    ```ini
    [Desktop Entry]
    # Nome do aplicativo no menu
    Name=Insomnia
    # O comando que vai ser executado quando clicado
    Exec=/home/SEU_USUARIO/.local/bin/insomnia
    # O seu Icone
    Icon=/home/SEU_USUARIO/.local/bin/insomnia
    # Define o tipo da entrada.
    Type=Application
    # Qual é a categoria do aplicativo
    Categories=Development;
    ```
    - Salve o arquivo e feche;
    - Atualize o menu:
    ```bash
    update-desktop-database ~/.local/share/applications
    ```

### Windows
No Windows, é só baixar e executar o arquivo e pronto 😃.

Agoras vamos entender o básico de como funciona o aplicativo.

### Usando o Insomnia
1. Tela inicial, temos onde está os projetos:
![Tela Inicial](./img-tutorial/insomnia/img1.png)
2. Tela de criação do projeto:
![Tela de Criação](./img-tutorial/insomnia/img2.png)
3. Criar uma requisição para o projeto:
![Tela Inicial](./img-tutorial/insomnia/img3.png)
4. Parâmetro, Body e Query
![Tela de parâmetro](./img-tutorial/insomnia/img4.png)
5. Apresentação das requisições
![Tela de requisições](./img-tutorial/insomnia/img5.png)

Durante o curso, vamos usar bastante para não ter que criar um frontend para testar a nossa aplicação.

# [AULA 02 - Básico de Javascript](./aula02/)
## Declaração de variável
```js
var variavel1 = "Valor1";
let variavel2 = "Valor2";
const constante = "Constante";
```

O `var` é o mais básico. Ele é acaba valendo tanto no seu escopo quanto fora dele, além disso, ele não precisa ser declado antes de ser "usado".
```js
console.log(texto); // undefined
var texto = "texto";
{
    console.log(texto);
}
```

O `let` é o mais usado, não pode ser usado fora de seu escopo, antes de ser declarada ou ser declarada mais de uma vez.
```js
let texto = "texto";
{
    let texto = "Um";
    console.log(texto); // Um
}
console.log(texto); // texto
```

O `const` é quando o valor dever ser constante, deve ser declado e inicializado antes de usar, não funciona fora de seu escopo.
```js
const teste = 10;
{
    const teste = 20;
    console.log(teste); // 20
}
console.log(teste); // 10
```

## Tipos
- Inteiro: os número do conjunto dos inteiro, e pode tentar converter para inteiro usando `let numero = Number.parseInt(variavel/valor);`;
- Float: os número do conjunto dos reais, e pode tentar converter para inteiro usando `let numero = Number.parseFloat(variavel/valor);`;
- String: seria todo o texto, e pode passar qualquer valor para texto usando `let texto = String(valor);`;
- Boolean: seriam o verdadeiro e falso.

### Operadores aritméticos
Tá, temos agora os números, mas podemos fazer contas com eles? A resposta é sim, com os operadores aritméticos comuns, como adição(+), subtração(-), multiplicação(*) e divisão(/), além da potência (**). Mas aqui têm o operador especial: o `módulo (%)`. O que esse operador faz? Ele retorna o resto de uma divisão de inteiros!
Exemplo: 12 % 5 = 2.

### Operadores de atribuição
Esses operadores seriam aqueles que atribuiem valores. Quais são eles? Mostraremos os principais!

<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Operador encurado</th>
            <th>Siginificado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Atribuição</td>
            <td>x = y</td>
            <td>x recebe y (x = y)</td>
        </tr>
        <tr>
            <td>Atribuição de adição</td>
            <td>x += y</td>
            <td>x recebe x mais y (x = x + y)</td>
        </tr>
        <tr>
            <td>Atribuição de subtração</td>
            <td>x -= y</td>
            <td>x recebe x menos y (x = x - y)</td>
        </tr>
        <tr>
            <td>Atribuição de multiplicação</td>
            <td>x *= y</td>
            <td>x recebe x vezes y (x = x * y)</td>
        </tr>
        <tr>
            <td>Atribuição de divisão</td>
            <td>x /= y</td>
            <td>x recebe x divido por y (x = x / y)</td>
        </tr>
        <tr>
            <td>Atribuição de resto</td>
            <td>x %= y</td>
            <td>x recebe o resto da divisão de x por y (x = x % y)</td>
        </tr>
        <tr>
            <td>Atribuição de exponecial</td>
            <td>x **= y</td>
            <td>x recebe x elevado por y (x = x ** y)</td>
        </tr>
        <tr>
            <td>Incremento</td>
            <td>x++</td>
            <td>Ao x adicione 1 (x = x + 1)</td>
        </tr>
        <tr>
            <td>Decremento</td>
            <td>x--</td>
            <td>Ao x subtrai 1 (x = x - 1)</td>
        </tr>
    </tbody>
</table>

## Controle de Fluxo - IF
No Javascript é possível usar o `if{}else{}` para controlar um fluxo de código.
```js
if(condicao1){
    // ...
} else {
    // ...
} 

// ou if aninhado
if(condicao2){
    // ...
} else if(condicao3){
    // ...
} else {
    // ...
}
```

Também há operadores de comparação e operadores de lógicos.

### Operadores de comparação
<table>
    <caption>
        <strong>Operadores Comparativos</strong>
    </caption>
    <thead>
        <tr>
            <th>Operador</th>
            <th>Descrição</th>
            <th>Exemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Igual (==)</td>
            <td>Verificar se os valroes são iguais, mesmo de tipos diferentes</td>
            <td>
                "Kaue" === "Kaue" // true <br>
                19 === "19" // true <br>
                3.0 === 3 // true <br>
                19 === 18 // false
            </td>
        </tr>
        <tr>
            <td>Estritamente igual (===)</td>
            <td>Verifica se os valores são idênticos, tanto em valor quanto tipo</td>
            <td>
                "Kaue" === "Kaue" // true <br>
                19 === "19" // false <br>
                3.0 === 3 // false <br>
                19 === 18 // false <br>
                3.14 === 3.14 // true
            </td>
        </tr>
        <tr>
            <td>Diferente (!=)</td>
            <td>Verifica se os valores são diferentes, não importanto o tipo</td>
            <td>
                "Texto" != "texto" // true <br>
                "20" != 20 // false
            </td>
        </tr>
        <tr>
            <td>Extritamente diferente (!==)</td>
            <td>Verifica se os valores e tipos são diferentes</td>
            <td>
                "Texto" !== "texto" // true <br>
                "20" !== 20 // true <br>
                20 !== 20 // false <br>
            </td>
        </tr>
        <tr>
            <td>Maior que (>)</td>
            <td>Verifica se é maior que tal valor</td>
            <td>
                10 > 5 // true <br>
                10 > 10 // false <br>
                10 > 15 // false <br>
            </td>
        </tr>
        <tr>
            <td>Menor que (<)</td>
            <td>Verifica se é menor que tal valor</td>
            <td>
                3 < 4 // true <br>
                4.5 < 4 // false <br>
                17 < 17 // false 
            </td>
        </tr>
        <tr>
            <td>Maior ou igual que (>=)</td>
            <td>Aqui verifica se é maior ou igual</td>
            <td>
                10 >= 5 // true <br>
                10 >= 10.0 // true <br>
                10 >= 15 // false
            </td>
        </tr>
        <tr>
            <td>Menor ou igual que (<=)</td>
            <td>É verificado se é menor ou igual</td>
            <td>
                3 <= 4 // true <br>
                4.5 <= 4 // false <br>
                17 <= 17 // true
            </td>
        </tr>
    </tbody>
</table>


### Operadores lógicos
<table>
    <caption>
        <strong>Operadores lógicos</strong>
    </caption>
    <thead>
        <tr>
            <th>Operador</th>
            <th>Utilização</th>
            <th>Descrição</th>
            <th>Exemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AND (&&)</td>
            <td>expressao1 && expressao2</td>
            <td>O operador AND quer as duas experssões sejam verdadeiras (Truthy). Caso uma seja falsa (Falsy), o que é retornado é um false, se não, retorna true.</td>
            <td>
                16 > 10 && 16 > 14 // true <br>
                16 > 10 && 16 < 14 // false <br>
                16 < 10 && 16 < 14 // false
            </td>
        </tr>
        <tr>
            <td>OR (||)</td>
            <td>expressao1 || expressao2</td>
            <td>O operador OR quer que pelo menos uma das opções seja verdadeira. As duas podem ser verdadeiras e uma pode ser falso e outra verdadeira para que as resulte num true, mas se as duas forem falsas, retorna um false</td>
            <td>
                16 > 10 && 16 > 14 // true <br>
                16 > 10 && 16 < 14 // true <br>
                16 < 10 && 16 < 14 // false
            </td>
        </tr>
        <tr>
            <td>NOT (!)</td>
            <td>!expressao</td>
            <td>O NOT inverte os seu valor lógico, ou seja, o que era true vira falso e o que era falso vira verdadeiro.</td>
            <td>
            !null // true <br>
            !10 // false <br>
            !(56 > 10) // false
            </td>
        </tr>
    </tbody>
</table>

### Operador ternário
Fazer um `if` em uma única linha: `let ternario = condicao?verdadeiro:falso;`

### Como montar uma condição?
Há diversas formas para montar uma condição, aqui vai alguns exemplos para ter uma noção, mas antes vamos mostrar a ordem de prioridade das operações.
#### Operadores aritméticos
1. Parênteses ()
2. Potência (**)
3. Divisão (/) e multiplicação (*)
4. Adição (+) e Subtração (-)

#### Operadores lógicos
1. NOT (!)
2. AND (&&)
3. OR (||)

#### Qual vem primeiro entre os três tipos de operadores?
1. Operadores aritméticos
2. Operadores comparativos
3. Operadores lógicos

## Controle de Fluxo - For, While e Do...While
Laços de repetição, que enquanto não cumprir a condição, o laço continua. Quando não cumprir mais, ele sai do laçõ.
### For
Mais usados, sua declaração é:
```js
/*
for(inicializador; i < 10; i++){
    // ...
}
*/
for(let i = 0; i < 10; i++){
    // ...
}
```

### While
```js
while(condicao){}
```

### Do...While
Ele executa pelo menos uma fez antes de verificar a condição.
```js
do{

}while(condicao); 
```

## Funções
Quando há códigos que se repete ou até para melhor organização, se usa funções.

```js
function funcao(parametros){
    // ...
} // as funções podem não ter parâmetros

// Arrow Function, que é construida com uma função anônima.
const arrowFunction = (parametros) => {
    // ...
}

// arrowFunction => assinatura da função
```

## Array
Aqui seria a lista do Javascript. Um array, assim como a String, também é considerado um Objeto.
```js
const array = ["Elemento", 20, 19.9, true];

array.push("Elemento 1", "Elemento 2"); // adiciona elementos no final
array.pop(); // deleta o último elemento

array.unshift(10, 40); // adiciona elementos no começo
array.shift(); // remove o primeiro elemento

const outroArray = array.map(item => item > 10); // cria um array baseado na função dentro 
const index1 = array.find(item => item > 10); // encontra o primeiro elemento que cumpre a função dentro
const index2 = array.findIndex(item => item > 10); // encontra  o index do primeiro elemento que cumpre a função
const index3 = array.indexOf(procura); // encontra o index do elemento que procura

array.forEach((item)=>{console.log(item)}); // executa uma função para cada elemento do array
const string = array.join(","); // junta elementos de um array e devolve uma String
const arrayFilter = array.filter(item => item < 10); // retorna um array baseado na condição 
const arraySlice = array.slice(2,10); // faz um corte do array

const stringArray = array.toString(); // passa o array para uma string
const arraySplice = array.splice(2, 0, "Elemento extra"); // adiciona outros elementos em uma lista em uma posição: o primeiro é a posição, o segundo é quantos elementos quer mudar, e o terceiro, quarto etc. é o novo elemento.

array.length;//mostra o tamanho do vetor
```

## String
É considerado um objeto. Todos os métodos de array funcionam na string, além de ter outros métodos.
```js
const string = "Texto";
const stringTrim = string.trim(); // remove os espaço vazios no fim e no começo do array
const stringUpper = string.toUpperCase(); // transforma o texto em caixa alta
const stringLower = string.toLowerCase(); // transforma o texto em caixa baixa
const stringConcat = string.concat(" Outro texto"); // concatena um texto com outro
const stringSplit = string.split(" "); // criam um array a partir da string, em que os elementos são separados pelo texto lá dentro
const stringReplace = string.replace("Texto", "Outro texto"); // substitui o texto por outro texto.
string.charAt("a"); // procura um caracter específico e devolve sua string
```
## For...in e For...of
### For...in
Para acessar cada elemento de um array
```js
const array = [1, 2, 3, 4];
for(const item in array){
    console.log(item);
}
```
### For...of
Para acessar as propriedades (de um vetor e String, é os indíces, para objetos, os nomes das propriedades).
```js
const pessoa = {
    nome: "Fernando",
    idade: 32
};
for(const item in pessoa){
    console.log(item);
}
```

## Objetos
Um objeto relaciona um valor com um nome:
```js
const objeto = {
    nome1: "valor1",
    nome2: "valor2"
}
```

# [AULA 03 - Básico de Node.Js](./aula03/)
## Inicialização de um projeto
Na pasta do projeto, iremos no terminal o `npm init -y`, e assim vai criar o arquivo `package.js`com as configurações básica para o funcionamento do backend:
```json
{
  // no do projeto, que por padrão usa a pasta que foi criado
  // (deve ser minúsculo, sem espaços e separados por hífens)
  "name": "aula03-projeto",

  // Versão do projeto 
  "version": "1.0.0",

  // Uma descrição
  "description": "",

  // arquivo principal, ponto de entrada da aplicação
  "main": "index.js",

  // são scprits que são rodados junto com o terminal
  // ao rodar `npm run test` roda o script abaixo em test
  // é possível criar seus scripts e rodar com o npm. 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // usado para pesquisar o sobre uma biblioteca no mundo do
  // npm, aqui vai um exemplo:
  // "keywords": ["api", "exepress"]
  // usando o `npm search exepress`, ele vai encontrar tudo
  // relacionado com "express", principalmente seu código
  // retornando diversas informações.
  // Ao usar o `npm publish`, você publica seu código para os
  // outros usuários de npm possam usar
  "keywords": [],

  // Autor do projeto
  "author": "",

  // A licença do projeto, em que o ISC é uma licença open-source simples, há outras
  "license": "ISC",

  // O campo mais importante, pois ele define o sistema de módulos do Node.js
  // Mais para frente será usado para usar outras bibliotecas
  // além da padrão
  // "type": "commonjs" => usa o require para a importação
  // "type": "module" => usa o import
  "type": "module"
}
```

## Require e Import
### Require
Usado para importar e exportar módulos que participam da CommonJS (CJS), usados normalmente para aplicações usando Node.JS.
```js

const expresss = require("express");
const cookieParser = require("cookieParser");

module.exports = {funcao1, variavel1, ...};
```

### Import
Maneira de importar e exportar as bibliotecas e códigos baseado no novo modelo do ECMAScript 6 (ES6).
```js
import express from "express";
import cookieParse from "cookieParser";

export default { funcao1, variavel1, ... };
```

## CRUD
CRUD são as quatros operações básicas de um backend, são elas: Create, a criaçao e inserção de dados na base de dados; Read, leitura dos dados da bsae; Update, atualizar esses dados; e Delete, que é apagar os dados existente.

Aqui o CRUD é divido em: GET (Read), POST (Create), PATCH/PUT (Update), DELETE (Delete); e são representado em requisições e respostas.

### Rotas e parâmetros
A estrutura bábásicasica de uma função que recebe a requisição é através do `express`, um móduto que cria as rotas e endpoints para acessar os recursos.

```js
import express from "express";
const app = express();

app.use(express.json()); // para poder mandar resposta .json

// app.tipo_da_requisicao("/rota", funcao_que_o_recurso_chama(req, res));
// exemplo
app.get("/pegar-informcao", async function getAll(req, res){
    // req => a requisição
    // req.body => o corpo da requisição, aqui pode chegar dados importantes
    // req.query => uma forma de pegar os parâmetros da URL
    // req.params => outra forma de pegar os parâmetros passado na URL
    const queries = req.query;
     
     // res => a resposta do servidor. É necessário retornar ele, pois se não o servidor entra em um loop infinito esperando a resposta.
     // res.status() => manda o status do sistema
     // res.send() => envia uma resposta com formato em geral
     // res.json() => envia uma resposta em JSON
    return res.status(200).json(queries);
});
```
### GET
Indica leitura dos dados do database.
```js
import express from "express";

const array = [1,2,3,4,5];

const app = express();

app.use(express.json()); // para poder mandar resposta .json

// get sem parâmetros
app.get("/pegar-informcao", async function getAll(req, res){
    return res.status(200).json({array});
});

// get com query (url exemplo: https://site.com?id=1)
app.get("/pegar-informcao", async function getAll(req, res){
    const query = req.query.id;
    return res.status(200).json({conteudo: array[query]});
});


// get com query (url exemplo: https://site.com/1)
app.get("/pegar-informcao/:id", async function getAll(req, res){
    const params = req.params.id;
    return res.status(200).json({conteudo: array[params]});
});

// Os parametros podem ser acessada em qualquer outro método
// app.post("/rota/:id", ...);
```

### POST
Inserção de novas informações.
```js
import express from "express";

const array = [1,2,3,4,5];

const app = express();

app.use(express.json()); // para poder mandar resposta .json

app.post("/inserir-informacao", async function postar(req, res){
    const body = req.body.dado;

    array.push(body);

    return res.status(200).json({dado: "Inserido com sucesso!"});
});
```

### PATCH e PUT
Atualizar uma informação. O Patch só atualiza se já existe, enquanto o PUT atualiza, entretanto se não ter o elemento, ele cria um novo.
```js
import express from "express";

const array = [1,2,3,4,5];

const app = express();

app.use(express.json()); // para poder mandar resposta .json

app.patch("/atualizar-informacao/:id", async function postar(req, res){
    const body = req.body.dado;
    const id = req.params.id;

    array[id] = body;

    return res.status(200).json({message: "Atualização feita com sucesso!"})
});
```

Sabendo como funciona o PUT, faça você mesmo a requisição e depois mande para a revisão (algum membro do setor de TI).

### DELETE
Aqui vai apagar um ou vários elementosda base de dados.
```js
import express from "express";

const array = [1,2,3,4,5];

const app = express();

app.use(express.json()); // para poder mandar resposta .json

app.delete("/deletar-informacao/:id", async function postar(req, res){
    const id = req.params.id;

    for(let i = id; i < array.length - 1; i++)
        array[i] = array[i+1];

    array.pop();

    return res.status(200).json({message: "Deleção feita com sucesso!"})
});
```

# [AULA 04 - Roteadores, Controladores, Modelos e Intermediários](./aula04/)
Aqui vamos entrar na parte de modularização de arquivos e seprar as funções de cada um. Em um projeto backend, sempre vai ter quatro tipos principais de "funções":
- **Models (Modelos)**: códgos responsáveis por modificar a base de dados;
```js
export function atualizarAluno(dados){ 
    // código
}

 // o export é importante para ser usado no controller
```
- **Middlewares (Intermediários)**: o intermédio entre o controller e a requisição, ele verifica se tudo está seguindo o que se deve, como por exemplo não permitir um usuário normal deletar outras contas sem ser a dele ou modificar diretamente a base de dados
```js
function validarAdmin(req, res, next){
    // código (aqui pode já ter o retorno de uma resposta caso de algum erro)
    next(); // o next é importante para poder passar para a próxima etapa quando tudo tiver ok
}
```
- **Controllers (Controladores)**: são os responsáveis por verificar as informações antes de mandarem para o model;
```js
import atualizarAluno from "../model/alunos.model.js"; // importa a função do model, e deve ter um nome diferente das outras funções do controller para evitar conflito
function atualizarCadastro(req, res){
    // código

    atualizarAluno(dado);

    // verificar se a operação foi um sucesso

    return res.status(200).json(resposta); // se a operação foi um sucesso

    // Toda a requisição deve ter uma resposta, de sucesso ou erro
}
```
- **Routers (Roteadores)**: responsáveis por mostraros caminhos para os recursos, em que eles recebem as funções de middleware e controllers.
```js
import atualizarCadastro from "../controllers/alunos.controlles.js";
import validarAdmin from "../middleware/alunos.middleware.js";
import { Router } from "express";

const router = Router();

router.patch("/atualizar-aluno/:id", validarAdmin, atualizarCadastro);

export default AlunoRouter;
```

No app.js, é possível importar as rotas para o código e usá-las:
```js
// app.js
import express from "express";
import AlunoRouter from "./router/alunos.router.js";

const app = express();

app.use(express.json());

app.use(AluneRouter);

app.listen(8080, () => { console.log("Servidor rodando na porta 8080"); });
```

No final, a hierarquia de pasta fica:
.
├── controllers
│   └── aluno.controller.js
├── middleware
│   └── aluno.middleware.js
├── models
│   └── aluno.model.js
├── routers
│   └── aluno.router.js
├── app.js
├── package.json
└── package-lock.json

# FINALIZAÇÃO
Aqui seria o resumo de tudo que já foi passado no curso, mas logicamente sem aprofundamento e menos exemplos. Se quiser, pode-se acessar as aulas mais completas.
