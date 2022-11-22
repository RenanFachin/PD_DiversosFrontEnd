let pessoas = []

// indo em banco de dados em outro lugar

// "SEM CLEAN CODE"
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         pessoas = data
//         console.log(pessoas[0].name)
// })


// Aplicando conceitos de CLEAN-CODE
// "Vai buscar os dados no endpoint x"
fetch("https://jsonplaceholder.typicode.com/users")
    .then(transformarRespostaEmJson)    // então, transforma em json a reposta
    .then(mostrarPessoasNoConsole)  // então, mostra no console

    //OBS: QUEM EXECUTA AS FUNÇÕES É O .THEN POR BAIXO DOS PANOS






function transformarRespostaEmJson(resposta){
    return resposta.json();
    // Lembrando que o .json é da api do FETCH
}

function mostrarPessoasNoConsole(pessoas){
    console.log(pessoas)
}


// Com o axios:
/* 
axios.get("https://jsonplaceholder.typicode.com/users")

não precisaria transformar antes o dato em json
*/