export function upper(value, values, boxId){
    let total = 0
    for(let elem of values){
        if (elem == value){
            total += value
        }
    }
    document.getElementById(boxId).querySelector('td:nth-child(1) > button').disabled = true
    return total
}