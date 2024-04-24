import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>Posts from DynamoDB</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.PostID}>
                        <h3>{post.Title}</h3>
                        <p>Description: {post.Description}</p>
                        <p>Ingredients: {post.Ingredients}</p>
                        <p>Directions: {post.Directions}</p>
                        <p>Likes: {post.Likes}</p>
                        <hr />
                    </li>
                ))}
            </ul>
            <Link to="/">Home</Link>
        </div>
        
    );
}

export default Posts;