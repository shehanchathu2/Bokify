import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDb connected successfully")
    } catch (error) {
        console.log("MongoDb connection fail", error)
        process.exit(1)
    }
}

export default connectDB;













