// Chamando o express
const express = require('express');

// Instanciando a execução do express na variável app
const app = express();

// Método get (que está dentro do express)
app.get('/', (req, res) => {
    res.send("Hello World")
})

// Método get em /renan
app.get('/renan', (req, res) => {
    res.send("Olá Renan")
})


// Porta onde o express fica "ouvindo"
// Dessa forma, no localhost:3000 terá a mensagem "hello world" printada no "front end"
app.listen(3000)