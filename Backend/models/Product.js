import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    tittle: {
        type: String,
        requeired: true,
    },
    desc: {
        type: String,
        requeired: true,
    },
    img: {
        type: String,
      
        
    },
    categories: {
        type: Array,
     
     
    },
    size: {
        type: String,
   
     
    },
    
    price: {
        type: Number,

   
     
    },
    color: {
        type: String,

     
    },
    
    






},{timestamps: true})

export default mongoose.model("Product", productSchema);