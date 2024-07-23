"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
const root = {
    hello: () => 'Hello world!',
};
const handler = async (event, _context) => {
    const body = event.body ? event.body : '{}'; // Ensure body is a valid string
    const response = await (0, graphql_1.graphql)(schema, body, root);
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
exports.handler = handler;
