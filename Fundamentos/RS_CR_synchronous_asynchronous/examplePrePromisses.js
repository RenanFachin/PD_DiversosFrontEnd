console.log("buscar pessoas")

let pessoas = []

// indo em banco de dados em outro lugar


// Imaginar que o setTimeOut é o banco de dados
setTimeout(() => {
    // foi ao "banco de dados" e adicionou no array vazio
    pessoas = ["mayk", "renan", "marco", "vini"]

    // Simulando uma nova consulta com base no primeiro dado
    setTimeout(() => {
        console.log(pessoas[0])
    }, 200);

}, 2000);



// agora simulando o retorno
// console.log(pessoas[0]) // Ele irá retornar undefined