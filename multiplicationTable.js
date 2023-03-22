/* Create a function that takes in a number as input data. This is the highest
value in a multiplication table. The table is generated as the multiplication 
values from 1 to the provided input number*/

const multiplicationTable = function(maxValue) {
  let mTable ='';
  // This first loop iterates through 1 to the input number
  for(let i=1; i <= maxValue; i++)
  {
    // This next loop iterates through 1 to the input number while multiplying against the
    // current value in the main loop
    for(let x=1; x <= maxValue; x++)
    {
      mTable += (x*i) + ' ';
    }
    // This puts a newline in the output between outer loop iterations
    mTable += '\n';
  }
  return mTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));