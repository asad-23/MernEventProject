import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            dbName: 'test'
        }).then(() => console.log('connected to database')).catch(error => console.log(error))
    } catch (error) {
        console.log(error)
    }
}