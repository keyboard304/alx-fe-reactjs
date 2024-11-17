import React from 'react';
import useRecipeStore from '../recipeStore'; // remove curly braces for default import
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Use 'recipes' directly

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

