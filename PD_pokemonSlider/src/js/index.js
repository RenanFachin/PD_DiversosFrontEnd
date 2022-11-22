const buttonNext = document.getElementById('btn__next')
const buttonPrevious = document.getElementById('btn__previous')
const cards = document.querySelectorAll('.card')
let cardActive = 0

function removeCardSelected(){
    const cardSelecionado = document.querySelector('.selected')
    cardSelecionado.classList.remove('selected')
}

function showCardSelected(indexCardActive){
    cards[indexCardActive].classList.add('selected')
}


buttonNext.addEventListener('click', function() {
    if(cardActive === cards.length - 1){
       return
    }

    removeCardSelected()
    cardActive++
    showCardSelected(cardActive)
})

buttonPrevious.addEventListener('click', function() {
   if(cardActive === 0){
    return
   }

    removeCardSelected()
    cardActive--
    showCardSelected(cardActive)
})