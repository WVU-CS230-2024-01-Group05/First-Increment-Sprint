import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Post = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [ingredients, setIngredients] = useState([{ id: 1, value: '' }]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleIngredientChange = (id, value) => {
        const newIngredients = ingredients.map(ingredient => {
            if (ingredient.id === id) {
                return { ...ingredient, value: value };
            }
            return ingredient;
        });
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        const newIngredient = {
            id: ingredients.length + 1,
            value: ''
        };
        setIngredients([...ingredients, newIngredient]);
    };

    const removeIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };

    return (
        <div className="App-header">
            <div className="container">
                <h1>Create Your Recipe</h1>
                <form>
                    <div>
                        <label htmlFor="recipeName">Recipe name:</label>
                        <input type="text" id="recipeName" name="recipeName" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" />
                    </div>
                    <div>
                        <p>Ingredients:</p>
                        {ingredients.map((ingredient, index) => (
                            <div key={ingredient.id}>
                                <label htmlFor={`ingredient-${ingredient.id}`}>Ingredient {index + 1}:</label>
                                <input
                                    type="text"
                                    id={`ingredient-${ingredient.id}`}
                                    value={ingredient.value}
                                    onChange={(e) => handleIngredientChange(ingredient.id, e.target.value)}
                                />
                                {ingredients.length > 1 && (
                                    <button type="button" onClick={() => removeIngredient(ingredient.id)}>
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={addIngredient}>Add Ingredient</button>
                    </div>
                    <div>
                        <label htmlFor="photoVideo">Upload a photo or video:</label>
                        <input type="file" id="photoVideo" name="photoVideo" accept="image/*, video/*" onChange={handleFileChange} />
                    </div>
                    <div>
                        <label htmlFor="directions">Directions:</label>
                        <textarea id="directions" name="directions" />
                    </div>
                    <button type="submit">Post</button>
                </form>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;