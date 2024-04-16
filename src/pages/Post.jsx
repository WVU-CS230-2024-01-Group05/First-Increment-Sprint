import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = () => {
    const [ingredients, setIngredients] = useState(['']);
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, idx) => idx !== index);
        setIngredients(newIngredients);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const recipeData = {
            name: recipeName,
            description: description,
            ingredients: ingredients,
        };

        try {
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
            setError('Failed to create recipe');
        }
        setLoading(false);
    };

    return (
        <div className="App-header">
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Recipe Description"
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
