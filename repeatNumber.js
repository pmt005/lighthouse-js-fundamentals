/* Create a function that takes in an array of arrays. Each main array element 
an array of two numbers the first a value to repeat and the second the amount
of times to repeat the first value */
const repeatNumbers = function(data) 
{
  let returnString = '';
  // this is a loop to iterate through the array of arrays
  for (let i = 0; i< data.length; i ++)
  {
    /* since we know the elements of this "sub" array are only two we don't need to
    iterate through the array, rather this loop is to repeat the first value into
    returnString the appropirate amount of times as declared by the second value in
    the array*/ 
    for (let x = 0; x<data[i][1]; x++)
    {
      returnString += data[i][0];
    }
    // this if statement places a comma BETWEEN output segments
    if(i !== data.length-1)
    {
       returnString += ', ';
    }
    
  }
  return returnString;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));