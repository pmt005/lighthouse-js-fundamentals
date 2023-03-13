// test input
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ;

let finalPosition = function(paradeMoves)
{
  let position = [0,0];
  for(const paradeMove of paradeMoves)
  {
    switch (paradeMove)
    {
      case 'north':
        position[1]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'east':
        position[0]++;
        break;
      case 'west':
        position[0]--;
        break;
    }
  }
  return position;

}
console.log(finalPosition(moves));