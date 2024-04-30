import React, { useState } from 'react';
import testRecipes from "./testRecipes.js";
import { Link } from 'react-router-dom';
import "./filter.css";
import './tests.css';

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
      <div className='white-box'>
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
        <p> 
        <div className="posts-container">
        <h2>Exact Match Recipes:</h2>
        {exclusiveRecipes.map((recipe) => (
        <div key={recipe.id} className="post-item">
            <h3 className="post-title">{recipe.title}</h3>
            <p className="post-content">Ingredients: {recipe.ingredients.join(', ')}</p>
            <p className="post-content">Directions: {recipe.directions}</p>
        </div>
        ))}

      <h2>Recipes that include 1 or more of your ingredients:</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="post-item">
            <h3 className="post-title">{recipe.title}</h3>
            <p className="post-content">Ingredients: {recipe.ingredients.join(', ')}</p>
            <p className="post-content">Directions: {recipe.directions}</p>
        </div>
      ))}
      </div>
          </p>
        </ul>
        <Link to="/">Home</Link>
      </div>
    );
  };

export default Filter;
