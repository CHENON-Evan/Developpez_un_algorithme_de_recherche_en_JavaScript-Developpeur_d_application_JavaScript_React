import { recipesTemplate } from '../templates/recipes.js';

export function displayRecipes(recipes) {
  const recipeDisplay = document.querySelector('.recipes-card');

  recipeDisplay.innerHTML = '';
  recipes.forEach((recipe) => {
    const template = recipesTemplate(recipe);

    const card = template.getRecipeCardDOM();
    recipeDisplay.appendChild(card);
  });
}
