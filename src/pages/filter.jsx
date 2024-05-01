import React, { useState } from 'react';
import testRecipes from "./testRecipes.js";
import { Link } from 'react-router-dom';
import "./filter.css";

//creates the arrays for the input ingredients and both filtered and exclusive recipes
const Filter = () => { 
    const [searchInput, setSearchInput] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [exclusiveRecipes, setExclusiveRecipes] = useState([]);
  
    //adds ingredients inputted into the ingredients array
    const AddIngredient = () => {
      const input = searchInput.trim();
      if( input !== '' && !ingredients.includes(input)){
        setIngredients(ingredients.concat(input));
        setSearchInput('');
      }
    };
  
    //allows the user to remove ingredients from the list and take back inputted ingredients
    const RemoveIngredient = (ingredientToRemove) => {
      const newList = ingredients.filter(
        (ingredient) => ingredient !== ingredientToRemove
      );
      setIngredients(newList);
    };

  
    //seatches through the ingredients of the recipes to find matching recipes based on ingredients
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
      //sets the filtered to recipes that include ingredients and sets filtered2 into recipes that only have the inputted ingredients
      setFilteredRecipes(filtered);
      setExclusiveRecipes(filtered2);
    };
  
    return (
      <div>
        <div>
          <input
          //prompts user to enter their ingredients
            type="text" 
            placeholder="Please enter your ingredients"
            value={searchInput}
            className="filterSearchBar"
            onChange={(e) => setSearchInput(e.target.value)}
          /> 
          {/* allows user to add the ingredients */}
          <button className="filterButton" onClick={AddIngredient}>Click to Add Ingredient</button>
        </div>
        <div>
          {ingredients.map((ingredient) => (
            <div key={ingredient}>
              {ingredient}
              {/* allows user to remove ingredient */}
              <button className="filterButton" onClick={() => RemoveIngredient(ingredient)}>X</button>
            </div>
          ))}
        </div>
        <button className="filterButton" onClick={Search}>Search Recipes</button>
        <ul>
        <p> 
          {/* shows user recipes that are exact match */}
        <h2> Exact Match Recipes: </h2>
        {exclusiveRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Directions: {recipe.directions}</p>
            </li>
          ))}
          </p>
          <p> 
            {/* shows user recipes that require more ingredients than inputted */}
          <h2> Recipes that include 1 or more of your ingredients: </h2>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Directions: {recipe.directions}</p>
            </li>
          ))}
          </p>
        </ul>
        {/* link back to homepage */}
        <Link to="/">Home</Link>
      </div>
    );
  };

export default Filter;
