import { filterByInput } from './filterByInput.js';
import { filterByTag } from './filterByTag.js';
import { tags } from '../templates/filterIngredients.js';
import { majSelectIngredient } from './majSelectIngredient.js';
import { majSelectAppliance } from './majSelectAppliance.js';
import { majSelectUstensil } from './majSelecteUstensil.js';

export function searchTowStep(recipes) {
  const input = document.querySelector('.search-input-main');
  const searchElems = input.value.trim().split(' ');
  console.log(searchElems);
  let recipeInputFiltered = [...recipes];
  searchElems.forEach((searchElem) => {
    recipeInputFiltered = filterByInput(
      recipeInputFiltered,
      searchElem.toLowerCase()
    );
  });

  let recipeTagFiltered = [...recipeInputFiltered];

  tags.forEach((tag) => {
    recipeTagFiltered = filterByTag(recipeTagFiltered, tag);
  });

  majSelectIngredient(recipeTagFiltered);
  majSelectAppliance(recipeTagFiltered);
  majSelectUstensil(recipeTagFiltered);
  return [...recipeTagFiltered];
}
