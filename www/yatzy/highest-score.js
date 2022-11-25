import { upperScore, onePair, twoPair, threeKind, fourKind, fullHouse, straight, yahtzee } from './score-logic.js'


let chances = [['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'], ['One pair', 'Two pair','3 of a kind', '4 of a kind', 'Small straight', 'Large straight', 'Full house', 'Chance', 'Yahtzee']]

export function highScore(){
    let suggestedChoice = ''
    let maxScore = 0
    let occurence = 0
    for(let i = 0; i < chances[0].length; i++){
        let tempScore = upperScore(i+1)
        let tempOccurence = tempScore/(i+1)
        if(maxScore < tempScore && occurence < tempOccurence && !document.getElementById(chances[0][i]).querySelector('td:nth-child(1) > button').disabled){
            maxScore = tempScore
            occurence = tempOccurence
            suggestedChoice = chances[0][i]
        }
    }

    if(occurence < 3){
        let tempScore = onePair()
        if(maxScore < tempScore && !document.getElementById('One pair').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'One pair'
        }
        tempScore = twoPair()
        if(maxScore < tempScore  && !document.getElementById('Two pair').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'Two pair'
        }
        tempScore = threeKind()
        if(maxScore < tempScore  && !document.getElementById('3 of a kind').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = '3 of a kind'
        }
        tempScore = fourKind()
        if(maxScore < tempScore  && !document.getElementById('4 of a kind').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = '4 of a kind'
        }
        tempScore = straight('Small straight')
        if(maxScore < tempScore  && !document.getElementById('Small straight').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'Small straight'
        }
        tempScore = straight('Large straight')
        if(maxScore < tempScore  && !document.getElementById('Large straight').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'Large straight'
        }
        tempScore = fullHouse()
        if(maxScore < tempScore  && !document.getElementById('Full house').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'Full house'
        }
        tempScore = yahtzee()
        if(maxScore < tempScore  && !document.getElementById('Yahtzee').querySelector('td:nth-child(1) > button').disabled){
            suggestedChoice = 'Yahtzee'
        }
    }
    console.log(occurence)
    if(suggestedChoice){
        document.getElementById(suggestedChoice).style.background = 'green'
    }
    else if(!document.getElementById('Chance').querySelector('td:nth-child(1) > button').disabled){
        document.getElementById('Chance').style.background = 'green'
    }
}
