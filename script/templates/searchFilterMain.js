import { displayRecipes } from '../utils/displayRecipes.js';
import { searchTowStep } from '../utils/searchTwoStep.js';

export function modifFilterSearchMain(recipes) {
  const searchMain = document.querySelector('.search-input-main');

  searchMain.addEventListener('input', function () {
    const filteredRecipe = searchTowStep(recipes);
    displayRecipes(filteredRecipe);
  });
}
