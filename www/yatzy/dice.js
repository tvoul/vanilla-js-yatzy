let rolls = 0

document.getElementById('roll-btn').addEventListener('click', (e) => {
    document.getElementById('roll-btn').disabled = true
    rollDice()
})

document.getElementById('roll-dice').addEventListener('click', (event) => {
    moveDie(event, 'keep-dice')
})

document.getElementById('keep-dice').addEventListener('click', (event) => {
    moveDie(event, 'roll-dice')
})


function moveDie(event, location){
    let clickedBox = event.target.closest('.die-box')
    if(!clickedBox){
        return
    }
    let id = clickedBox.getAttribute('id')
    let background = clickedBox.style.backgroundImage
    let value = clickedBox.innerHTML
    let box = document.createElement('div')
    box.className = "die-box"
    box.id = id
    box.style.backgroundImage = background
    box.innerHTML = value
    document.getElementById(id).remove()
    document.getElementById(location).appendChild(box)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rollDice(){
    rolls += 1
    document.getElementById('roll-num').innerHTML = 'Roll number: ' + rolls
    let dice = document.getElementById('roll-dice')
    for (let i = 0; i < 3; i++){
        for (let child of dice.children){
            let value = Math.floor(Math.random() * 6) + 1
            document.getElementById(child.id).innerHTML = value
            document.getElementById(child.id).style.backgroundImage = `url(dice/${value}.png)`
            await sleep(100) //await to create rolling die animation/illusion
        }
    }
    if(rolls != 3){
        document.getElementById('roll-btn').disabled = false
    }
}

function resetDie(){
    let html = `
    <div class="die-box" id="i1"></div>
    <div class="die-box" id="i2"></div>
    <div class="die-box" id="i3"></div>
    <div class="die-box" id="i4"></div>
    <div class="die-box" id="i5"></div>`
    document.getElementById('keep-dice').innerHTML = ''
    document.getElementById('roll-dice').innerHTML = html
}

export async function resetRoll(){
    await sleep(700)
    rolls = 0
    document.getElementById('roll-btn').disabled = false
    document.getElementById('roll-num').innerHTML = 'Roll number: ' + rolls
    resetDie()
}
