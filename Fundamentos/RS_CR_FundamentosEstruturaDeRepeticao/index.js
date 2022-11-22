// Estruturas de repetição
// For

for(let i = 0; i <= 10; i++ ){
    console.log(i)
}

console.log('--------------------------------------------')

for (let i = 10; i >= 0; i--){
    console.log(i)
}

console.log('--------------------------------------------')

// FOR IN
/* 
Para que usar o for in?

Para percorrer um objeto.
Funciona quase igual a função .MAP que percorre um ARRAY

*/

const object = {
// Propriedade: valor
    a: 1,
    b: 2,
    c: 3
}

for(const property in object){
    // console.log(property) // Printa o "a, b, c"
    console.log(object[property]) // Printa o valor que tem a propriedade
}

console.log('--------------------------------------------')

for(const podeSerQualquerNome in object){
    // console.log(podeSerQualquerNome) // Printa o "a, b, c"
    console.log(object[podeSerQualquerNome]) // Printa o valor que tem a propriedade
}

console.log('--------------------------------------------')

const pessoas = {
    pessoa1: {
    nome: "Renan",
    idade: 28,
    cidade: "São Paulo"
    },
    pessoa2: {
    nome: "Junior",
    idade: 20,
    cidade: "Canoas"
    }
}

for (const p in pessoas){
    // Aqui é definido o "objeto da vez"e retornando o valor de cada propriedade que o objeto possui
    console.log(pessoas[p]) // retorna 2 objetos com 3 propriedades cada

    // Fazendo outro for dentro do for para percorrer cada objeto dentro do objeto pessoas
    for(const p2 in pessoas[p]){
        console.log(pessoas[p][p2]) // [p][p2] serve para pegar os valores das propriedades 
    }
}

console.log('--------------------------------------------')
// FOR OF

const times = [
    // Time, quantas vezes foi campeao da libertadores e o ultimo ano que foi campeão
    ["Grêmio", 3, 2017],
    ["Vasco da Gama", 1, 1998],
    ["Corinthians", 1, 2012],
    ["Cruzeiro", 2, 1997],
    ["Santos", 3, 2011],
    ["Palmeiras", 3, 2021]
]

for (const time of times){
    console.log(time) // Trazendo todas as informações do array

    // Trazendo só o nome dos times
    console.log(time[0])

    // Trazendo só a quantidade de vezes que foram campeões
    console.log(time[1])
}

console.log('--------------------------------------------')

// Diferença entre for of e .map
// O .map possíbilita que os dados sejam armazenados em um novo array
const meuNovoArrayDeTimes = times.map(time => {
    // Percorrendo o array times, e para cada time na posição [0], transformar em MAIUSCULA e retornar
    return time[0].toUpperCase();
})

console.log('O novo array:', meuNovoArrayDeTimes)

console.log('--------------------------------------------')
// ForEach
times.forEach((time)=>{
    console.log(time)
})

console.log('--------------------------------------------')

// Caso onde se deseja chamar a mesma função para 2 arrays diferentes

const cidades = [
    ["Porto Alegre"],
    ["Canoas"],
    ["São Paulo"],
    ["Rio de Janeiro"]
]


// Com for of
// Jeito não aconselhavel
for(const time of times){
    showConsoleLog(time)
}

for(const cidade of cidades){
    showConsoleLog(cidade)
}

// com forEach (callback)
// melhor forma para esta situação
times.forEach(showConsoleLog)
cidades.forEach(showConsoleLog)



function showConsoleLog(item){
    console.log(item)
}