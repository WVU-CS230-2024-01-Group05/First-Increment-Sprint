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
            <ul>
                {posts.map(post => (
                    <li key={post.PostID} className="post-item">
                        <h3 className="post-title">{post.Title}</h3>
                        <p className="post-content">Description: {post.Description}</p>
                        <p className="post-content">Ingredients: {post.Ingredients}</p>
                        <p className="post-content">Directions: {post.Directions}</p>
                        <p className="post-content">Likes: {post.Likes}</p>
                        <hr />
                    </li>
                ))}
            </ul>
            <Link to="/" className="link-back">Home</Link>
        </div>
    );
}

export default Posts;