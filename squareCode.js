const squareCode = function(message) 
{
  // msgNoWhiteSpace is the original msg with no whitespace
  let msgNoWhiteSpace = '';
  // tempString2 is a place holder
  let squareString = '';
  // temp array is a place holder. Holding elements of charLength characters
  let tempArray = [];
  // returnString is the properly "coded" version of the input string
  let returnString = '';
  // this eliminates spaces in the input string
  for(let i=0; i<message.length; i++)
  {
    if(message[i] !== ' ')
    {
      msgNoWhiteSpace += message[i];
    }
  }
  // this updates the character counter to not include orginal whitespace
  let charLength = Math.ceil(Math.sqrt(msgNoWhiteSpace.length))
  /* 
  this creates an array where every entry has a length of charLength
  the array when printed is a square message
  */
  for(let i=0;i<msgNoWhiteSpace.length;i++)
  {
    if((i%charLength)===0 && i !== 0)
    {
      tempArray.push(squareString);
      while(squareString.length >0)
      {
        squareString = squareString.slice(1);
      }
      squareString += msgNoWhiteSpace[i];
    }
    else if(i === msgNoWhiteSpace.length -1)
    {
      squareString += msgNoWhiteSpace[i];
      tempArray.push(squareString);
    }
    else
    {
      squareString += msgNoWhiteSpace[i];
    }
  }
  /*
  this iterates through the array to code the square message
  */
  for(let i=0;i<charLength; i++)
  {
    for(let x=0; x<tempArray.length; x++)
    {
      //sometimes the last array entry will not have a full length
      if(tempArray[x][i] === undefined)
      {
        break;
      }
      else
      {
        returnString += tempArray[x][i];
      }
    }
    //this creates a space inbetween the coded message after charLength characters
    returnString += ' ';
  }

  return returnString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));