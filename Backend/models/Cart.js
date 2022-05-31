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
    ]
       
           
    
   





},{timestamps: true})

export default mongoose.model("Cart", cartSchema);