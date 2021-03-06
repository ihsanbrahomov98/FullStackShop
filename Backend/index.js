import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import hotelsRouting from './routes/hotels.js';
import authRouting from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import profileRouting from './routes/profile.js';
import productRoute from './routes/productRoute.js';
import stripeRouting from './routes/StriepRoute.js';
import mockDataRuoting from './routes/mockDateRoute.js';
import cors from 'cors';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOO);
    console.log('MONGOO Connected');
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on('disconnected', () => {
  console.log('MONGOO not working!  ');
});
mongoose.connection.on('connected', () => {
  console.log('MONGOO working <3');
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/back/hotels', hotelsRouting);
app.use('/back/authroute', authRouting);
app.use('/back/profile', profileRouting);
app.use('/back/product', productRoute);
app.use('/back/stripe', stripeRouting);
app.use('/back/mock', mockDataRuoting);

app.listen(process.env.PORT || 5550, () => {
  connect();
  console.log('back end working <3');
});
