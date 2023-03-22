/* We will be given a date as a string (not a Date object).
The date will always be formatted as YYYY/MM/DD.
We will have to parse the given string and produce a human readable date.*/
const talkingCalendar = function(date) {
  let year = '';
  let month = '';
  month = date[5] + date[6];
  let day = '';
  day = date[8] + date[9];
  let returnString = '';

  for(let i=0; i< 4; i++)
  {
    year += date[i];
  }
//switch to convert 12 month to written month
  switch(month)
  {
    case '01':
      returnString += 'January ';
      break;
    case '02':
      returnString += 'February ';
      break;
    case '03':
      returnString += 'March ';
      break;
    case '04':
      returnString += 'April ';
      break;
    case '05':
      returnString += 'May ';
      break;
    case '06':
      returnString += 'June ';
      break;
    case '07':
      returnString += 'July ';
      break;
    case '08':
      returnString += 'August ';
      break;
    case '09':
      returnString += 'September ';
      break;
    case '10':
      returnString += 'October ';
      break;
    case '11':
      returnString += 'November ';
      break;
    case '12':
      returnString += 'December ';
      break;
  }

  // switch to add the correct suffix to the day as well as punctuation.
  switch(day)
  {
    case '01':
      returnString += '1st, ';
      break;
    case '02':
      returnString += '2nd, ';
      break;
    case '03':
      returnString += '3rd, ';
      break;
    case '04':
      returnString += '4th, ';
      break;
    case '05':
      returnString += '5th, ';
      break;
    case '06':
      returnString += '6th' ;
      break;
    case '07':
      returnString += '7th, ';
      break;
    case '08':
      returnString += '8th, ';
      break;
    case '09':
      returnString += '9th, ' ;
      break;
    case '21':
      returnString += '21st, ';
      break;
    case '22':
      returnString += '22nd, ';
      break;
    case '23':
      returnString += '23rd, ';
      break;
    case '30':
      returnString += '30th, ';
      break;
    case '31':
      returnString += '31st, ';
      break;
    default:
      returnString += day+'th, ';
      break;

  }

 returnString += year;
 return returnString;



  

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));