import mongoose from 'mongoose';

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGODB_CONNECT),
        console.log('MongoDB connected');

    }
    catch(error){
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;