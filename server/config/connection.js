import mongoose from 'mongoose'; // import mongoose for MongoDB connection

// set up connection to MongoDB
const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url, {
      dbName: 'quizDB', // name of database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected!');
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
