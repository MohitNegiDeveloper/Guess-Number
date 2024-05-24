'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector('.message').textContent = "correct Answer";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector(".guess").value);
// document.querySelector('.guess').value = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const again = document.querySelector('.again');
again.addEventListener("click", function(){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector(".message").textContent = "Starting Guessing...";
  document.querySelector('.guess').value = "";
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';


  
})

console.log(secretNumber)


document.querySelector('.check').addEventListener("click", function()
{
  // document.querySelector(".guess").value;
  console.log(document.querySelector(".guess").value)

  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if(!guess){
    document.querySelector(".message").textContent = "No Number"
  }
  else if (guess === secretNumber)
  {
    document.querySelector('.message').textContent = "congratulation";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore ;
    }
    console.log('score')

  }
  
  else if (guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = "To high";
      score --;
      document.querySelector(".score").textContent = score
    }else {
      document.querySelector(".message").textContent = " you Lost the game";
      document.querySelector('.score').textContent = 0
    }
  }
  else if (guess < secretNumber){
    if(score>1){
      document.querySelector('.message').textContent = "To low";
      score --;
      document.querySelector(".score").textContent = score
    }else {
      document.querySelector(".message").textContent = " you Lost the game";
      document.querySelector('.score').textContent = 0
    }

  }
  else if(guess !== secretNumber){
    document.querySelector(".message").textContent = "try again !"

  }
  
})



























/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }



///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
