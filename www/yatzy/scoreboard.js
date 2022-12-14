import {resetRoll} from './dice.js'
import { upperScore, onePair, twoPair, threeKind, fourKind, fullHouse, straight, chance, yahtzee } from './score-logic.js'

document.getElementById('score-board').addEventListener('click', (event) =>{
    let clickedBox = event.target.closest('.score-row')
    if(!clickedBox){
        return
    }
    let boxId = clickedBox.id
    let table = event.target.closest('table').id
    let score = 0
    if (table == 'upper-table'){
        score = checkUpper(boxId)
    }
    else if (table == 'lower-table'){
        score = checkLower(boxId)
    }
    document.getElementById('roll-btn').disabled = true //cause lag, to indicate next round
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    fillScore(boxId, score)
    resetRoll(700)
})

document.getElementById('reset-btn').addEventListener('click', (event) =>{
    document.getElementById('upper-table').remove()
    document.getElementById('lower-table').remove()
    drawUpper()
    drawLower()
    resetRoll(0)
})

let upperBoard = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']
let lowerBoard = ['One pair', 'Two pair','3 of a kind', '4 of a kind', 'Small straight', 'Large straight', 'Full house', 'Chance', 'Yahtzee']

function drawUpper(){
    let html = '<table id="upper-table"><tr><th>Upper section</th><th>Score</th></tr>'
    for(let i = 0; i < upperBoard.length; i++){
        html += `<tr id="${upperBoard[i]}" class="score-row"><td><button>${upperBoard[i]}</button></td> <td></td></tr>`
    }
    html += `<tr id="upper-total"><td>Upper</td><td>0</td></tr>
             <tr id="bonus"><td>Bonus</td><td>0</td></tr>`
    html += '</table>'
    document.getElementById('upper-score').innerHTML = html
}

function drawLower(){
    let html = '<table id="lower-table"><tr><th>Lower section</th><th>Score</th></tr>'
    for(let i = 0; i < lowerBoard.length; i++){
        html += `<tr id="${lowerBoard[i]}" class="score-row"><td><button>${lowerBoard[i]}</button></td> <td></td></tr>`
    }
    html += '<tr id="total"><td>Total</td><td>0</td></tr>'
    html += '</table>'
    document.getElementById('lower-score').innerHTML = html
}

function checkUpper(boxId){
    let score = 0
    switch(boxId){
        case 'Aces': score = upperScore(1)
            break
        case 'Twos': score = upperScore(2)
            break
        case 'Threes': score = upperScore(3)
            break
        case 'Fours': score = upperScore(4)
            break
        case 'Fives': score = upperScore(5)
            break
        case 'Sixes': score = upperScore(6)
            break
    }
    return score
}

function checkLower(boxId){
    let score = 0
    switch(boxId){
        case 'One pair': score = onePair()
            break
        case 'Two pair': score = twoPair()
            break
        case '3 of a kind' : score = threeKind()
            break
        case '4 of a kind' : score = fourKind()
            break
        case 'Full house' : score = fullHouse()
            break
        case 'Small straight': score = straight(boxId)
            break
        case 'Large straight': score = straight(boxId)
            break
        case 'Yahtzee': score = yahtzee()
            break
        case 'Chance': score = chance()
            break
    }
    return score
}

function fillScore(targetRow, sum){
    let scoreBox = document.getElementById(targetRow).querySelector('td:nth-child(2)')
    scoreBox.innerHTML = sum
    repaint()
    updateUpper()
    updateTotal()
}

function updateTotal(){
    let total = 0
    let rows = document.getElementsByClassName('score-row')
    for (let row of rows){
        let value = row.querySelector('td:nth-child(2)').innerHTML
        if(value){
            total += parseInt(value)
        }
    }
    let bonus = document.getElementById('bonus').querySelector('td:nth-child(2)').innerHTML
    total += parseInt(bonus)
    document.getElementById('total').querySelector('td:nth-child(2)').innerHTML = total
}

function updateUpper(){
    let upperTotal = 0
    let rows = document.getElementById('upper-score').getElementsByClassName('score-row')
    for (let row of rows){
        let value = row.querySelector('td:nth-child(2)').innerHTML
        if(value){
            upperTotal += parseInt(value)
        }      
    }
    if(upperTotal > 62){
        document.getElementById('bonus').querySelector('td:nth-child(2)').innerHTML = '50'
    }
    document.getElementById('upper-total').querySelector('td:nth-child(2)').innerHTML = upperTotal
}

export function repaint(){
    for(let i = 0; i < upperBoard.length; i++){
        document.getElementById(upperBoard[i]).style.background = 'rgb(255, 245, 230)'
    }
    for(let i = 0; i < lowerBoard.length; i++){
        document.getElementById(lowerBoard[i]).style.background = 'rgb(255, 245, 230)'
    }
}

drawUpper()
drawLower()