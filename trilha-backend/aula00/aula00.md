# Como funciona a internet
Você acessando o Google, Youtube e até mesmo o Instagram, já se questionou em como funciona eles?

Bem, a internet funciona como um gigantesca teia com várias intersecções e caminhos. Cada intersecção é um computador que faz a tarefa que foi mandando para fazer, e os caminhos conecta cada um desses computadores. Então, quando você acessa o Youtube para ver Ordem Paranormal vídeos de gatinhos, acaba por pedir para os computadores que formam o Youtube mandar esse vídeo de gatinhos.

Mas qual caminhos eles fazem? Bem, isso é o mais impressionante! Eles não só viajam no ar até os computadores de Youtube, eles passam por cabos quilométricos submarinos até chegar onde deve, que pode ser um só lugar ou pode ser vários!

Se levar informação para vários lugares fosse o única coisa que acontece, já estaria feito! Mas as coisas têm que ficar mais difícil…

Computadores não entendem a gente, ou melhor, nosso idioma, eles apenas entendem sequência de números (no nível de máquina física, o famoso hardware, o seu idioma é o binário). Na Internet, os computadores conversam entre si usando um endereço IP (Internet Protocol), que são sequências de números que indicam o endereço daquela máquina na rede (para melhor segurança, os IPs do Youtube, por exemplo, não são fixo e muda toda hora, mas para ter uma noção: 208.65.153.238 era um IP do Youtube).

Mas por que eu digito www.youtube.com e não um número difícil de lembrar? Então, meu pequeno gafanhoto (uff refereces), já pensaram nisso anos atrás e criaram o DNS (Domain Name System), que acaba por traduzir o seu texto para um IP e vice-versa!

Mas por que tenho que escrever www.youtube.com/core para acessar uma página?

Para que a Internet não virar um emaranhado de endereços aleatório (como “youtube do grau br entrar.core das antigas” e “X tentação//hellow world”), criou uma padronização desses endereços, que é a URL (Uniform Resource Locator), em que usando-a é possível acessar qualquer recurso (que pode ser qualquer coisa) na Internet. E sua estrutura é:

protocolo://host:porta/caminho?query#fragmento

Protocolo: como a comunicação deve ser feita;

Host: o nome do servidor onde o recurso está, em que se pode ter o domínio (ex.: google.com) e o subdomínio (ex.: api.google.com);

Portas: como o nome diz, é a “porta” para entrar no serviço do servidor, com cada protocolo tendo sua porta padrão;

Caminho: mostra um recurso específico no servidor, com o servidor podendo ter diversos caminhos para diversos recursos;

Parâmetros: para enviar dados para servidor, em que se tem diversos objetivos, como filtrar uma busca.

E o que é o “www” e “.com”? O “www” é um subdomínio que indica que é uma página web. Enquanto o “.com” é um TDL (Top-Level Domain) que, de maneira curta e grossa, é informações à mais para o domínio (não necessariamente isso). O “.com” é para indicar que o recurso é de uso comercial/empresa (hoje em dia é mais genérico), enquanto o “.edu” indica que é voltado para educação, “.org” para organizações etc.

Exemplo:

https://www.exemplo.com:8080/pasta/arquivo.html?usuario=gafanhoto&id=10#comentarios

*OBS.: “?” separa o caminho dos parâmetros; “&” separa os parâmetros entre si.

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
