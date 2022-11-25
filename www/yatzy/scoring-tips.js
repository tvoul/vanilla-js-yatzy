export function evaluate(){
    let values = getDiceValues()
    let valueOccurence = []
    for(let i = 1; i < 7; i++){
        valueOccurence.push(values.filter(x => x==i).length)
    }

    //suggest yatzy, 4 & 3 of a kind sequentially
    let maxOccurence = Math.max(...valueOccurence)
    if(maxOccurence == 5 && !document.getElementById('Yahtzee').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('Yahtzee').style.background = 'green'
    }
    else if(maxOccurence > 3 && !document.getElementById('4 of a kind').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('4 of a kind').style.background = 'green'
    }
    else if(maxOccurence > 2 && !document.getElementById('3 of a kind').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('3 of a kind').style.background = 'green'
    }
    else if(maxOccurence == 2 && !document.getElementById('3 of a kind').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('One pair').style.background = 'green'
    }

    //suggest small or large straight if match
    let smallStraight = [1,2,3,4,5]
    let largeStraight = [2,3,4,5,6]
    let sorted = values.sort()
    if(sorted.toString() === smallStraight.toString() && !document.getElementById('Small straight').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('Small straight').style.background = 'green'
    }
    if(sorted.toString() === largeStraight.toString() && !document.getElementById('Large straight').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('Large straight').style.background = 'green'
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