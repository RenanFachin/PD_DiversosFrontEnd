// Atribuindo a constante btnSubmit a seleção do botão do html
const btnSubmit = document.querySelector('.btn-login')

// Pegando o form
const form = document.querySelector('form')

// ADDEVENTLISTENER
btnSubmit.addEventListener('click', event => {
    // Fazendo o botão não ter o efeito padrão de submit
    event.preventDefault();

    // Fazendo a validação de todos os campos do formulário para
    // Pegando todos os elementos com a classe input block e atribuindo eles em um array
    const fields = [...document.querySelectorAll('.input-block input')]

    // Fazendo um foreach para cada elemento dentro deste array
    fields.forEach(field => {
        if (field.value === ""){
            // Caso esteja vazio alguma posição do array, ele vai atribuir a classe validate-error
            form.classList.add("validate-error")
        }
    })

    // Atribuindo, caso houver, o elemento que tenha a classe validate-error para a const formError
    const formError = document.querySelector('.validate-error')
    // Se existir, vai fazer um evento de animação
    if(formError){
        formError.addEventListener('animationend', event =>{
            if(event.animationName === 'submitnono'){
                formError.classList.remove('validate-error')
            }
        })
    } else {
        // Adicionando uma classe para "sumir" com o o formulário
        form.classList.add('form-hide')
    }
})


/* Desafio 04 - Fazendo o formulário sair do html e resolvendo pequenos bugs (barra de rolagem) */

form.addEventListener("animationstart", event => {
    // Quando começar o evento de disappearForm
    if(event.animationName === 'disappearForm'){
        // Dizendo para ele que não pode haver o transbordamento dos elementos (tirando a barra de rolagem)
        document.querySelector('body').style.overflow = 'hidden'
    }
})



form.addEventListener("animationend", event => {
    // Ela vai disparar em qualquer ANIMATION END
    // Então, devemos dizer em QUAL ANIMAÇÃO que queremos adicionar esse listener

    if(event.animationName === 'disappearForm'){
        form.style.display = "none";

        // é necessário fazer a volta para o padrão normal do overflow da página
        document.querySelector('body').style.overflow = 'none'
    }
})


// Background Squares

const ulSquares = document.querySelector('ul.squares')

for (let i = 0; i<21; i++){

    // Para cada fez que ele passar no for, ele vai criar um elemento de lista (li)
    const li = document.createElement('li')

    // Para não ficar repetindo código
    // Criada uma função (de nome RANDOM) que vai receber 2 parâmetros de entrada (min e max)
    const random = (min, max) => Math.random() * (max - min) + min;


    // Criando tamanhos de forma randomica
    // Tamanho máximo = 120 e mínimo = 20
    // Math.floor arredonda
    const size = Math.floor(random(20,120))
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`; // Tirando eles da tela


    // Fazendo posicionamentos randomicos na tela
    // Posições aleatórias na tela.
    // Posição máxima = 99% e mínima de 1%
    const position = random(1,99)
    li.style.left = `${position}%`


    // Atribuindo delay de forma randomica
    const delay = random(1, 5)
    li.style.animationDelay = `${delay}s`

    // Fazendo o tempo de duração da animação também de forma dinâmica (randomica)
    const duration = random(5, 15)
    li.style.animationDuration = `${duration}s`

    // Atribuindo os timing de saida de fomra randomica
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

    // Adicionando o que foi criado no for ao elemento ul.squares
    ulSquares.appendChild(li)

}