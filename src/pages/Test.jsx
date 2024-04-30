import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './tests.css'; // Import CSS file for component styling

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            const response = await fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="posts-container">
            <h1>Posts from DynamoDB</h1>
            {posts.map(post => (
                <div key={post.PostID} className="post-item">
                    <h3>{post.Title}</h3>
                    <p>Description: {post.Description}</p>
                    <p>Ingredients: {post.Ingredients}</p>
                    <p>Directions: {post.Directions}</p>
                    <p>Likes: {post.Likes}</p>
                    <hr />
                </div>
            ))}
            <Link to="/">Home</Link>
        </div>
    );
}


export default Posts;