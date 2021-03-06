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
//delete all
router.delete('/api/delete', async (req, res) => {
  await Product.remove({});
  try {
    res.status(200).json('allgone');
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
//find many by cat
router.get('/api/findone/:id', async (req, res) => {
  try {
    const product = await Product.find();
    const filteredItems = product.filter(
      (item) => item.category === req.params.id
    );
    console.log(filteredItems);
    res.status(200).send(filteredItems);
  } catch (error) {
    res.status(500).send(error);
  }
});
//updateone
router.put('/api/update', async (req, res) => {
  console.log(req.body);
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { userId: req.body.userId },
      { $set: req.body },
      { new: true }
    );

    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
//deleteone
router.delete('/api/deleteone', async (req, res) => {
  try {
    const deleteOne = await Product.findOneAndDelete({
      userId: req.body.userId,
    });

    res.status(200).send(deleteOne);
  } catch (error) {
    res.status(500).send(error);
  }
});
// find by category

router.get('/api/findallcat/:id', async (req, res) => {
  console.log('vatre');
  console.log(req.params.id);
  try {
    const product = await Product.find({ category: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
