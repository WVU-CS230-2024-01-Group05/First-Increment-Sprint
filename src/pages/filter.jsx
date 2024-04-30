import React, { useState } from 'react';
import testRecipes from "./testRecipes.js";
import { Link } from 'react-router-dom';

const Filter = () => {
    const [searchInput, setSearchInput] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
  
    const AddIngredient = () => {
      const input = searchInput.trim();
      if( input !== '' && !ingredients.includes(input)){
        setIngredients(ingredients.concat(input));
        setSearchInput('');
      }
    };
  
    const RemoveIngredient = (ingredientToRemove) => {
      const newList = ingredients.filter(
        (ingredient) => ingredient !== ingredientToRemove
      );
      setIngredients(newList);
    };

  
    const Search = () => {
      const filtered = testRecipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredients.includes(ingredient.toLowerCase())
        )
      );
      setFilteredRecipes(filtered);
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Please enter your ingredients"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={AddIngredient}>Click to Add Ingredient</button>
        </div>
        <div>
          {ingredients.map((ingredient) => (
            <div key={ingredient}>
              {ingredient}
              <button onClick={() => RemoveIngredient(ingredient)}>X</button>
            </div>
          ))}
        </div>
        <button onClick={Search}>Search Recipes</button>
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </li>
          ))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    );
  };

export default Filter;
