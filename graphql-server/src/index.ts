import { APIGatewayProxyHandler } from 'aws-lambda';
import { graphql, buildSchema } from 'graphql';
 
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
const root = {
  hello: () => 'Hello world!',
};
 
export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const body = event.body ? event.body : '{}'; // Ensure body is a valid string
  const response = await graphql(schema, body, root);
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};