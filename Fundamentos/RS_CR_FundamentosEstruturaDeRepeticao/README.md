# Estrutura de Repetição

## Resumo
```
For in  -> Percorre as propriedades de um objeto
For of  -> Percorre os valores de um array
.Map    -> Percorre os valores de um array e retorna um novo array
forEach -> Percorre os valores de um array utilizando função de callback
```

```
OBJETO tem PROPRIEDADE: VALOR
ARRAY  tem KEY: VALOR
```

### Estrutura FOR

```js
for(let i = 0; i <= 10; i++){
    console.log(i)
}
```

onde:<br>
`let i = 0` é a variável de controle <br>
`i<10` é a condição <br>
`i++` é o incremento a cada iteração do for <br>

```
OBS: Sempre será incrementado antes de verificar a condição

OBS2: Pode ser usado com decremento também (let i = 10; i >= 0; i--)
```

### Estrutura FOR IN
Apenas para objeto e oberserva a propriedade.

```js
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

/* 
console.log(property) -> Retorna só as proriedades (a, b, c) que o objeto possui
console.log(object[property]) -> retorna o valor correspondente de todas as propriedades que o objeto possui
*/
```

**Para que serve o for In?**<br>
Funciona quase igual a função .map só que para objeto.

**Exemplo de como se pega os valores de um objeto dentro de outro objeto**<br>
```js
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
```

### Estrutura FOR OF e .MAP
Mesma coisa que o FOR IN só que para ARRAY ao invés de para objeto. <br>
- **Retornando** o **valor** do array
- Muito semelhante ao `forEach` e ao `.MAP`<br>

**Qual a diferença entre FOR OF e .MAP?**<br>
O retorno de ambas é igual, porém, o `.MAP` possibilita que o resultado seja armazenado em um NOVO ARRAY.

```js
const times = [
    // Time, quantas vezes foi campeao da libertadores e o ultimo ano que foi campeão
    ["Grêmio", 3, 2017],
    ["Vasco da Gama", 1, 1998],
    ["Corinthians", 1, 2012],
    ["Cruzeiro", 2, 1997],
    ["Santos", 3, 2011],
    ["Palmeiras", 3, 2021]
]

const meuNovoArrayDeTimes = times.map(time => {
    // Percorrendo o array times, e para cada time na posição [0], transformar em MAIUSCULA e retornar
    return time[0].toUpperCase();
})

console.log(meuNovoArrayDeTimes)
```

```
OBS: O .MAP NÃO ALTERA O ARRAY ORIGINAL
```

### Estrutura FOREACH
- Não gera um novo array
- Faz a mesma coisa que o FOR OF só que com função callBack

```js
times.forEach((time)=>{
    console.log(time)
})
```