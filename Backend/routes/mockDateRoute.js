import express from 'express'
import products from "../mockData/products.js"
const router = express.Router();


router.get("/api/products" ,( req, res) =>{
    res.json(products)
    console.log(products);
});

router.get("/api/products/:id" ,( req, res) =>{
    const product = products.find((p)=> p._id === match.params.id);
    res.json(product)
});



export default router