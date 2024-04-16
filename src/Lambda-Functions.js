import React, { useEffect, useState } from 'react';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
/*exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const params = {
        TableName: 'Posts',
        Item: {
            postId: body.postId, 
            title: body.title,
            content: body.content,
            author: body.author,
            createdAt: new Date().toISOString(),
        },
    };

    try {
        await dynamodb.put(params).promise();
        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Post created successfully', postId: body.postId }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not create post' }),
        };
    }
};*/

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'Posts',
        };
        
        const data = await dynamodb.scan(params).promise();
        
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
        };
    }
};

/*function Posts() {
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

export default Posts;*/
