import React, { useEffect, useState } from 'react';
import './media.css';


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

