export function aces(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 1){
            total += 1
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}

export function twos(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 2){
            total += 2
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}

export function threes(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 3){
            total += 3
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}

export function fours(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 4){
            total += 4
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}

export function fives(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 5){
            total += 5
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}

export function sixes(values, boxId){
    let total = 0
    for(let value of values){
        if (value == 6){
            total += 6
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}