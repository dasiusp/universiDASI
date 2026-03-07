const produtos = []; // inicialização da base de dado

let idx = 0; // Aqui que vai ficar o controle do id

async function cadastrar({ nome, descricao, preco }){
    /*
    Função para criar um produto, ela apenas vai pegar os dados e colocar na última posição do banco de dados.
    */

    produtos.push({id: String(idx++), nome, descricao, preco});

    const response = { message: "Criado com sucesso!" }
    
    return response;
}

async function todosProdutos() {
    /*
    A função vai enviar todos os dados dos produtos
    */

    return produtos;
}

async function produtoId(id) {
    /*
    Através de um id, trás um produto
    */

    const produto = produtos.find((prod) => prod.id === id);

    if(!produto) return {error: 404 };

    return produto;

}

async function deletarProduto(id) {
    /*
    Através de um id, vai deletar um dos produtos
    */
   
    const indexProduto = produtos.findIndex( produto => produto.id === id );


    if(indexProduto == -1) return {error: 404};
    
    for(let i = indexProduto; i < produtos.length - 1; i++)
        produtos[i] = produtos[i+1];

    produtos.pop();

    return {message: "Deletado com sucesso!"};

}

async function atualizar({id, nome, descricao, preco }){
    /*
    Vai atualizar um produto e retorna o produto.
    */

    const indexProduto = produtos.findIndex( produto => produto.id === id);

    if(indexProduto === -1) return {error: 404};

    if(nome) produtos[indexProduto].nome = nome;

    if(descricao) produtos[indexProduto].descricao = descricao;

    if(preco) produtos[indexProduto].preco = preco;

    const {idProduto, ...produto} = produtos[indexProduto];

    return produto;
}

const ProdutosModel = { cadastrar, todosProdutos, produtoId, deletarProduto, atualizar };

export default ProdutosModel;