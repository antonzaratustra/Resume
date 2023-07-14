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

//=========================

function makeSizeLarger(event) {
     event.target.style.border = `2px dotted ${getRandomColor()}`
     event.target.style.borderRadius = '50%'
     event.target.style.textAlign = 'center'
}

let cards = document.getElementsByClassName('section_card')

for (let card of cards) {card.addEventListener('mouseover', makeSizeLarger)}



