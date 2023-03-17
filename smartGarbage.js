var binExample = {
  waste: 4,
  recycling: 2,
  compost: 1
}


const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
  case "waste":
    bins.waste++;
    break;
  case "recycling":
    bins.recycling++;
    break;
  case "compost":
    bins.compost++;
    break;
  default:
    return bins;
  }
  return bins;

}

smartGarbage('recycling', binExample);
console.log(binExample);