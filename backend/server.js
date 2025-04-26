const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
// Add more detailed logging for the MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });

// Routes
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Student Management System API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});