// Made by Kyle (https://github.com/kt946)
import express from 'express';
import { ApolloServer } from 'apollo-server-express'; // import ApolloServer for GraphQL
import * as dotenv from 'dotenv';
import path from 'path';

import connectDB from './config/connection.js'; // import connection to MongoDB
import { typeDefs, resolvers } from './schemas/index.js'; // import typeDefs and resolvers
import { authMiddleware } from './utils/auth.js'; // import authMiddleware for authentication

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3001;

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // This ensures that every request performs an authentication check, and the updated request object will be passed to the resolvers as the context.
});

const app = express(); // Create a new instance of an Express server
app.use(express.urlencoded({ extended: true })); // This sets up middleware to parse incoming requests with urlencoded payloads
app.use(express.json()); // This sets up middleware to parse incoming requests with JSON payloads

if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(new URL('../client/dist', import.meta.url).pathname)));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(new URL('../client/dist/index.html', import.meta.url).pathname));
});

const startServer = async (typeDefs, resolvers) => {
  try {
    await server.start(); // Start the Apollo server
    server.applyMiddleware({ app }); // integrate our Apollo server with the Express application as middleware
    connectDB(process.env.MONGODB_URI); // connect to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer(typeDefs, resolvers); // Start server
