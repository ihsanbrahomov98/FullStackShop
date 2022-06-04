import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();

// find all
router.get('/api/findall', async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// create one
router.post('/api/create', async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
//find by id
router.get('/api/findone/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
