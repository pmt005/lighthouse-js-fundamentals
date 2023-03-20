const urlEncode = function(text) {
  // Put your solution here
  let urlString = '';
  let trimString = text.trim();
  //console.log(trimString);

  for(i=0; i<trimString.length; i++)
    {
    if(trimString[i] === ' ')
    {
      urlString += '%20';
    }
    else
    {
      urlString += trimString[i];
    }
  }
  return urlString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));