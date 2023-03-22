// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;
// Function to return sphere volume
const sphereVolume = function (radius) {
  let volume = (4/3)*PI*(radius*radius*radius);
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
// Function to return cone volume
const coneVolume = function (radius, height) {
  let volume = (1/3)*PI*(radius*radius) * height;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
// Function to return prism volume
const prismVolume = function (height, width, depth) {
  let volume = (height * width) * depth;
  return volume
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  // I use a 'for' loop here could also use 'for of' loop
  for(let i =0; i< solids.length; i++)
  {
    //I use a 'switch' here could also use 'if' statements
    switch(solids[i].type)
    {
      case 'sphere' :
        total += sphereVolume(solids[i].radius);
        break;
      case 'cone' :
        total += coneVolume(solids[i].radius, solids[i].height);
        break;
      case 'prism':
        total += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
        break;
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
