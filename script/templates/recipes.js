export function recipesTemplate(data) {
  const {
    id,
    image,
    name,
    servings,
    ingredients,
    ingredient,
    time,
    description,
  } = data;

  const imageRecipe = `./assets/recipes/${data.image}`;

  function getRecipeCardDOM() {
    const article = document.createElement('article');
    article.classList.add('recipe-container');
    article.id = `recipe-${id}`;
    const recipeImageTime = document.createElement('div');
    recipeImageTime.className = 'recipe-image-time';
    const recipeImage = document.createElement('img');
    recipeImage.className = 'recipe-image';
    const recipeTime = document.createElement('p');
    recipeTime.className = 'recipe-time';
    const recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    const sectionRecipe = document.createElement('section');
    sectionRecipe.className = 'recipe-section';
    const recipe = document.createElement('h3');
    const recipeDiscription = document.createElement('p');
    recipeDiscription.className = 'recipe-description';
    const sectionIngredients = document.createElement('section');
    sectionIngredients.className = 'ingredients-section';
    const recipeIngredients = document.createElement('h3');
    recipeIngredients.className = 'recipe-ingredients';
    const divIngredients = document.createElement('div');
    divIngredients.className = 'ingredients';

    recipeImage.setAttribute('src', imageRecipe);
    recipeImage.setAttribute('alt', name);
    recipeTime.textContent = time + 'min';
    recipeTitle.textContent = name;
    recipe.textContent = 'RECETTE';
    recipeDiscription.textContent = description;
    recipeIngredients.textContent = 'INGRÉDIENTS';

    ingredients.forEach((ingredient) => {
      const divIngredient = document.createElement('div');
      divIngredient.className = 'ingredient';
      const nameIngredient = document.createElement('h3');
      nameIngredient.className = 'name-ingredient';
      const quantite = document.createElement('p');
      quantite.className = 'quantite';

      nameIngredient.textContent = ingredient.ingredient;
      quantite.textContent = `${ingredient.quantity || ''} ${
        ingredient.unit || ''
      }`;

      divIngredients.appendChild(divIngredient);
      divIngredient.appendChild(nameIngredient);
      divIngredient.appendChild(quantite);
    });

    article.appendChild(recipeImageTime);
    recipeImageTime.appendChild(recipeImage);
    recipeImageTime.appendChild(recipeTime);
    article.appendChild(recipeTitle);
    article.appendChild(sectionRecipe);
    sectionRecipe.appendChild(recipe);
    sectionRecipe.appendChild(recipeDiscription);
    article.appendChild(sectionIngredients);
    sectionIngredients.appendChild(recipeIngredients);
    sectionIngredients.appendChild(divIngredients);

    return article;
  }

  return {
    getRecipeCardDOM,
  };
}
