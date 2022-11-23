import {resetRoll} from './dice.js'
import { upper, threeKind, fourKind, fullHouse, straight, chance, yahtzee } from './score-logic.js'

let upperScore = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']
let lowerScore = ['3 of a kind', '4 of a kind', 'Small straight', 'Large straight', 'Full house', 'Chance', 'Yahtzee']

function drawUpper(){
    let html = '<table id="upper-table"><tr><th>Upper section</th><th>Score</th></tr>'
    for(let i = 0; i < upperScore.length; i++){
        html += `<tr id="${upperScore[i]}" class="score-row"><td><button>${upperScore[i]}</button></td> <td></td></tr>`
    }
    html += `<tr id="upper-total"><td>Upper</td><td>0</td></tr>
             <tr id="bonus"><td>Bonus</td><td>0</td></tr>`
    html += '</table>'
    document.getElementById('upper-score').innerHTML = html
}

function drawLower(){
    let html = '<table id="lower-table"><tr><th>Lower section</th><th>Score</th></tr>'
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
    let table = event.target.closest('table').id
    let score = 0
    if (table == 'upper-table'){
        score = checkUpper(boxId)
    }
    else if (table == 'lower-table'){
        score = checkLower(boxId)
    }
    document.getElementById('roll-btn').disabled = true
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    fillScore(boxId, score)
    resetRoll()
})

function checkUpper(boxId){
    let score = 0
    switch(boxId){
        case 'Aces': score = upper(1)
            break
        case 'Twos': score = upper(2)
            break
        case 'Threes': score = upper(3)
            break
        case 'Fours': score = upper(4)
            break
        case 'Fives': score = upper(5)
            break
        case 'Sixes': score = upper(6)
            break
    }
    return score
}

function checkLower(boxId){
    let score = 0
    switch(boxId){
        case '3 of a kind' : score = threeKind()
            break
        case '4 of a kind' : score = fourKind()
            break
        case 'Full house' : score = fullHouse()
            break
        case 'Small straight': score = straight('small')
            break
        case 'Large straight': score = straight('large')
            break
        case 'Yahtzee': score = yahtzee()
            break
        case 'Chance': score = chance()
            break
    }
    return score
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