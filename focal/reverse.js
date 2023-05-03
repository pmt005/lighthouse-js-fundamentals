let input = process.argv.slice(2);
const reverse = function(original) {
  original = original.reverse();
  let returnString = original.join();
  return returnString;
};
if (input)
  console.log(reverse(input));

//original.split('').reverse().join('');