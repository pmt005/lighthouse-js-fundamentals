// This function checks the bakery for a single ingredient
const ingredientCheck = function(bakery, ingredient){
 for(let i =0; i<bakery.length; i++)
 {
  if(bakery[i] === ingredient)
  {
    return true;
  }
 }
 return false;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // This will loop through all the recipes
  for (let i = 0; i < recipes.length; i++)
  {
    // this is the condition if bakeryA has ingredient 0 and bakeryB has ingredient 1
    if(ingredientCheck(bakeryA , recipes[i].ingredients[0]) && ingredientCheck(bakeryB, recipes[i].ingredients[1]))
    {
      return recipes[i].name;
    }
    // this is the condition if bakeryA has ingredient 1 and bakeryB has ingredient 0
    else if (ingredientCheck(bakeryA , recipes[i].ingredients[1]) && ingredientCheck(bakeryB, recipes[i].ingredients[0]))
    {
      return recipes[i].name;
    }
  }
  return 'No recipes that work';
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));