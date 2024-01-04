import { tags } from '../templates/filterIngredients.js';
import { updateRecipes } from './updateRecipe.js';

export function displayTags() {
  const tagList = document.querySelector('.selected-item');
  tagList.innerHTML = '';
  tags.forEach((tag) => {
    const tagElem = createSelectedItemText(tag);
    tagList.appendChild(tagElem);
  });
}

function createSelectedItemText(tag) {
  const selectedItemText = document.createElement('p');
  selectedItemText.className = `selected-${tag.type}-item-text`;
  selectedItemText.setAttribute(`data-${tag.type}`, tag.value);
  selectedItemText.textContent = `${tag.value} `;

  const removeParagraphButton = document.createElement('i');
  removeParagraphButton.className = 'fa-solid fa-xmark';

  selectedItemText.addEventListener('click', () =>
    handleRemoveParagraphButtonClick(tag)
  );

  selectedItemText.appendChild(removeParagraphButton);

  return selectedItemText;
}

function handleRemoveParagraphButtonClick(tag) {
  const index = tags.findIndex(
    (t) => t.type === tag.type && t.value === tag.value
  );
  if (index != -1) {
    tags.splice(index, 1);
  }

  updateRecipes();
  displayTags();
}
