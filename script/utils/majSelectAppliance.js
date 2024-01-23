import { tags } from '../templates/filterIngredients.js';
import { displayTags } from './displayTags.js';
import { updateRecipes } from './updateRecipe.js';

export let appliances = [];

export function majSelectAppliance(recipes) {
  const listAppliance = document.querySelector('.list-option-tag-appliances');

  listAppliance.innerHTML = '';
  const objAppliances = {};
  recipes.forEach((recipe) => {
    objAppliances[recipe.appliance.toLowerCase()] = recipe.appliance;
  });
  const tabAppliance = Object.keys(objAppliances);
  tabAppliance.sort((a, b) => a.localeCompare(b));
  appliances = [...tabAppliance];

  tabAppliance.forEach((appliance) => {
    const applianceItem = document.createElement('li');
    applianceItem.className = 'appliance-item';
    applianceItem.setAttribute('data-appliance', appliance);
    applianceItem.innerHTML = appliance;
    applianceItem.addEventListener('click', () => selectAppliance(appliance));
    listAppliance.appendChild(applianceItem);
  });
}

export function selectAppliance(appliance) {
  const index = tags.findIndex(
    (t) => t.type === 'appliance' && t.value === appliance
  );
  if (index == -1) {
    tags.push({ type: 'appliance', value: appliance });
    updateRecipes();
    displayTags();

    const listAppliances = document.querySelectorAll('.search-list-option');
    listAppliances.forEach((listAppliance) => {
      listAppliance.style.display = 'none';
    });

    const icons = document.querySelectorAll('.fa-solid');
    icons.forEach((icon) => {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    });
  }
}
