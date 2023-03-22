/* Recieve a normal string of words separtated with spaces as the input.
Our job is to conver these strings into camel cased strings. As a bonus
I have written a condition to consider out of place UPPERCASE letters
but I have not written code to consider out of place characters*/


const camelCase = function(input) 
{
  let returnString = '';
  // this loop iterates through the string allowing us to look at each character individually
  for(i=0; i<input.length; i++)
    {
    // this condition deletes the whitespace and capitizes the next letter
    if(input[i] === ' ')
    {
      i++;
      returnString += input[i].toUpperCase();
    }
    // this condition handles any uppercase letters that don't fit camelCase structure
    else if (input[i] === input[i].toUpperCase())
    {
      returnString += input[i].toLowerCase();
    }
    // this condition takes puts everyother letter into the return string
   else
    {
      returnString += input[i];
    }
  }
  return returnString;
};

console.log(camelCase("This is a string"));
console.log(camelCase("loOPy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));