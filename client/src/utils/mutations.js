// This file stores all of the GraphQL mutation requests.
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_EXPERIENCE = gql`
  mutation updateExperience($experience: Int!) {
    updateExperience(experience: $experience) {
      _id
      username
      experience
    }
  }
`;
