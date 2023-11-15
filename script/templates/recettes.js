function recettesTemplate(data) {
  const {
    id,
    image,
    name,
    servings,
    ingredients,
    ingredient,
    quantity,
    unit,
    time,
    description,
    appliance,
    ustensils,
  } = data;

  const imageRecette = `./assets/recettes/${data.image}`;

  function getRecetteCardDOM() {
    console.log(ingredients);
    console.log(ustensils);
    const article = document.createElement('article');
    const recetteImageTime = document.createElement('div');
    recetteImageTime.className = 'recette-image-time';
    const recetteImage = document.createElement('img');
    recetteImage.className = 'recette-image';
    const recetteTime = document.createElement('p');
    recetteTime.className = 'recette-time';
    const recetteTitle = document.createElement('h3');
    recetteTitle.className = 'recette-title';
    const sectionRecette = document.createElement('section');
    sectionRecette.className = 'recette-section';
    const recette = document.createElement('h3');
    const recetteDiscription = document.createElement('p');
    recetteDiscription.className = 'recette-description';
    const sectionIngredients = document.createElement('section');
    sectionIngredients.className = 'ingredients-section';
    const recetteIngredients = document.createElement('h3');
    recetteIngredients.className = 'recette-ingredients';
    const divIngredients = document.createElement('div');
    divIngredients.className = 'ingredients';

    recetteImage.setAttribute('src', imageRecette);
    recetteImage.setAttribute('alt', name);
    recetteTime.textContent = time + 'min';
    recetteTitle.textContent = name;
    recette.textContent = 'RECETTE';
    recetteDiscription.textContent = description;
    recetteIngredients.textContent = 'INGRÉDIENTS';

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

    article.appendChild(recetteImageTime);
    recetteImageTime.appendChild(recetteImage);
    recetteImageTime.appendChild(recetteTime);
    article.appendChild(recetteTitle);
    article.appendChild(sectionRecette);
    sectionRecette.appendChild(recette);
    sectionRecette.appendChild(recetteDiscription);
    article.appendChild(sectionIngredients);
    sectionIngredients.appendChild(recetteIngredients);
    sectionIngredients.appendChild(divIngredients);

    return article;
  }

  return {
    getRecetteCardDOM,
  };
}
