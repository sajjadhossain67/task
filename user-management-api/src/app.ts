import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user-management', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Use user routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
