# DESASIO DA AULA 03
O DASI decidiu que abrir sua loja para vender seus produtos para o mundo todo! Mas eles ainda não tem uma base de como começar. Você, sendo um membro que quer mostrar que é sapiente, decide que quer montar uma base do backend e mostrar para os lideres do setor de TI. Por ser algo que vai ser só rápido, você não vai se preocupar com segurança e nem criar um banco de dados robusto.

O desafio é criar um backend para o DASI que possa armazenar, consultar, deletar e atualizar os itens dessa lojinha. Depois de analisar as opções, decidiu investir no Node.js e usar como base de dados provisórios um arquivo JSON.

## Requisitos
### Tecnologias
- JSON (para a base de dados);
- JavaScript;
- Node.JS.

### Base de dados
produtos:
- id INTEIRO sequência NÃO NULO;
- nome STRING NÃO NULO;
- descrição STRING PODE SER NULO;
- preço FLOAT NÃO NULO;
- quantidade NÃO NULA.

### Rotas
O backend deve ter as rotas:
- "/": Aqui será a *home* do projeto, que vai trazer todos os produtos armazenados no banco de dados. A função poderá receber um limite de quantos produtos pode exibir na página inicial. Além disso, neste primeiro momento, deve exibir o nome do produto e seu preço (produtos com quantidade 0, deve ser mandado a mensagem de fora de estoque);
- "/produto/:id": Quando o usuário clicar em um dos produtos, vai ter que trazer mais informações desse produto, que seriam sua descrição e quantidade em estoque;
- "/produto/cadastrar": Aqui faz o novo cadastro do produto, em que serão permitidos os campos devem não ser vazios;
- "/produto/atualizar": Aqui vai ser feito a atualização do produto, em que os campos são opcionais e, caso o usuário não altere nada, ele vai deixar do backup anterior;
- "/produto/deletar": Aqui deleta o produto do banco de dados.

## Métodos avaliativos:
Aqui será testado suas habilidades de:
- Pesquisa;
- Documentação;
- Código limpo.

Além dos conhecimento aplicados durante as aulas.