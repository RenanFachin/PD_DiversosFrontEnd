# Síncrono vs Assíncrono

JS é single thread, por tanto, é síncrono.

Ou seja, caso tenha uma tarefa que demore 30 segundos, a aplicação ficará esperando ela terminar para continuar a ser executada linha a linha. Então, temos o `ASSÍNCRONISMO`como solução desta dificuldade.
O JS joga a esta tarefa que demoraria 30 segundos para uma outra "pilha" de execuções e quando ela estiver conclúida, é retornada para a execução natural da aplicação.

`Síncrono`
Uma tarefa de cada vez

    - Linha a linha
    - Comando a comando
    - Instrução a instrução

