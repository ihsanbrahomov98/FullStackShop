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
        type: Array,
   
     
    },
    
    price: {
        type: Number,

   
     
    },
    color: {
        type: Array,

     
    },
    
    






},{timestamps: true})

export default mongoose.model("Product", productSchema);