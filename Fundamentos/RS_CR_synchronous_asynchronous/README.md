<div align="center">
  <img alt="Logo Explorer" title="Explorer" src="https://i.imgur.com/2IqqDoo.png">
</div>

# Material de estudo: Síncrono e Assíncrono

## CLASSROOM - Síncrono vs Assíncrono

JS é single thread, por tanto, é síncrono.

Ou seja, caso tenha uma tarefa que demore 30 segundos, a aplicação ficará esperando ela terminar para continuar a ser executada linha a linha. Então, temos o `ASSINCRONISMO`como solução desta dificuldade.
O JS joga a esta tarefa que demoraria 30 segundos para uma outra "pilha" de execuções e quando ela estiver conclúida, é retornada para a execução natural da aplicação.

`Síncrono`
<br>
Uma tarefa de cada vez

    - Linha a linha
    - Comando a comando
    - Instrução a instrução

`Assincrono`
<br>
SetTimeOut é um exemplo de assíncrono.

`fecth()` -> Vai buscar alguma coisa (promessa)<br>
    Existem status para o fetch.<br>
        - Pendente <br>
            - Resolvida ✔️<br>
            - Rejeitada ❌<br>

Mas como pegar uma promessa vinda do fetch?
    `.then(() => {})`   -> Quando tiver a resposta, ele vai entrando nos .then


EXEMPLO:
<br>
```js
    .then((res) => {
        res.json()
    })
```
    
`.then()` <br>
Executa quando a promessa está com status de resolvida.

`.catch()` <br>
Executa quando a promessa está com status de rejeitada. (Tratamento de erros)

`.finally()` <br>
Executa de qualquer forma, rejeitada ou resolvida.
