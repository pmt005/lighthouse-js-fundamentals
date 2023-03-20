const checkAir = function (samples, threshold) {
  // c represents the clean sample counter
  let c=0;
  // p represents the dirty sample counter
  let p=0;

  for(let i=0; i<samples.length; i++)
  {
    if(samples[i] === 'clean')
    {
      c++;
    }
    else if(samples[i] === 'dirty'){
      p++;
    }
  }
  let decimalDirty = (p / samples.length);
  if(decimalDirty > threshold)
  {
    return 'Polluted';
  }
  else
  {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))