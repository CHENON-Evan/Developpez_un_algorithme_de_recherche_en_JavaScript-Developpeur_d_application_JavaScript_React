import { tags } from '../templates/filterIngredients.js';
import { displayTags } from './displayTags.js';
import { updateRecipes } from './updateRecipe.js';

export let ingredients = [];

export function majSelectIngredient(recipes) {
  const listIngredient = document.querySelector('.list-option-tag-ingredients');

  listIngredient.innerHTML = '';
  const objIngredient = {};
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      objIngredient[ingredient.ingredient.toLowerCase()] =
        ingredient.ingredient;
    });
  });

  const tabIngredient = Object.keys(objIngredient);
  tabIngredient.sort((a, b) => a.localeCompare(b));
  ingredients = [...tabIngredient];

  tabIngredient.forEach((ingredient) => {
    const ingredientItem = document.createElement('li');
    ingredientItem.className = 'ingredient-item';
    ingredientItem.setAttribute('data-ingredient', ingredient);
    ingredientItem.innerHTML = ingredient;
    ingredientItem.addEventListener('click', () => {
      selectIngredient(ingredient);
    });
    listIngredient.appendChild(ingredientItem);
  });
}

export function selectIngredient(ingredient) {
  const index = tags.findIndex(
    (t) => t.type === 'ingredient' && t.value === ingredient
  );
  if (index == -1) {
    tags.push({ type: 'ingredient', value: ingredient });
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
