export function filterByTag(recipes, tag) {
  const recipeFiltered = [];

  recipes.forEach((recipe) => {
    if (tag.type == 'ingredient') {
      if (
        recipe.ingredients.some(
          (ingredient) => ingredient.ingredient.toLowerCase() === tag.value
        )
      ) {
        recipeFiltered.push(recipe);
      }
    } else if (tag.type == 'appliance') {
      if (tag.value === recipe.appliance.toLowerCase()) {
        recipeFiltered.push(recipe);
      }
    } else {
      if (
        recipe.ustensils.some(
          (ustensil) => ustensil.toLowerCase() === tag.value
        )
      ) {
        recipeFiltered.push(recipe);
      }
    }
  });

  return [...recipeFiltered];
}
