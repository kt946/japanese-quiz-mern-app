// import the gql tagged template function
import { gql } from 'apollo-server-express';

// create our typeDefs
// all type definitions need to specify the type of data that is returning.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    experience: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateExperience(experience: Int!): User
  }
`;

export default typeDefs;
