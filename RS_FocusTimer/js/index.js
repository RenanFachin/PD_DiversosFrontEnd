const body = document.querySelector ('body')
const divTimer = document.querySelector('#timer')
const divControls = document.querySelector('#controls')
const divOne = document.querySelector('.cardOne')
const divTwo = document.querySelector('.cardTwo')
const divThree = document.querySelector('.cardThree')
const divFour = document.querySelector('.cardFour')
const range = document.querySelector('.range')

const volForest = document.querySelector('#volForest')
const volRain = document.querySelector ('#volRain')
const volCoffe = document.querySelector('#volCoffe')
const volFire = document.querySelector('#volFire')

const iconLightMode = document.querySelector ('#lightMode')
const iconDarkMode = document.querySelector ('#darkMode')

//-----------------------------

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus') 
const buttonMinus = document.querySelector('.minus') 

const buttonForest = document.querySelector('#forest')
const buttonRain = document.querySelector('#rain')
const buttonCoffee = document.querySelector('#coffee')
const buttonFire = document.querySelector('#fire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)


function resetMood(){
    buttonForest.parentNode.classList.remove('activeButton')
    buttonRain.parentNode.classList.remove('activeButton')
    buttonCoffee.parentNode.classList.remove('activeButton')
    buttonFire.parentNode.classList.remove('activeButton')
}

function uptadeTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
    uptadeTimerDisplay(minutes,0)
    clearTimeout(timerTimeOut)
}

function countDown (){

    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        uptadeTimerDisplay(minutes, 0)

        if (isFinished){
            return
        }

        if(seconds<=0){
            seconds = 60

            --minutes
        }

        uptadeTimerDisplay(minutes, String(seconds - 1))


        countDown()
    }, 1000)
}

//BOTÕES CENTRAIS

buttonPlay.addEventListener('click',function(){
    countDown()
})

buttonStop.addEventListener('click',function(){
    resetTimer()
})

buttonPlus.addEventListener('click', function(){

    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent =  String(minutes +5).padStart(2, "0")

    console.log(minutesDisplay)
})

buttonMinus.addEventListener('click', function(){

    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 5)
    {
        uptadeTimerDisplay(00, 00)
    }
    else{
        minutesDisplay.textContent =  String(minutes - 5).padStart(2, "0")
    }
    console.log(minutesDisplay)
})


// MOODS

// Sounds
const forestAudio = new Audio("./sounds/Floresta.wav")
const rainAudio = new Audio("./sounds/Chuva.wav")
const coffeeAudio = new Audio("./sounds/cafe.wav")
const fireAudio = new Audio("./sounds/Lareira.wav")

forestAudio.loop = true
rainAudio.loop = true
coffeeAudio.loop = true
fireAudio.loop = true



// Função para parar o audio
function toggleAudioPlay(myAudio) {
    // aqui ele verifica se o audio está pausado e retorna um boolean
    let isPaused = myAudio.paused

     if (isPaused) {
         // se for true ele inicia o audio
         myAudio.play();
     } else {
         // se for false ele para o audio
         myAudio.pause();
     }

     myAudio.loop = true

}

// Função para parar o audio de todas
function pauseAudio(){
    forest = forestAudio.pause()
    rain = rainAudio.pause()
    coffee = coffeeAudio.pause()
    fire = fireAudio.pause()
}


// Botões MOODS
buttonForest.addEventListener('click',function(){
    resetMood()
    pauseAudio()

    buttonForest.parentNode.classList.add('activeButton')
    toggleAudioPlay(forestAudio)
})

buttonRain.addEventListener('click',function(){
    resetMood()
    pauseAudio()

    buttonRain.parentNode.classList.add('activeButton')
    toggleAudioPlay(rainAudio)
})

buttonCoffee.addEventListener('click',function(){
    resetMood()
    pauseAudio()

    buttonCoffee.parentNode.classList.add('activeButton')
    toggleAudioPlay(coffeeAudio)
})

buttonFire.addEventListener('click',function(){
    resetMood()
    pauseAudio()

    buttonFire.parentNode.classList.add('activeButton')
    toggleAudioPlay(fireAudio)
})



// Javascript para alterar o modo

function resetTheme(){
    iconDarkMode.classList.add('hide')
    iconLightMode.classList.remove('hide')

    body.classList.remove('dark')
    divTimer.classList.remove('dark')
    divControls.classList.remove('dark')

    divOne.classList.remove('dark')
    divTwo.classList.remove('dark')
    divThree.classList.remove('dark')
    divFour.classList.remove('dark')
}

iconLightMode.addEventListener('click',function(){
    iconDarkMode.classList.remove('hide')
    iconLightMode.classList.add('hide')
    body.classList.add('dark')
    divTimer.classList.add('dark')
    divControls.classList.add('dark')

    divOne.classList.add('dark')
    divTwo.classList.add('dark')
    divThree.classList.add('dark')
    divFour.classList.add('dark')
})

iconDarkMode.addEventListener('click',function(){
    resetTheme()
})



// Ajuste do controle do botão de volume
// Cria um evento no volForest (que é o input com id volForest do html e utiliza a propriedade .volume para controlar)


volForest.addEventListener ('input', function () {
    forestAudio.volume = volForest.value
  })

// Cria um evento no volRain (que é o input com id volRain do html e utiliza a propriedade .volume para controlar)
  volRain.addEventListener ('input', function () {
    rainAudio.volume = volRain.value
  })

// Cria um evento no volCoffe (que é o input com id volCoffe do html e utiliza a propriedade .volume para controlar)
  volCoffe.addEventListener ('input', function () {
    coffeeAudio.volume = volCoffe.value
  })

// Cria um evento no volFire (que é o input com id volFire do html e utiliza a propriedade .volume para controlar)
  volFire.addEventListener ('input', function () {
    fireAudio.volume = volFire.value
  })





