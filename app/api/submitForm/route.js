
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

// Create DynamoDB client
const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const dynamoDb = DynamoDBDocumentClient.from(client);
const TABLE_NAME = 'Contacts'; // Replace with your DynamoDB table name

export const POST = async (req, res) => {
  const { firstName, lastName, company, email, message } = await req.json();

  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: uuidv4(), // Generate a unique ID for each entry
      firstName,
      lastName,
      company,
      email,
      message,
      createdAt: new Date().toISOString()
    }
  };

  try {
    await dynamoDb.send(new PutCommand(params));
    return new Response(JSON.stringify({ message: 'Data saved successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return new Response(JSON.stringify({ error: 'Error saving data' }), { status: 500 });
  }
};
