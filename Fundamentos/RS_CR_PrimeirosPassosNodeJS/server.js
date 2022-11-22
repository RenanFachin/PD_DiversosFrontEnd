const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Caso seja chamada a rota /produto
    if(request.url === '/produto'){
        response.end(JSON.stringify({
            message: "Rota de produto"
        }))
    }

    // Caso seja chamada a rota /usuario
    if(request.url === '/usuario'){
        response.end(JSON.stringify({
            message: "Rota de usuário"
        }))
    }

    response.end(JSON.stringify({
        message: "Qualquer outra rota"
    }))
}).listen(4001, () => console.log("Servidor está rodando na porta 4001"));