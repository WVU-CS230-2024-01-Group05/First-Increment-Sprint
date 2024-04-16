const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

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


exports.handler = async (event) => {
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
        await dynamoDb.put(params).promise();
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
};

