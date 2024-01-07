import {
  ingredients,
  majSelectIngredient,
  selectIngredient,
} from '../utils/majSelectIngredient.js';

export const tags = [];

export function modifFilterIngredients(recipes) {
  const searchFilterIngredientsList = document.querySelectorAll(
    '.search-tag-input-ingredient'
  );

  majSelectIngredient(recipes);

  const listIngredient = document.querySelector('.list-option-tag-ingredients');

  const addedIngredients = new Set();

  function filterData(e) {
    const searchedLetter = e.target.value.toLowerCase();
    const filteredArr = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().startsWith(searchedLetter)
    );

    updateList(filteredArr);
  }

  function updateList(filteredArr) {
    listIngredient.innerHTML = '';
    filteredArr.forEach((ingredient) => {
      const ingredientItem = createIngredientItem(ingredient);
      listIngredient.appendChild(ingredientItem);
      addedIngredients.add(ingredient);
    });
  }

  function createIngredientItem(ingredient) {
    const ingredientItem = document.createElement('li');
    ingredientItem.className = 'ingredient-item';
    ingredientItem.setAttribute('data-ingredient', ingredient.toLowerCase());
    ingredientItem.innerHTML = ingredient.toLowerCase();

    ingredientItem.addEventListener('click', () => {
      selectIngredient(ingredient.toLowerCase());
    });

    return ingredientItem;
  }

  filterData({ target: { value: '' } });

  searchFilterIngredientsList.forEach((searchFilterIngredient) => {
    searchFilterIngredient.addEventListener('input', filterData);
  });
}
