// Fazendo o import das funções que serão utilizadas dentro da função start
// Utilizando o ES6 modules
import {
    buscarPessoas,
    transformarRespostaEmJson,
    mostrarPessoasNoConsole} 
from './FuncoesAuxiliares.js'

async function start(){
    // ASYNC/AWAIT funciona para substituir uma cadeia de then que teriamos
    const resposta = await buscarPessoas()
    const data = await transformarRespostaEmJson(resposta)
    mostrarPessoasNoConsole(data)
}

start()







