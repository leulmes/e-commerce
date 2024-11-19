import mongoose from 'mongoose';

let initialized = false;

 const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "e-commerce",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
        initialized = true;
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
};

export default connect;