import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL){
        return console.log("No MongoDB URL provided");
    }
    if(isConnected){
        console.log("MongoDB is already connected...")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true;

        console.log("MongoDB successfully connected :)")

    } catch (error) {
        console.log(error)
    }
}