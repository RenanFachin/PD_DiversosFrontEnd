console.log("buscar pessoas")

let pessoas = []

// indo em banco de dados em outro lugar

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        res.json()
            .then((data) => {
                // console.log(data)
                // Retorna todo o dado transformado da api


                pessoas = data // Atribuindo para pessoas o conteúdo que estava em data
                console.log(pessoas)
                console.log(pessoas[0].name) // Pegando do objeto a pessoa na posição inicial e pedindo o nome
                console.log(pessoas[1].name) // Pegando do objeto a pessoa na 2 e pedindo o nome
            
                // Uma promessa espera a outra
            })
    })

// vai retornar o objeto todo do JSON
/*
Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}body: ReadableStreamlocked: false[[Prototype]]: ReadableStreamcancel: ƒ cancel()getReader: ƒ getReader()locked: (...)pipeThrough: ƒ pipeThrough()pipeTo: ƒ pipeTo()tee: ƒ tee()constructor: ƒ ReadableStream()Symbol(Symbol.toStringTag): "ReadableStream"get locked: ƒ locked()[[Prototype]]: ObjectbodyUsed: falseheaders: Headers {}[[Prototype]]: Headersok: trueredirected: falsestatus: 200statusText: ""type: "cors"url: "https://jsonplaceholder.typicode.com/users"[[Prototype]]: Response
*/