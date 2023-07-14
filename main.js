function setRandomBodyColor() {
    let r = Math.random() * (255 - 0);
    let g = Math.random() * (255 - 0);
    let b = Math.random() * (255 - 0);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
function getRandomColor () {
    let r = Math.random() * (255 - 0);
    let g = Math.random() * (255 - 0);
    let b = Math.random() * (255 - 0);
    return `rgb(${r}, ${g}, ${b})`
}

let timerId = setInterval(setRandomBodyColor, 10000)

document.body.onclick = setRandomBodyColor

function makeOreo(event) {
     event.target.style.border = `2px dotted ${getRandomColor()}`
     event.target.style.borderRadius = `${Math.random() * (50 - 0)}%`
     event.target.style.textAlign = 'center'
}

let cards = document.getElementsByClassName('section_card')

for (let card of cards) {card.addEventListener('mouseover', makeOreo)}

let forms = document.getElementsByTagName('form')


function randomBorderShiningAndColor() {
    forms[0].style.boxShadow = `${getRandomColor()} 5px 5px 5px`
    forms[0].style.color = `${getRandomColor()}`
}


let timerShining = setInterval(randomBorderShiningAndColor, 1000)

const currentYear = new Date().getFullYear()

const yearElement = document.querySelector('.year')

yearElement.innerHTML = `❤ Frontend from 2014 to ${currentYear}`

discoButton = document.querySelector('.fix_button')

function makeDisco() {
    
    
    
    if (discoButton.innerHTML === 'Start the disco') {
        discoButton.innerHTML = 'Stop the disco'
        clearInterval(timerId)
        timerId = setInterval(setRandomBodyColor, 100)
    } else {
        discoButton.innerHTML = 'Start the disco'
        clearInterval(timerId)
        timerId = setInterval(setRandomBodyColor, 10000)
    }

}

discoButton.onclick = makeDisco
