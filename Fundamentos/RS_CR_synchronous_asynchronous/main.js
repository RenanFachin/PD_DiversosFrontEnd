// Síncrono
console.log("olá")

// Ele irá executar esta função, porém, será retornada só quando estiver pronta 1000ms depois
// Mesmo que o tempo fosse 0ms, ele será mostrado após tudo
// A funcionalidade setTimeout é considerada assíncrona pelo js
setTimeout(() => {
    console.log("teste")
}, 0);

console.log("Mundo")
console.log("!")