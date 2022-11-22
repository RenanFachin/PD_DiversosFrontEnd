const express = require("express");

const { randomUUID } = require("crypto")

// Importando o filesystem para simular um db interno no node
const fs = require("fs")

// Inicializando o express
const app = express();

// Definindo o formato que será recebido pelos requests
app.use(express.json())

// Array de produtos vazio
let products = [];

// Pegando os dados contidos dentro do products.json e inserindo eles dentro do array de products
fs.readFile("products.json", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else {
        products = JSON.parse(data)
    }
})

/** Métodos HTTP
 * POST => Inserir um dado
 * GET => Buscar um/mais dados
 * PUT => Alterar um dado
 * DELETE => Remover um dado
 */

/** Requests
 * Body => Sempre que quiser enviar dados para a aplicação 
 * Params => "O que vem na url" -> "/products/782173812731"
 * Query => /products?id=782173812731&value=782173812731
 */

// Adicionando um produto
app.post("/products", (request, response) => {
    // Nome e preço
    // Precisa receber essas informações de "fora"

    // Desestruturando o objeto json recebido pela request.body
    const { name, price } = request.body;

    const product = 
    {
        name,
        price,
        id: randomUUID()
    }


    // Adicionando os dados recebidos dentro do array products
    products.push(product)

    productFileChanges();

    return response.json(product)
})

// Listando todos os produtos
app.get("/products", (request, response) => {
    return response.json(products)
})

// Listando um produto específico (utilizando um request params)
app.get("/products/:id", (request, response) => {
    const { id } = request.params;

    // Percorrendo o array products fazendo a busca pelo produto de id igual ao passado como params
    const product = products.find(product => product.id === id)
    
    return response.json(product)
})

// Fazendo a alteração de algum dado de algum produto (com request params)
app.put("/products/:id", (request, response) => {
    // id do objeto que será modificado
    const { id } = request.params;

    // valores que serão alterados do id desejado
    const { name, price } = request.body;

    // Encontrando o produto dentro do array
    // findIndex só vai retornar a posição do array que o produto tenha o mesmo id o que foi passado como params
    const productIndex = products.findIndex(product => product.id === id)

    // Alterando o produto da posição de index
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    productFileChanges();

    return response.json({message: "Produto alterado com sucesso!"})
})

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;

    // Buscando a posição do array
    const productIndex = products.findIndex(product => product.id === id)

    // splice faz a remoção
    products.splice(productIndex, 1)

    productFileChanges();

    return response.json({message: "Produto removido com sucesso!"})
})


// criando uma função para fazer a chamada pro fs.writeFile
function productFileChanges(){
    fs.writeFile("products.json", JSON.stringify(products), (error) => {
        if(error){
            console.log(error)
        } else {
            console.log("Produto inserido")
        }
    })
}

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))