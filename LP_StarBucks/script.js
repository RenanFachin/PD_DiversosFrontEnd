function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeText(color){
    const textOne = document.querySelector('#textOne');
    const textTwo = document.querySelector('#textTwo');
    textOne.style.color = color;
    textTwo.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

function changeSideBar(color){
    const sideBar = document.querySelector('.sci');
    sideBar.style.background = color;
}