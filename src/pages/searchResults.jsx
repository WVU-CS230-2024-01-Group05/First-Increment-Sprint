import React from 'react';
import { Link } from 'react-router-dom';

const recipesData = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
        directions: "Cook spaghetti until al dente. Meanwhile, fry pancetta until crispy..."
    },
    {
        id: 2,
        name: "Chicken Alfredo",
        description: "Creamy pasta with grilled chicken and Alfredo sauce.",
        ingredients: ["Chicken breast", "Fettuccine pasta", "Heavy cream", "Garlic", "Parmesan cheese"],
        directions: "Grill chicken until cooked through. Cook pasta until al dente. In a saucepan..."
    },
];


const searchResults = () => {


 return(
    <div className = "App-header">
        <h1>Search Results</h1>
        <searchResults recipes={recipesData} />
    </div>
  )
}
export default searchResults;