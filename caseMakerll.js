/*
This function returns the input in the given caseStyle as long as only
one casestyle is given
*/
const makeCaseSingle = function(input, caseStyle)
{
   //      NEW FUNCTION   ******************************************************
  //this function handles camelCase output
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
   //      NEW FUNCTION   ******************************************************
  //this function handles pascal output
  const pascal = function(input)
  { 
    let returnString = '';
    returnString += input[0].toUpperCase();
    // this loop iterates through the string allowing us to look at each character individually
    for(i=1; i<input.length; i++)
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
  //      NEW FUNCTION   ******************************************************
  //this function handles snake output
  const snake = function(input)
  {
    let returnString = '';
    // this loop iterates through the string allowing us to look at each character individually
    for(i=0; i<input.length; i++)
      {
      // this condition deletes the whitespace and capitizes the next letter
      if(input[i] === ' ')
      {
        returnString += '_';
      }
      
      // this condition takes puts everyother letter into the return string
     else
      {
        returnString += input[i];
      }
    }
    return returnString;
  };
   //      NEW FUNCTION   ******************************************************
  //this function handles kebab output
  const kebab = function(input)
  {
    let returnString = '';
    // this loop iterates through the string allowing us to look at each character individually
    for(i=0; i<input.length; i++)
      {
      // this condition deletes the whitespace and capitizes the next letter
      if(input[i] === ' ')
      {
        returnString += '-';
      }
      // this condition takes puts everyother letter into the return string
     else
      {
        returnString += input[i];
      }
    }
    return returnString;
  };
   //      NEW FUNCTION   ******************************************************
  //this function handles title output
  const title = function(input) 
  {
    let returnString = '';
    returnString += input[0].toUpperCase();
    // this loop iterates through the string allowing us to look at each character individually
    for(i=1; i<input.length; i++)
      {
      // this condition deletes the whitespace and capitizes the next letter
      if(input[i] === ' ')
      {
        returnString += ' ';
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
   //      NEW FUNCTION   ******************************************************
  //this function handles vowel output
  const vowel = function(input)
  {
    let returnString = '';
    for(let i=0; i<input.length; i++)
    {
      switch(input[i])
      {
        case 'a':
          returnString += input[i].toUpperCase();
          break;
        case 'e':
          returnString += input[i].toUpperCase();
          break;
        case 'i':
          returnString += input[i].toUpperCase();
          break;
        case 'o':
          returnString += input[i].toUpperCase();
          break;
        case 'u':
          returnString += input[i].toUpperCase();
          break;
        default:
          returnString += input[i];
          break;
      }
    
    }
    return returnString;
  };
   //      NEW FUNCTION   ******************************************************
  //this function handles consonsant output
  const consonant = function(input)
  {
    let returnString = '';
    for(let i =0; i<input.length; i++)
    {
      switch(input[i])
      {
        case 'a':
          returnString += input[i];
          break;
        case 'e':
          returnString += input[i];
          break;
        case 'i':
          returnString += input[i];
          break;
        case 'o':
          returnString += input[i];
          break;
        case 'u':
          returnString += input[i];
          break;
        case ' ':
          returnString += input[i];
          break;
        default:
          returnString += input[i].toUpperCase();
      }
    
    }
    return returnString;  
       
  };
   //      NEW FUNCTION   ******************************************************
  //this function handles upper output
  const upper = function(input)
  {
    let returnString = '';
    for(let i =0; i<input.length; i++)
    {
      returnString += input[i].toUpperCase();
    }
    return returnString;
  };
  
    /*
    this switch calls the previous functions to handle multiple case styles
    where only one case style is to be applied to the input string
    */
    switch(caseStyle)
    {
      case 'camel':
        return camelCase(input);
        break;
      case 'pascal':
        return pascal(input);
        break;
      case 'snake':
        return snake(input);
        break;
      case 'kebab':
        return kebab(input);
        break;
      case 'title':
        return title(input);
        break;
      case 'vowel':
        return vowel(input);
        break;
      case 'consonant':
        return consonant(input);
        break;
      case 'upper':
        return upper(input);
        break;
      default:
        break;
    };
}
/*
this function can return input with single or multiple case styles applied
*/
const makeCase = function(input, caseStyle)
{
  switch(caseStyle)
  {
    case 'camel':
      return makeCaseSingle(input, caseStyle);
      break;
    case 'pascal':
      return makeCaseSingle(input, caseStyle);
      break;
    case 'snake':
      return makeCaseSingle(input, caseStyle);
      break;
    case 'kebab':
      return makeCaseSingle(input,caseStyle);
      break;
    case 'title':
      return makeCaseSingle(input,caseStyle);
      break;
    case 'vowel':
      return makeCaseSingle(input,caseStyle);
      break;
    case 'consonant':
      return makeCaseSingle(input,caseStyle);
      break;
    case 'upper':
      return makeCaseSingle(input,caseStyle);
      break;
    // This is the code that makes multiple case styles possible
    default:
      let returnString = makeCaseSingle(input, caseStyle[0]);
      for(let i=1; i<caseStyle.length; i++)
      {
      returnString = makeCaseSingle(returnString, caseStyle[i]);
      }
      return returnString;
      break;
  };
  
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));