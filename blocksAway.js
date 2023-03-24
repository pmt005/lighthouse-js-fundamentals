const blocksAway = function(input)
{
  let orientation = 'north';
  let displacement = {
    east: 0,
    north: 0,

  }
  //this loop iterates through the input array
  for(let i=0;i<input.length;i+=2)
  {
    //this swith updates the orientation
    switch (orientation)
    {
      case 'north':
        if(input[i] === 'right')
        {
          orientation = 'east';
        }
        else if(input[i] === 'left')
        {
          orientation = 'west';
        }
        break;
      case 'east':
        if(input[i] === 'right')
        {
          orientation = 'south';
        }
        else if(input[i] === 'left')
        {
          orientation = 'north';
        }
        break;
      case 'south':
        if(input[i] === 'right')
        {
          orientation = 'west';
        }
        else if(input[i] === 'left')
        {
          orientation = 'east';
        }
        break;
      case 'west':
        if(input[i] === 'right')
        {
          orientation = 'north';
        }
        else if(input[i] === 'left')
        {
          orientation = 'south';
        }
        break;
    }
    //this switch updates the north and east displacement
    switch(orientation)
    {
      case 'north':
        displacement.north += input[i+1];
        break;
      case 'east':
        displacement.east += input[i+1];
        break;
      case 'south':
        displacement.north -= input[i+1];
        break;
      case 'west':
        displacement.east -= input[i+1];
        break;
    }
  }
  return displacement;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));