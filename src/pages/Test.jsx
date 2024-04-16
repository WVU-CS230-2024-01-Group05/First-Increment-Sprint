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
                    <li key={post.PostID}>
                        <h3>{post.Title}</h3>
                        <p>ID: {post.PostID}</p>
                        <p>Description: {post.Description}</p>
                        <p>Likes: {post.Likes}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;