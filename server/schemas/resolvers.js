import User from '../models/User.js';
import { AuthenticationError } from 'apollo-server-express';
import { signToken } from '../utils/auth.js';

const resolvers = {
  Query: {
    // get logged in user
    me: async (parent, args, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    // get all users
    users: async () => {
      return (
        User.find()
          // omit mongoose-specific __v property and user's password information
          .select('-__v -password')
      );
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password');
    },
  },
  Mutation: {
    // add a user to the database
    addUser: async (parent, args) => {
      const user = await User.create(args); // create a new user from args
      const token = signToken(user); // sign a token for the new user
      return { token, user }; // return the token and the user
    },

    // login a user
    login: async (parent, { email, password }) => {
      // find a user by email
      const user = await User.findOne({ email });

      // if user doesn't exist, display error message
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // check if password is correct
      const correctPw = await user.isCorrectPassword(password);

      // if password is incorrect, display error message
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // create token
      const token = signToken(user);
      // return token and user
      return { token, user };
    },

    // update a user's experience
    updateExperience: async (parent, { experience }, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        // find user by id and update experience
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { experience } },
          { new: true }
        );

        // return updated user
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

export default resolvers;
