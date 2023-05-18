import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected.');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectDB;