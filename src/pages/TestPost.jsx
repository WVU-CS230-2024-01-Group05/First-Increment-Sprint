import React, { useState } from 'react';
import { API } from 'aws-amplify';

function TestPost() {
    const [formData, setFormData] = useState({
        recipeName: '',
        description: '',
        ingredients: [],
        directions: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await API.graphql({
                query: `
                    mutation CreateRecipe($input: CreateRecipeInput!) {
                        createRecipe(input: $input) {
                            id
                            recipeName
                            description
                            ingredients
                            directions
                        }
                    }
                `,
                variables: {
                    input: {
                        recipeName: formData.recipeName,
                        description: formData.description,
                        ingredients: formData.ingredients,
                        directions: formData.directions
                    }
                }
            });

            console.log('Recipe added:', response.data.createRecipe);
            // Clear form fields after successful submission
            setFormData({
                recipeName: '',
                description: '',
                ingredients: [],
                directions: ''
            });
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="recipeName">Recipe Name:</label>
                <input type="text" id="recipeName" name="recipeName" value={formData.recipeName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <input type="text" id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="directions">Directions:</label>
                <textarea id="directions" name="directions" value={formData.directions} onChange={handleChange} />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default TestPost;