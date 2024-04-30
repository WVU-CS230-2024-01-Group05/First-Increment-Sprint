import React, { useState } from 'react';
import testRecipes from "./testRecipes.js";
import { Link } from 'react-router-dom';
import "./filter.css";

const Filter = () => {
    const [searchInput, setSearchInput] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [exclusiveRecipes, setExclusiveRecipes] = useState([]);
  
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
      const filtered2 = testRecipes.filter((recipe) =>
        recipe.ingredients.every((ingredient) =>
          ingredients.includes(ingredient.toLowerCase())
        )
      );
      setFilteredRecipes(filtered);
      setExclusiveRecipes(filtered2);
    };
  
    return (
      <div>
        <div>
          <input
            type="text" 
            placeholder="Please enter your ingredients"
            value={searchInput}
            className="filterSearchBar"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="filterButton" onClick={AddIngredient}>Click to Add Ingredient</button>
        </div>
        <div>
          {ingredients.map((ingredient) => (
            <div key={ingredient}>
              {ingredient}
              <button className="filterButton" onClick={() => RemoveIngredient(ingredient)}>X</button>
            </div>
          ))}
        </div>
        <button className="filterButton" onClick={Search}>Search Recipes</button>
        <ul>
        <p> </p>
        {exclusiveRecipes.map((recipe) => (
          <><h2> Recipes Exclusive to your ingredients: </h2>
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Directions: {recipe.directions}</p>
          </li></>
          ))}
          <p> </p>
          {filteredRecipes.map((recipe) => (
              <><h2> Recipes that include your ingredients: </h2><li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Directions: {recipe.directions}</p>
            </li></>
          ))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    );
  };

export default Filter;
