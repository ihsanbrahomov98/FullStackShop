import Customer from "../models/Customer.js";
import express from "express";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';
import Stripe from "stripe";

const router = express.Router();

const stripe = Stripe(process.env.STRIPEKEY);

router.post("/payment",(res,req)=>{
    stripe.charges.create({
        source: req.body.tokenId ,
        amount: req.body.amount ,
        currency:"usd",
    },(stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(404).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    })
})



export default router