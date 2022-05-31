import hotel from "../models/hotel.js";

export const createHotel = async (req,res) =>{
    const newHotel = new hotel(req.body)
   try {
       const savedHotel = await newHotel.save()
    res.status(200).send(savedHotel)
       
   } catch (error) {
       res.status(500).send(error)
 
   }
} 