/*
Take in an array of instructors and return a new object that
creates an array of instructors associated with their respective
course
*/
const organizeInstructors = function(instructors) {
  let organized = {};
  //this loop and switch populates the organized object with the courses in use
  for (let instructor of instructors)
  {
    switch(instructor.course)
    {
      case 'iOS':
        organized.iOS = [];
        break;
      case 'Web':
        organized.Web = [];
        break;
      case 'Blockchain':
        organized.Blockchain = [];
        break;
      default:
        console.log('unknown course');
    }
  }
  //this loop pushes instructors names to an array corresponding with their course taught
  for (let instructor of instructors)
  {
    switch(instructor.course)
    {
      case 'iOS':
        organized.iOS.push(instructor.name);
        break;
      case 'Web':
        organized.Web.push(instructor.name);
        break;
      case 'Blockchain':
        organized.Blockchain.push(instructor.name);
        break;
      default:
        console.log('unknown course');
    }
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));