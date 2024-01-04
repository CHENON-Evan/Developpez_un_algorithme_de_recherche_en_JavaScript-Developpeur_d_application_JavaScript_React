import { filterByInput } from './filterByInput.js';
import { filterByTag } from './filterByTag.js';
import { tags } from '../templates/filterIngredients.js';
import { majSelectIngredient } from './majSelectIngredient.js';
import { majSelectAppliance } from './majSelectAppliance.js';
import { majSelectUstensil } from './majSelecteUstensil.js';

export function searchTowStep(recipes) {
  const input = document.querySelector('.search-input-main');
  const recipeInputFiltered = filterByInput(
    recipes,
    input.value.trim().toLowerCase()
  );

  let recipeTagFiltered = [...recipeInputFiltered];

  tags.forEach((tag) => {
    recipeTagFiltered = filterByTag(recipeTagFiltered, tag);
  });

  majSelectIngredient(recipeTagFiltered);
  majSelectAppliance(recipeTagFiltered);
  majSelectUstensil(recipeTagFiltered);
  return [...recipeTagFiltered];
}
