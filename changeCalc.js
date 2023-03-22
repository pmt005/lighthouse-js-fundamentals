const calculateChange = function(total, cash) 
{
  let remainder = cash - total;
  /* 
  this array represents bill/coin quantities in descending order
  change[1] = twentyDollar
  change[3] = tenDollar
  change[5] = fiveDollar
  change[7] = twoDollar
  change[9] = oneDollar
  change[11] = quarter
  change[13] = dime
  change[15] = nickel
  change[17] = penny
  */
  let change = [' twentyDollar: ',0,' tenDollar: ',0,' fiveDollar: ',0,
  ' twoDollar: ',0, ' oneDollar: ',0, ' quarter: ',0, ' dime: ',0, ' nickel: ',0,
  ' penny: ',0];

  do
  {
      if ((remainder - 2000) >= 0)
      {
        remainder -= remainder - 2000;
        change[1]++;
      }
      else if ((remainder - 1000) >= 0 )
      {
        remainder -= 1000;
        change[3]++;
      }
      else if ((remainder - 500) >= 0)
      {
        remainder -= 500;
        change[5]++;
      }
      else if ((remainder - 200) >= 0)
      {
        remainder -= 200;
        change[7]++;
      }
      else if ((remainder - 100) >= 0)
      {
        remainder -= 100;
        change[9]++;
      }
      else if ((remainder - 25) >= 0)
      {
        remainder -= 25;
        change[11]++;
      }
      else if ((remainder - 10) >= 0)
      {
        remainder -= 10;
        change[13]++;
      }
      else if (( remainder - 5) >= 0)
      {
        remainder -= 5;
        change[15]++;
      }
      else if (( remainder - 1) >= 0)
      {
        remainder -= 1;
        change[17]++;
      }

   }
   while (remainder > 0);
   
   
   let returnString = '{ ';
   
   for(let i = 1; i < change.length; i += 2)
   { 
    // this adds the amount of current denomination
    if(change[i] > 0)
    {
      returnString += change[i-1] + change[i];
    }
    // this adds the correct punction BETWEEN two denominations
    if((change[i+2] !==0) && returnString.length > 2 && (change[i+2] !== undefined))
    {
      returnString += ',';
    }

   }
   //this adds curly bracket to the end
   if(returnString.length > 2)
   {
    returnString += ' }';
    return returnString;
   }
   else
   {
    return 'Bad input.';
   }
   
 };

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
