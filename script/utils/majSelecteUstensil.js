import { tags } from '../templates/filterIngredients.js';
import { displayTags } from './displayTags.js';
import { updateRecipes } from './updateRecipe.js';

export let ustensils = [];

export function majSelectUstensil(recipes) {
  const listUstensil = document.querySelector('.list-option-tag-ustensils');

  listUstensil.innerHTML = '';
  const objUstensils = {};
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      objUstensils[ustensil.toLowerCase()] = ustensil;
    });
  });

  const tabUstensil = Object.keys(objUstensils);
  tabUstensil.sort((a, b) => a.localeCompare(b));
  ustensils = [...tabUstensil];

  tabUstensil.forEach((ustensil) => {
    const ustensilItem = document.createElement('li');
    ustensilItem.className = 'ustensil-item';
    ustensilItem.setAttribute('data-ustensil', ustensil);
    ustensilItem.innerHTML = ustensil;
    ustensilItem.addEventListener('click', () => selectUstensil(ustensil));
    listUstensil.appendChild(ustensilItem);
  });
}

export function selectUstensil(ustensil) {
  const index = tags.findIndex(
    (t) => t.type === 'ustensil' && t.value === ustensil
  );
  if (index === -1) {
    tags.push({ type: 'ustensil', value: ustensil });
    updateRecipes();
    displayTags();

    const listIngredients = document.querySelectorAll('.search-list-option');
    listIngredients.forEach((listIngredient) => {
      listIngredient.style.display = 'none';
    });

    const icons = document.querySelectorAll('.fa-solid');
    icons.forEach((icon) => {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    });
  }
}
