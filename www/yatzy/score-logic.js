export function upper(dieValue){
    let values = getDiceValues()
    let score = 0
    for(let elem of values){
        if (elem == dieValue){
            score += dieValue
        }
    }
    return score
}

export function onePair(){
    let values = getDiceValues()
    let score = 0
    let pairs = []
    for(let i = 1; i < 7; i++){
        if(values.filter(x => x==i).length > 1){
            pairs.push(i)
        }
    }
    if(pairs.length == 1){
        score = pairs[0]*2
    }
    // if there are two pairs, the second is the larger die pair
    if(pairs.length == 2){
        score = pairs[1]*2
    }
    return score
}

export function twoPair(){
    let values = getDiceValues()
    let score = 0
    let pairs = []
    for(let i = 1; i < 7; i++){
        if(values.filter(x => x==i).length > 1){
            pairs.push(i)
        }
    }
    if(pairs.length == 2){
        score = (pairs[0]*2) + (pairs[1]*2)
    }
    return score
}


export function threeKind(){
    let values = getDiceValues()
    let score = 0
    for(let i = 1; i < 7; i++){
        if(values.filter(x => x==i).length > 2){
            score = i * 3
        }
    }
    return score
}

export function fourKind(){
    let values = getDiceValues()
    let score = 0
    for(let i = 1; i < 7; i++){
        if(values.filter(x => x==i).length > 3){
            score = i * 4
        }
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

export function straight(name){
    let values = getDiceValues()
    let score = 0
    let smallStraight = [1,2,3,4,5]
    let largeStraight = [2,3,4,5,6]
    let sorted = values.sort()
    if(name == 'Small straight' && sorted.toString() === smallStraight.toString()){
        score = 15
    }
    if(name == 'Large straight' && sorted.toString() === largeStraight.toString()){
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