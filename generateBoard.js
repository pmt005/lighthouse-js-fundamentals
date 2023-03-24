const generateBoard = function(whiteQueen, blackQueen)
{
  board = [];
  //this loop creates an empty 8x8 board
  for(let i=0;i<8;i++)
  {
    board[i] = [];
    for(let x=0;x<8;x++)
    {
      board[i].push(0);
    }
  }
  //these lines place the queens
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  
  return board;
}

const queenThreat = function(inputBoard)
{
  let queenLocations = [];
  /*
  this loop captures both queens locations index 0,1 are the first queen
  while 2,3 are the second queen
  */
  for(let i = 0;i<inputBoard.length;i++)
  {
    for(let x = 0; x<inputBoard[i].length;x++)
    {
      if(inputBoard[i][x] === 1)
      {
        queenLocations.push(i);
        queenLocations.push(x);
      
      }
    }
  }
  // this will become the diagonal strike possibilities of the first queen
  let diagonals = [];
  
  //this loop finds the diagonals that are DOWN AND RIGHT of the first queen
  let x = queenLocations[1] + 1; // initiate to the right
  for(let i=(queenLocations[0] + 1);i<inputBoard.length;i++)
  {
      
      if(x<inputBoard[i].length)
      {
        let temp = [i,x];
        diagonals.push(temp);
        x++;
      }
      else
      {
        break;
      }
  }
  //this loop finds the diagonals that are UP AND RIGHT of the first queen
  x = queenLocations[1] + 1; // initiate to the right
  for(let i=(queenLocations[0] - 1);i>=0;i--)
  {
      
      if(x<inputBoard[i].length)
      {
        let temp = [i,x];
        diagonals.push(temp);
        x++;
      }
      else
      {
        break;
      }
  }
  // this loop finds the diagonals that are UP AND LEFT of the first queen
  x = queenLocations[1] - 1; // initiate to the left
  for(let i=(queenLocations[0] - 1);i>=0;i--)
  {
      
      if(x>=0)
      {
        let temp = [i,x];
        diagonals.push(temp);
        x--;
      }
      else
      {
        break;
      }
  }
  // this loop finds the diagonals that are DOWN AND LEFT of the first queen
  x = queenLocations[1] - 1;
  for(let i=(queenLocations[0] + 1);i<inputBoard.length;i++)
  {
      
      if(x>=0)
      {
        let temp = [i,x];
        diagonals.push(temp);
        x--;
      }
      else
      {
        break;
      }
  }

  //this will determine if a vertical strike is possible
  if(queenLocations[0]=== queenLocations[2])
  {
    return true;
  }
  //this will determine if a horizontal strike is possible
  else if(queenLocations[1]=== queenLocations[3])
  {
    return true;
  }
  //this will determin if a diagonal strike is possible
  for(let i=0; i<diagonals.length; i++)
  {
    if((queenLocations[2]===diagonals[i][0])&& queenLocations[3]===diagonals[i][1])
    return true;
  }
 
return false;
}
/* 
test input 1 /////////////////////////////////////////////
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/

/* 
test input //////////////////////////////////////////////
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen,blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/