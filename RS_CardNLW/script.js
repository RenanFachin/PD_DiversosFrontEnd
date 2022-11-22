// Criando uma variável de controle para verificar qual é o card ativo
let isIgnite = true

function changeCard(event){
    // Adicionando a div .card em uma variável
    const card = event.currentTarget

    // Fazendo uma validação a partir da variável de controle utilizando um if ternário
    const urlImage = isIgnite ? "explorer" : "ignite"

    isIgnite = !isIgnite

    // Alterando a estilização
    card.style.backgroundImage = `url(./assets/bg-${urlImage}.svg)`
}