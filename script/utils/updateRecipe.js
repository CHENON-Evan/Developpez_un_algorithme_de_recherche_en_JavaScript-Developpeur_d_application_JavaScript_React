import { getRecipes } from '../index.js';
import { searchTowStep } from './searchTwoStep.js';
import { displayRecipes } from './displayRecipes.js';

export async function updateRecipes() {
  const recipes = await getRecipes();
  const filteredRecipe = searchTowStep(recipes);
  displayRecipes(filteredRecipe);

  const recipeCounter = document.getElementById('counter-recipe');
  const visibleRecipes = document.querySelectorAll('.recipe-container');
  const numberOfRecipes = visibleRecipes.length;
  let recipeText;

  if (numberOfRecipes === 0) {
    recipeText = "Aucune recette n'a été trouver";
  } else {
    recipeText = numberOfRecipes === 1 ? 'recette' : 'recettes';
  }
  recipeCounter.textContent =
    numberOfRecipes === 0 ? recipeText : `${numberOfRecipes} ${recipeText}`;
}
