
// This will generate a random integer from 1 - 100
let num = Math.ceil(Math.random()*100);
// This is an array that stores previous guesses
let guessed = [];
// This is the guess counter
let guessCount = 0;
// This allows for prompt interface interaction
let prompt = require("prompt-sync")();
// Prompt interaction
let answer = parseInt(prompt("Guess a number: "));
do
{
  let temp = 0;
  for(let i=0; i<guessed.length; i++)
  {
    if(answer === guessed[i])
    {
    console.log('Already Guessed!');
    temp += 1;
    }
  }
  if(Number.isInteger(answer) === false)
  {
    console.log('Not a number! Try again!')
  }
  else if((answer > num)&& temp === 0)
  {
    console.log('Too High!');
    guessed.push(answer);
    guessCount += 1;
  }
  else if((answer < num)&& temp === 0)
  {
    console.log('Too Low');
    guessed.push(answer);
    guessCount += 1;
  }
  answer = parseInt(prompt("Guess a number: "));
}
while(answer !== num);
if (answer === num)
{
  guessCount += 1;
  console.log('You got it! You took ' + guessCount + ' attempts!');
}

//console.log("You answered: " + answer);