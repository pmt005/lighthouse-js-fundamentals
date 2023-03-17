
let array = [];

for(let i = 0; i< 100; i++){
  array.push(i);
}
//console.log(array);



/*
function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let word = "";
    if ((i % multiples[0] === 0) || i % multiples[1] === 0) {
      word += words[0]+words[1];
      console.log(word);
    }
    else if (i % multiples[0] === 0) {
      word += words[0];
      console.log(word);
    }
    else if (i % multiples[1] === 0) {
      word += words[1];
      console.log(word);
    }
    else {
    console.log(i);
    }
  }
}
*/
const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let word = "";
    if (i % multiples[0] === 0) {
      word += words[0];
    }
    if (i % multiples[1] === 0) {
      word += words[1];
    }
    //if word is empty then it is false so the logic or will return i;
    console.log(word || i);
  }
}
loopyLighthouse([15,91],[2,5],['batty','beacon']);
