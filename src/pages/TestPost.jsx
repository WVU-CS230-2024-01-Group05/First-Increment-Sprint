import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TestPost() {

    const [formData, setFormData] = useState({
        recipeName: '',
        description: '',
        ingredients: '',
        directions: ''
    });

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Recipe created successfully');
                <Link to="/Test">Posts</Link>
                
            } else {
                console.error('Failed to create recipe');
            }
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <h1>Create Your Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="recipeName">Recipe name:</label>
                    <input type="text" id="recipeName" name="recipeName" value={formData.recipeName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="directions">Directions:</label>
                    <textarea id="directions" name="directions" value={formData.directions} onChange={handleChange} />
                </div>
                <button type="submit">Create Recipe</button>
            </form>
            <Link to="/">Home</Link>
        </div>
    );

}
export default TestPost