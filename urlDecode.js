const urlDecode = function(text) {
  returnObject = {};
  let temp = '';
  let tempArray = [];
  let tempValueArray = [];
  
  for(let i=0; i<text.length; i++)
  {
    if(text[i] === '=')
    {
      tempArray.push(temp);
      while(temp.length >0)
      {
        temp = temp.slice(1);
      };
    }
    else if(text[i] === '&')
    {
      tempValueArray.push(temp)
      while(temp.length >0)
      {
        temp = temp.slice(1);
      };
    }
    else if(text[i] === '%')
    {
      temp += ' ';
      i += 2;
    }
    else if(i === (text.length-1))
    {
      temp += text[i];
      tempValueArray.push(temp);
    }
    else
    {
      temp += text[i]
    }

  }
  for(let i =0; i<tempArray.length; i++)
  {
    returnObject[tempArray[i]] = tempValueArray[i];
  }
  return returnObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);