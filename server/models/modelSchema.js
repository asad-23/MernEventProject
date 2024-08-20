import mongoose from "mongoose";
import validator from "validator";

const modelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name"],
        minLength: [3, "Name should be at least 3 characters"]
    },
    email:{
        type: String,
        required: [true, "Please Enter Your email"],
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    subject:{
        type: String,
        required: [true, "Please Enter Your Subject"],
        minLength: [5, "Subject should be at least 5 characters"]
    },
    message:{
        type: String,
        required: [true, "Please Enter Your Message"],
        minLength: [10, "Message should be at least 10 characters"]
    }
}, {timestamps: true});


export const Message = mongoose.model("Message", modelSchema);