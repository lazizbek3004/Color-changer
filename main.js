let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let text = document.querySelector('.heading')
let box = document.querySelector('.box')

green.addEventListener('click', ()=>{
    text.style.color = 'green'
    box.className = 'box'
    box.classList.add('greenB')
})
blue.addEventListener('click', ()=>{
    text.style.color = 'blue'
    box.className = 'box'
    box.classList.add('blueB')
})
red.addEventListener('click', ()=>{
    text.style.color = 'red'
    box.className = 'box'
    box.classList.add('redB')
})
yellow.addEventListener('click', ()=>{
    text.style.color = 'yellow'
    box.className = 'box'
    box.classList.add('yellowB')
})

