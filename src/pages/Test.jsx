import React, { useEffect, useState } from 'react';

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
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>ID: {post.id}</p>
                        <p>Description: {post.description}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;