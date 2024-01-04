export function getFilterUstensils(recipes) {
  const ustensils = {};

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils[ustensil] = ustensil;
    });
  });

  return Object.keys(ustensils).sort((a, b) => a.localeCompare(b));
}
