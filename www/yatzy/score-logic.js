export function upper(value){
    let values = getDiceValues()
    let score = 0
    for(let elem of values){
        if (elem == value){
            score += value
        }
    }
    return score
}

export function threeKind(){
    let values = getDiceValues()
    let score = 0
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }
    if(valueOccurence.includes(3)){
        score = (valueOccurence.indexOf(3) + 1)*3
    }
    else if(valueOccurence.includes(4)){
        score = (valueOccurence.indexOf(4) + 1)*3
    }
    else if(valueOccurence.includes(5)){
        score = (valueOccurence.indexOf(5) + 1)*3
    }
    return score
}

export function fourKind(){
    let values = getDiceValues()
    let score = 0
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }
    if(valueOccurence.includes(4)){
        score = (valueOccurence.indexOf(4) + 1)*4
    }
    else if(valueOccurence.includes(5)){
        score = (valueOccurence.indexOf(5) + 1)*4
    }
    return score
}

export function fullHouse(){
    let values = getDiceValues()
    let score = 0
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }
    if(valueOccurence.includes(2) && valueOccurence.includes(3)){
        score = (valueOccurence.indexOf(2) + 1)*2
        score += (valueOccurence.indexOf(3) + 1)*3
    }
    return score
}

export function straight(value){
    let values = getDiceValues()
    let score = 0
    let diceTotal = 0
    let smallStraight = [1,2,3,4,5]
    let largeStraight = [2,3,4,5,6]
    for(let elem of values){
        diceTotal += elem
    }
    let sorted = values.sort()
    if(value == 'small' && sorted.toString() === smallStraight.toString()){
        score = 15
    }
    if(value == 'large' && sorted.toString() === largeStraight.toString()){
        score = 20
    }
    return score
}

export function chance(){
    let values = getDiceValues()
    let score = 0
    for(let elem of values){
        score += elem
    }
    return score
}

export function yahtzee(){
    let values = getDiceValues()
    let score = 0
    if (Math.min(...values) == Math.max(...values)){
        score = 50
    }
    return score
}

function getDiceValues(){
    let dice = document.getElementsByClassName('die-box')
    let values = []
    for(let die of dice){
        let value = die.innerHTML
        values.push(parseInt(value))
    }
    return values
}