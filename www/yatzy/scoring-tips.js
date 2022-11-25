export function evaluate(){
    let values = getDiceValues()
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }

    //suggest yatzy, 4 & 3 of a kind sequentially
    let maxOccurence = Math.max(...valueOccurence)
    if(maxOccurence > 1){
        pairs(maxOccurence)
    }

    if((valueOccurence.filter(x => x==2).length) == 2){
        highLight('Two pair')
    }

    if(valueOccurence.includes(2) && valueOccurence.includes(3)){
        highLight('Full house')
    }

    //suggest small or large straight if match
    let smallStraight = [1,2,3,4,5]
    let largeStraight = [2,3,4,5,6]
    let sorted = values.sort()
    if(sorted.toString() === smallStraight.toString()){
        highLight('Small straight')
    }

    if(sorted.toString() === largeStraight.toString()){
        highLight('Large straight')
    }
}

function pairs(maxOccurence){
    if(maxOccurence == 5){
        highLight('Yahtzee')
    }
    else if(maxOccurence > 3){
        highLight('4 of a kind')
    }
    else if(maxOccurence > 2){
        highLight('3 of a kind')
    }
    else if(maxOccurence == 2){
        highLight('One pair')
    }
}

function highLight(boxId){
    if(!document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled){
        document.getElementById(boxId).style.background = 'green'
    }
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