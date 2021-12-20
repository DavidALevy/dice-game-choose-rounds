var scoreCount1 = 0;
var scoreCount2 = 0;
var clickCount = 0;
var holdCount = 0;
var tally1 = 0;
var tally2 = 0;
var rounds = 4;

const buttonClik = document.getElementById("clik");
const buttonHold = document.getElementById("hold");
const buttonReset = document.getElementById("reset");
const buttonRounds = document.getElementById("submit");


buttonClik.addEventListener("click", () => {
  let random = (Math.floor(Math.random() * 6) + 1);


  ///////////////////////////////////  
  if (holdCount % 2 == 0)
  ////////////PLAYER 1//////////////////////
  {

    if (clickCount == 0) {

      document.getElementById('diceF').style.display = "block";
      document.getElementById('diceF').src = "images/dice.png";
      document.getElementById('score1').innerHTML = ('score: 0');
      document.getElementById('score2').innerHTML = ('score: 0');
      document.getElementById('clik').innerHTML = ('Roll');
      document.getElementById('status1').innerHTML = ('You start!');
      document.getElementById('status2').innerHTML = ('');
      document.getElementById('status2').innerHTML = ('');
      clickCount++;
      scoreCount1 = 0;
      scoreCount2 = 0;

      if (tally1 + tally2 == 0) {
        document.getElementById('tally1').innerHTML = ('');
        document.getElementById('tally2').innerHTML = ('');
        return;
      }
      else return;
    }
    /////////////////////PLAYER1 WIN///////////////////
    else if (clickCount > 0 && scoreCount1 + random >= 20 && random != 1) {
      tally1++;
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = (`score: ${scoreCount1 + random}`);
      document.getElementById('status2').innerHTML = ('');
      document.getElementById('tally1').innerHTML = (`Games won: ${tally1}`);
      scoreCount1 = 0;
      scoreCount2 = 0;
      clickCount = 0;

      if (tally1 + tally2 < rounds) {
        document.getElementById('clik').innerHTML = ('Click here to play again');
        document.getElementById('status1').innerHTML = ('You win!');

        holdCount = 0;
        return;
      }

      else if (tally1 > tally2) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status1').innerHTML = ('YOU ARE GRAND CHAMPION!');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }
      else if (tally2 > tally1) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status2').innerHTML = ('YOU ARE GRAND CHAMPION!');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }
      else if (tally2 == tally1) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status1').innerHTML = ('DRAW');
        document.getElementById('status2').innerHTML = ('DRAW');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }



    } else if (clickCount > 0 && random !== 1 && scoreCount1 + random < 20) {
      scoreCount1 = scoreCount1 + random;
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = (`score: ${scoreCount1}`);
      document.getElementById('status1').innerHTML = ('Your turn');
      document.getElementById('status2').innerHTML = ('');
      document.getElementById('clik').innerHTML = ('Roll');
      clickCount++
      return;
    }
    else if (clickCount > 0 && random == 1) {

      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = ('score: 0');
      document.getElementById('status2').innerHTML = ('Your turn');
      document.getElementById('status1').innerHTML = ('Oh dear, you got a 1');

      scoreCount1 = 0;
      holdCount++;
      return;
    }

  } else {
    ///////////////////PLAYER 2///////////////////////////
    if (clickCount == 0) {
      document.getElementById('diceF').style.display = "block";
      document.getElementById('diceF').src = "images/dice.png";
      document.getElementById('score1').innerHTML = ('score: 0');
      document.getElementById('score2').innerHTML = ('score: 0');
      document.getElementById('clik').innerHTML = ('Roll');
      document.getElementById('status2').innerHTML = ('You start!');
      document.getElementById('status1').innerHTML = ('');
      clickCount++;
      scoreCount1 = 0;
      scoreCount2 = 0;
      return;
    }
    ///////////////PLAYER 2 WIN////////////////
    else if (clickCount > 0 && scoreCount2 + random >= 20 && random != 1) {
      tally2++;
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score2').innerHTML = (`score: ${scoreCount2 + random}`);
      document.getElementById('status1').innerHTML = ('');
      document.getElementById('tally2').innerHTML = (`Games won: ${tally2}`);
      scoreCount2 = 0;
      scoreCount1 = 0;
      clickCount = 0;

      if (tally1 + tally2 < rounds) {
        document.getElementById('status2').innerHTML = ('You win!');
        document.getElementById('clik').innerHTML = ('Click here to play again');
        holdCount = 1;
        return;
      }

      else if (tally1 > tally2) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status1').innerHTML = ('YOU ARE GRAND CHAMPION!');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }
      else if (tally2 > tally1) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status2').innerHTML = ('YOU ARE GRAND CHAMPION!');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }
      else if (tally2 == tally1) {
        document.getElementById('clik').innerHTML = ('Click here to restart');
        document.getElementById('status1').innerHTML = ('DRAW');
        document.getElementById('status2').innerHTML = ('DRAW');
        holdCount = 0;
        tally1 = 0;
        tally2 = 0;
        return;
      }

    }
    else if (clickCount > 0 && random !== 1 && scoreCount2 + random < 20) {
      scoreCount2 = scoreCount2 + random;
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score2').innerHTML = (`score: ${scoreCount2}`);
      document.getElementById('status2').innerHTML = ('Your turn');
      document.getElementById('status1').innerHTML = ('');
      document.getElementById('clik').innerHTML = ('Roll');
      clickCount++
      return;
    }
    else if (clickCount > 0 && random == 1) {
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score2').innerHTML = ('score: 0');
      document.getElementById('status2').innerHTML = ('Oh dear, you got a 1');
      document.getElementById('status1').innerHTML = ('Your turn');
      scoreCount2 = 0;
      holdCount++;
      return;
    }
  }   
}
)

buttonHold.addEventListener("click", () => {
  holdCount++;
  if (clickCount >= 2) {
    if (holdCount % 2 == 0) {
      document.getElementById('status1').innerHTML = ('Your turn')
      document.getElementById('status2').innerHTML = ('So you want to hold! Good luck!')
    }
    else {
      document.getElementById('status1').innerHTML = ('So you want to hold! Good luck!')
      document.getElementById('status2').innerHTML = ('Your turn')
    };
  } else return
}
);

buttonReset.addEventListener("click", () => {
  document.getElementById('diceF').style.display = "none";
  document.getElementById('score1').innerHTML = ('');
  document.getElementById('score2').innerHTML = ('');
  document.getElementById('clik').innerHTML = ('Start');
  document.getElementById('status1').innerHTML = ('');
  document.getElementById('status2').innerHTML = ('');
  document.getElementById('tally1').innerHTML = ('');
  document.getElementById('tally2').innerHTML = ('');
  document.getElementById('outputRounds').innerHTML = ('Choose number of rounds:');
  document.getElementById('inputRounds').value = ('');
  scoreCount1 = 0;
  scoreCount2 = 0;
  holdCount = 0;
  clickCount = 0;
  rounds = 4;

  return;
})

buttonRounds.addEventListener("click", () => {
  let irounds = document.getElementById('inputRounds').value;

  if (irounds < 1 || irounds > 20 || irounds <= tally1 + tally2)

    return;
  else {
    rounds = irounds;

    document.getElementById('outputRounds').innerHTML = (`Number of rounds: ${rounds}`);
  }

  return;
}
)