function howManyHundreds(x)
{
  let remainder = (x % 100);
  x = (x-remainder);
  return (x/100);
}
console.log(howManyHundreds(1034));