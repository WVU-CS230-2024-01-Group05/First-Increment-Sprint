import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [ingredients, setIngredients] = useState(['']);
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 

    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); 
        const recipeData = {
            name: recipeName,
            description: description,
            ingredients: ingredients,
            images: selectedFiles.map(file => file.name), 
        };

        try {
            const response = await fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
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
