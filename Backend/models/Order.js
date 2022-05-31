import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        requeired: true,
      
    },
    products: [
        {
            prdouctId:{
                type: String

            },
            quantity:{
                type: Number,
                default: 1,
            },
        }
    ],
    amount:{type: Number, required: true},
    address:{type: Object, required: true},
    status:{type: String, default:"not ready"},


},{timestamps: true},
       
           
    
   





)

export default mongoose.model("Cart", cartSchema);