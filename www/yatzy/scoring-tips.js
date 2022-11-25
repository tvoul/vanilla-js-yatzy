let chances = ['One pair','3 of a kind', '4 of a kind', 'Yahtzee']


export function evaluate(){
    let values = getDiceValues()
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }

    //suggest yatzy, 4 & 3 of a kind sequentially
    let maxOccurence = Math.max(...valueOccurence)
    for (let i = 4; i > 0; i--){
        if(maxOccurence > i){
            highLight(chances[i - 1])
        }
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