# DESAFIO DA AULA 04
Os líderes do TI do DASI analisaram sua base e decidiram colocar você como responsável pelo backend da lojinha. Agora o caldo vai engrossar e atualizações serão feitas!

Agora o DASI pediu para você construir uma base de dados em SQL Server e construir as tabelas necessárias! Além disso, eles querem que a lojinha tenha separação entre os usuários padrão, administrativos e vendedores. E mais, agora vai aceitar imagens para exibir produtos! (É para trabalhar hehe)

## Requisitos
### Tecnologias
- Javascript;
- Node.js;
- SQL Server.

### Base de dados:
Vamos apresentar na pasta do código como deve ser feito as tabelas, mas, com o objetivo de treinamento, apenas informaremos o que o DASI precisa.

Para os usuários, queremos uma tabela que tenha um ID em UUID, um nome, email USP (necessariamente da USP), senha - que deve conter pelo menos um caracter especial, um número, uma letra minuscala e outra maiuscula e ter no mínimo 8 caracteres - e ter um ROLE, que fica entre ADMIN, VENDEDORES e PADRÃO.
Você terá que criar uma tabela produtos que vai receber um ID em formato UUID, nome, descrição, preço, quantidade e o id de quem cadastrou o produto.

OBS.: as imagens serão salvas em uma pasta, na base de dados vai se guardar o seu caminho. Um produto pode ter várias fotos e uma foto deve ser relacionada com um produto apenas.

O backend deve reconhecer de alguma forma se o usuário está logado no site, tanto por cookie quanto por session ou de outra forma que você conheça.

### Rotas:
#### Rotas "/produtos"
Todos devem funcionar apenas com o usuário autenticado.
- "/": Aqui será a *home* do projeto, que vai trazer todos os produtos armazenados no banco de dados. A função poderá receber um limite de quantos produtos pode exibir na página inicial. Além disso, neste primeiro momento, deve exibir o nome do produto, seu preço, a quantidade em estoque (produtos com quantidade 0, deve ser mandado a mensagem de fora de estoque) e a o caminho de uma imagem de exibição de produto;
- "/produto/:id": Quando o usuário clicar em um dos produtos, vai ter que trazer mais informações desse produto, que seriam sua descrição, as outras imagens;
- "/produto/cadastrar": Aqui faz o novo cadastro do produto, em que os campos devem não ser vazios, o nome deve ter mais de 3 letras e 255, a descrição no mínimo 50, o preço ser maior do que 0, a quantidade maior ou igual a 0. PERMITIDOS USAR ESSA ROTA: ADMIN e VENDEDOR;
- "/produto/atualizar": Aqui vai ser feito a atualização do produto, em que os campos são opcionais e, caso o usuário não altere nada, ele vai deixar do backup anterior. Serão usados as mesmas validações para cadastrar, tirando o campo vazio. PERMITIDOS USAR ESSA ROTA: ADMIN e VENDEDOR;
- "/produto/deletar": Aqui deleta o produto do banco de dados. PERMITIDOS USAR ESSA ROTA: ADMIN e VENDEDOR.
- "/usuario/cadastrar": O usuário vai poder colocar um nome de no mínimo 3 caracteres e no máximo 60, um email da USP e uma senha igual o padrão da base de dados. Por padrão, todo o usuário cadastrado é um PADRÃO. Todo o VENDEDOR e ADMIN deve ser criados por outros meios;
- "/usuario/entrar": O usuário vai poder logar usando email e a senha;
- "/usuario/altera-apelido": O usuário deve alterar APENAS seu apelido (caso tentar acessar de outro, o backend deve impedir);
- "/usuario/deletar": O usuário pode deletar APENAS sua conta.

### Avaliação
Vai ser avaliado:
- Código limpo;
- Documentação;
- Organização de pastas.
- Além, claro, do que é pedido pelo enunciado.

## EXTRA (opcional)
Utilize Orientação à Objeto para esse desafio e compare com o código procedural (sem Orientação à Objeto).