let rollsLeft = 3

document.getElementById('roll-btn').addEventListener('click', (e) => {
    document.getElementById('roll-btn').disabled = true
    rollDice()
})

document.getElementById('roll-dice').addEventListener('click', (event) => {
    if(rollsLeft == 3){
        return
    }
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
    rollsLeft -= 1
    document.getElementById('roll-num').innerHTML = 'Rolls left: ' + rollsLeft
    let dice = document.getElementById('roll-dice')
    let diceToShuffle = []
    //get diceIds to randomize order before rolling
    //otherwise dice always roll left to right (id 1 to id 5)
    for (let i = 0; i < dice.children.length; i++){
        diceToShuffle.push(dice.children[i].id)
    }
    for (let x = 0; x < 4; x++){
        //shuffle the dice multiple times to create illusion of real roll
        let shuffledDice = diceToShuffle.sort((a, b) => 0.5 - Math.random());
        for(let i = 0; i < dice.children.length;i++){
            let value = Math.floor(Math.random() * 6) + 1
            document.getElementById(dice.children[shuffledDice[i]].id).innerHTML = value
            document.getElementById(dice.children[shuffledDice[i]].id).style.backgroundImage = `url(dice/${value}.png)`
            await sleep(100) //await to create rolling die animation
        }
    }
    if(rollsLeft != 0){
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

export async function resetRoll(ms){
    await sleep(ms)
    rollsLeft = 3
    document.getElementById('roll-btn').disabled = false
    document.getElementById('roll-num').innerHTML = 'Rolls left: ' + rollsLeft
    resetDie()
}
