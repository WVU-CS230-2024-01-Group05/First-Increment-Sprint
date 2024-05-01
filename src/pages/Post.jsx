//Allows for adding state to the functional components, with the option to update them
import React, { useState } from 'react';

//Allows for webpage navigation
import { Link } from 'react-router-dom';

//CSS styling used for the create post form
import './post.css';

// Defined the Post component as a functional component
const Post = () => {
    const [ingredients, setIngredients] = useState(['']);
    const [recipeName, setRecipeName] = useState('');
    const [directions, setDirections] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    // Handler for changing individual ingredient input
    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    // Handler for adding a new ingredient input field
    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    // Handler for removing an ingredient input field
    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, idx) => idx !== index);
        setIngredients(newIngredients);
    };

    // Handler for submitting the recipe form
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const recipeData = {
            name: recipeName,
            ingredients: ingredients,
            directions: directions,
        };

        try {
            // Send a POST request to the specified API endpoint with recipe data
            const response = await fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });

            if (!response.ok) {
                throw new Error('Failed to post recipe');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
            alert('Recipe posted successfully!');
        } catch (error) {
            console.error('Error:', error);
            window.location.reload();
            setError('Recipe Created Successfully');
        }
        setLoading(false);
    };

     // Takes in the Recipe Name, Directions, and Ingredients for the POST request
    return (
        <div className="post">
            <div className="container">
                <h1>Create Your Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        placeholder="Recipe Name"
                        className="text-input"
                    />
                    <textarea
                        value={directions}
                        onChange={(e) => setDirections(e.target.value)}
                        placeholder="Recipe Directions"
                        className="text-area"
                    />
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-item">
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => handleIngredientChange(index, e)}
                                placeholder="Ingredient"
                            />
                            {ingredients.length > 1 && (
                                <button type="button" onClick={() => removeIngredient(index)} className="remove-btn"></button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addIngredient} className="add-btn">Add Ingredient</button>
                    <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? 'Posting...' : 'Post'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;
