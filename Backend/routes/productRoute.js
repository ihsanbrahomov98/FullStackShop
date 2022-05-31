import Product from "../models/Product.js";
import { VeifyTokenAndAuth, VerifyAdmin } from "../utils/verifyToken.js";
import express from "express";


const router = express.Router();
router.post("/", VerifyAdmin, async (req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500)
    }
})
router.get("/", async (req,res)=>{
    const allProduct = await Product.find();
    try {
      
        res.status(200).json(allProduct)
    } catch (error) {
        res.status(500)
    }
})



export default router