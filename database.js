/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
  try {
    // Si tu veux utiliser la variable d'environnement, sinon tu peux mettre directement mongodb://localhost:27017/RecycleConnect
    const mongoURI = process.env.MONGO_URI_LOCAL || 'mongodb://127.0.0.1:27017/RecycleConnect';

    await mongoose.connect(mongoURI);

    console.log('✅ Connected to local MongoDB RecycleConnect');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

export default connectToDatabase;*/

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas RecycleConnect');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

export default connectToDatabase;
