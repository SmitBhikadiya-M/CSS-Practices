import mongoose from "mongoose";

let isConnected = false;

export const connectedToDB = async () => {
    // default false: will get an warning in the console
    mongoose.set('strictQuery', true)

    // check if connected or not
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt'
        })

        isConnected = true;
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }
}