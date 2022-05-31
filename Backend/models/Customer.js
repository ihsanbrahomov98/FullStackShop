import mongoose from "mongoose";


const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        requeired: true,
        unique: true,
    },
    email: {
        type: String,
        requeired: true,
        unique: true,
    },
    password: {
        type: String,
        requeired: true,
        
    },
    isAdmin: {
        type: Boolean,
        default: false,
     
    },





},{timestamps: true})

export default mongoose.model("Customer", customerSchema);