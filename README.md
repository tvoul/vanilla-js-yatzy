# Yahtzee!

Dice game written in Vanilla JavaScript, using Node.js/express backend.

```
  npm install
  npm start
```


Roll the dice and click the ones you wish to keep. Clicked dice will move to "keep" area and you can also click them back to the "roll" area.
After 3 rolls the button is disabled and you need to choose your scoring option.

Rules: \
*https://en.wikipedia.org/wiki/Yahtzee*

In my home country, One pair and Two pair is also an option, so that was added :)

## Evaluation

The dice are evaluated and suggestions are made. It will prioritize the upper section, since you get a bonus if the upper score is above 63. \
\
*Note that this is not a strategically optimal way to play, just suggestions :)*

<img src="https://user-images.githubusercontent.com/90894009/203974323-f731a0ea-bbef-468a-b191-5b4c40e5bf41.png" width="500" />
