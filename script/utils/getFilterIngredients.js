export function getFilterIngredients(recipes) {
  const ingredients = {};

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients[ingredient.ingredient] = ingredient.ingredient;
    });
  });

  return Object.keys(ingredients).sort((a, b) => a.localeCompare(b));
}
