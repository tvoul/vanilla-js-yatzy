import {resetRoll} from './dice.js'
import './score-logic.js'
import { aces, twos, threes, fours, fives, sixes } from './score-logic.js'

let upperScore = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']
let lowerScore = ['One pair', 'Two pair', '3 of a kind', '4 of a kind', 'Sm straight', 'Lg straight', 'Full house', 'Chance', 'Yahtzee']

function drawUpper(){
    let html = '<table><tr><th>Upper section</th><th>Score</th></tr>'
    for(let i = 0; i < upperScore.length; i++){
        html += `<tr id="${upperScore[i]}" class="score-row"><td><button>${upperScore[i]}</button></td> <td></td></tr>`
    }
    html += `<tr id="upper-total"><td>Upper</td><td>50</td></tr>
             <tr id="bonus"><td>Bonus</td><td>0</td></tr>`
    html += '</table>'
    document.getElementById('upper-score').innerHTML = html
}

function drawLower(){
    let html = '<table><tr><th>Lower section</th><th>Score</th></tr>'
    for(let i = 0; i < lowerScore.length; i++){
        html += `<tr id="${lowerScore[i]}" class="score-row"><td><button>${lowerScore[i]}</button></td> <td></td></tr>`
    }
    html += '<tr id="total"><td>Total</td><td>0</td></tr>'
    html += '</table>'
    document.getElementById('lower-score').innerHTML = html
}

document.getElementById('score-board').addEventListener('click', (event) =>{
    let clickedBox = event.target.closest('.score-row')
    if(!clickedBox){
        return
    }
    let boxId = clickedBox.id
    let total = checkScore(boxId)
    document.getElementById('roll-btn').disabled = true
    resetRoll()
    fillScore(boxId,total)
})

function checkScore(boxId){
    let dice = document.getElementsByClassName('die-box')
    let values = []
    for(let die of dice){
        let value = die.innerHTML
        values.push(parseInt(value))
    }
    let total = 0
    switch(boxId){
        case 'Aces': total = aces(values, boxId)
            break
        case 'Twos': total = twos(values, boxId)
            break
        case 'Threes': total = threes(values, boxId)
            break
        case 'Fours': total = fours(values, boxId)
            break
        case 'Fives': total = fives(values, boxId)
            break
        case 'Sixes': total = sixes(values, boxId)
            break
    }
    return(total)
}

function fillScore(target, sum){
    let scoreBox = document.getElementById(target).querySelector('td:nth-child(2)')
    scoreBox.innerHTML = sum
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
    bonus = document.getElementById('bonus').querySelector('td:nth-child(2)').innerHTML
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

drawUpper()
drawLower()