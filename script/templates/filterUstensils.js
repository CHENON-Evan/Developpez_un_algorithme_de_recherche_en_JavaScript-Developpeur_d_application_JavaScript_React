import {
  ustensils,
  majSelectUstensil,
  selectUstensil,
} from '../utils/majSelecteUstensil.js';

export function modifFilterUstensils(recipes) {
  const searchFilterUstensilsList = document.querySelectorAll(
    '.search-tag-input-ustensils'
  );

  majSelectUstensil(recipes);

  const listUstensil = document.querySelector('.list-option-tag-ustensils');

  const addedUstensils = new Set();

  function filterData(e) {
    const searchedLetter = e.target.value.toLowerCase();
    const filteredArr = ustensils.filter((ustensil) =>
      ustensil.toLowerCase().startsWith(searchedLetter)
    );

    updateList(filteredArr);
  }

  function updateList(filteredArr) {
    listUstensil.innerHTML = '';
    filteredArr.forEach((ustensil) => {
      const ustensilItem = createUstensilItem(ustensil);
      listUstensil.appendChild(ustensilItem);
      addedUstensils.add(ustensil);
    });
  }

  function createUstensilItem(ustensil) {
    const ustensilItem = document.createElement('li');
    ustensilItem.className = 'ustensil-item';
    ustensilItem.setAttribute('data-ustensil', ustensil.toLowerCase());
    ustensilItem.innerHTML = ustensil.toLowerCase();

    ustensilItem.addEventListener('click', () =>
      selectUstensil(ustensil.toLowerCase())
    );

    return ustensilItem;
  }

  filterData({ target: { value: '' } });

  searchFilterUstensilsList.forEach((searchFilterUstensils) => {
    searchFilterUstensils.addEventListener('input', filterData);
  });
}
