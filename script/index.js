import { modifFilterIngredients } from './templates/filterIngredients.js';
import { modifFilterAppliance } from './templates/filterAppliance.js';
import { modifFilterUstensils } from './templates/filterUstensils.js';
import { recipesTemplate } from './templates/recipes.js';
import { modifFilterSearchMain } from './templates/searchFilterMain.js';
import { displayFilterDropdown } from './utils/filterDropdown.js';

export async function getRecipes() {
  const reponse = await fetch('./data/recipes.json');
  const data = await reponse.json();
  return data.recipes;
}

async function displayData(recipes) {
  const recipesSection = document.querySelector('.recipes-card');
  recipes.forEach((recipe) => {
    const recipeModel = recipesTemplate(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  const recipes = await getRecipes();
  modifFilterIngredients(recipes);
  modifFilterAppliance(recipes);
  modifFilterUstensils(recipes);
  modifFilterSearchMain(recipes);
  displayFilterDropdown();
  displayData(recipes);
}

init();
