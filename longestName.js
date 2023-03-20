

const instructorWithLongestName = function(instructors) {
  let instructorLongName = instructors[0];
  for(let i=1; i<instructors.length; i++){
      if(instructors[i].name.length > instructorLongName.name.length){
        instructorLongName = instructors[i];
      };
  };
  return instructorLongName;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));