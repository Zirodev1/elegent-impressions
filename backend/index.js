import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000'], // Adjust this to match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})