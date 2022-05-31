import hotel from "../models/hotel.js"
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const createHotel = async (req,res) =>{
        const newHotel = new hotel(req.body)
       try {
           const savedHotel = await newHotel.save()
        res.status(200).send(savedHotel)
           
       } catch (error) {
           res.status(500).send(error)
     
       }
    } 
    
    export const updateHotel = async (req, res)=>{
    
       try {
        const updatedHotel =  await hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).send(updatedHotel);      
       } catch (error) {
           res.status(500).send(error);
       }
    } 
    
    export const deleteHotel = async (req, res)=>{
        try {
         const delletedHotel =  await hotel.findByIdAndDelete(req.params.id);
         res.status(200).send("deleted");      
        } catch (error) {
            res.status(500).send(error);
        }
     } 
    
     export const getHotelById = async (req, res)=>{
        try {
         const findHotel =  await hotel.findById(req.params.id);
         res.status(200).send(findHotel);
       } catch (error) {
            res.status(500).send(error);
        }
     } 
     export const getAllHotells = async (req, res)=>{

         try {
         const findAllHotels =  await hotel.find();
         res.status(200).send(findAllHotels);
            
        } catch (error) {
            res.status(500).send(error);
        }
     } 

export const register =  async (req, res)=>{
    try {     
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);       
        const newHotel = await new hotel({
            name: req.body.name,
            password: hash,     
        });
        await newHotel.save();
        res.status(200).send(`${newHotel}"user created"`);
    } catch (error) {
        res.status(404).send(error);
    }
}

export const login = async (req,res) =>{
    try {
        const user = await hotel.findOne({name: req.body.name})
        if(!user){res.status(404).send("wrong crenedtials") };
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){   res.status(404).send("wrong crenedtials"); };
        res.status(200).send("stiga me");
        const token = jwt.sign({id: hotel._id}, "2323taina");

        const {password, ...others} = user._doc;
        res.cookie("access_token", token,).status(200).json({...others});
    
    } catch (error) {
        res.status(404).send(error);
    }
}