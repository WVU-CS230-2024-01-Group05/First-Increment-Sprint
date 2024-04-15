const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // Parse the JSON body from the event
    let data = JSON.parse(event.body);
    let userId = data.user_id;
    let postContent = data.post_content;

    // Parameters for DynamoDB
    let params = {
        TableName: "YourTableName",
        Item: {
            "UserID": userId,
            "PostContent": postContent
        }
    };

    // Save the data to DynamoDB
    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify('Post saved successfully!')
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify('Failed to save the post')
        };
    }
};
<div>
    <div>
        function ViewPost() {
            fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com/posts',)
        }
    </div>
</div>