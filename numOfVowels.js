const numberOfVowels = function(string) {
  // Put your solution here
  let number = 0;
  for (let i=0; i < string.length; i++){
    switch(string[i]){
      case 'a':
        number += 1;
        break;
      case 'e':
        number += 1;
        break;
      case 'i':
        number += 1;
        break;
      case 'o':
        number += 1;
        break;
      case 'u':
        number += 1;
        break;
      case 'A':
        number += 1;
        break;
      case 'E':
        number += 1;
        break;
      case 'O':
        number += 1;
        break;
      case 'U':
        number += 1;
        break;
      default:
        break;
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));