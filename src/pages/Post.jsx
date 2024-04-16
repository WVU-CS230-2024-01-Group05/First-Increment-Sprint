import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './post.css'; 

const Post = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [ingredients, setIngredients] = useState(['']);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', { ingredients, selectedFile });
    };

    return (
        <div className="App-header">
            <div className="container">
                <h1>Create Your Recipe</h1>
                <form onSubmit={handleSubmit}>
                    {/* ... other form fields ... */}
                    <div className="ingredient-list">
                        <p>Ingredients:</p>
                        {ingredients.map((ingredient, index) => (
                            <div className="ingredient-item" key={index}>
                                <input
                                    type="text"
                                    value={ingredient}
                                    onChange={(event) => handleIngredientChange(index, event)}
                                    placeholder={`Ingredient ${index + 1}`}
                                />
                                <button type="button" onClick={() => removeIngredient(index)} className="remove-btn">
                                    ✖
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addIngredient} className="add-btn">
                            Add Ingredient
                        </button>
                    </div>
                    {/* ... other form fields ... */}
                    <button type="submit" className="submit-btn">Post</button>
                </form>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;
