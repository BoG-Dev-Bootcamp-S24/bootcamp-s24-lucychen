// remember to create a database before trying to use the db in env
import mongoose from "mongoose";

export default async function connectDB() {
    if (mongoose.connection[0]?.readyState) {
        return;
    }

    await mongoose.connect(process.env.DB_URL, {dbName : process.env.DB_NAME}).catch((e) => {
        console.error("Error connecting to MongoDB");
        throw e;
    });
}