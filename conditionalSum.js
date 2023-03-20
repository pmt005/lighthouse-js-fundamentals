const conditionalSum = function(values, condition) 
{
  switch (condition){
    case 'even':
      let sumEven = 0;
      for(value of values)
      {
         if ((value % 2) === 0)
         {
          sumEven += value;
         }
      }
      return sumEven;
      break;
    case 'odd':
    let sumOdd = 0;
      for(value of values)
      {
         if ((value % 2) !== 0)
         {
          sumOdd += value;
         }
      }
      return sumOdd;
      break;
      }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
