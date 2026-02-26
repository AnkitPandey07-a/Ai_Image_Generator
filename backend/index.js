import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/Posts.js';
import generateImageRoutes from './routes/GenerateImage.js';   

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
 
app.use('/api/post', postRoutes);
app.use('/api/generateImage', generateImageRoutes);



// Default route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Ankit Developer 🚀'
    });
});

// Error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Start server only after DB connects
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log('✅ Connected to MongoDB');

        app.listen(8080, () =>
            console.log('🚀 Server is running on port 8080')
        );

    } catch (error) {
        console.error('❌ Failed to connect to MongoDB');
        console.error(error);
    }
};

startServer();