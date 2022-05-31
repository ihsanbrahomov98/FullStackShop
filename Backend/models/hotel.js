import mongoose from "mongoose";
 const Schema = mongoose;

const HotelSchema = new mongoose.Schema({
name:{
    type: String,

},
password:{
    type: String,
    
},

// adrres:{
//     type: String,
//     required: true
// },
// phoots:{
//     type: [String],
//     required: true
// },
// rating:{
//     type: Number,
//     min:0,
//     max: 25
// },
// cheapestPrice:{
//     type: Number,
//     required: true
// },

})

export default mongoose.model("hotel", HotelSchema);

