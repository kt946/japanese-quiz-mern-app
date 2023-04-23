import { Schema, model } from 'mongoose'; // import Schema and model from mongoose
import bcrypt from 'bcrypt'; // import bcrypt for password hashing
import dateFormat from '../utils/helpers.js'; // import dateFormat helper function

// create User schema with username, email, password, and experience fields
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match option is a type of validation that allows us to use regex to test the input value.
    // If it doesn't match, we send back a custom error message stating that there must be a valid email address.
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5, // password must be at least 5 characters long
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  experience: {
    type: Number,
    default: 0,
  },
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  // if the password has not been modified, then we don't need to hash it again
  // if the password has been modified, then we need to hash it again
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema); // create User model using the User schema

export default User; // export the User model
