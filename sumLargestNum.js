/* Create a function that takes in an array and returns the sum
of the two largest numbers in the array*/

const sumLargestNumbers = function(testArray)
{
  let firstNum;
  let secondNum;
  if (testArray[0] > testArray[1])
        {
            firstNum = testArray[0];
            secondNum = testArray[1];
        }
  else
        {
            firstNum = testArray[1];
            secondNum = testArray[0];
        }
  for (let i = 2; i < testArray.length; i ++)
        {
            if (testArray[i] > firstNum)
            {
                secondNum = firstNum;
                firstNum = testArray[i];
            }
            else if (testArray[i] > secondNum && testArray[i] <= firstNum)
            {
                secondNum = testArray[i];
            }
        }
return firstNum + secondNum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));