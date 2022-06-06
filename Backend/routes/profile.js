import Customer from '../models/Customer.js';
import express from 'express';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { VeifyTokenAndAuth, VerifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.put('/token/:id', VeifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }
  try {
    const updatedUser = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json('wrong');
  }
});
router.delete('/:id', VeifyTokenAndAuth, async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json('useddeleted');
  } catch (error) {}
});

router.get('/:id', VerifyAdmin, async (req, res) => {
  try {
    const user = await Customer.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {}
});
router.get('/', VerifyAdmin, async (req, res) => {
  try {
    const user = await Customer.find();
    res.status(200).json(user);
  } catch (error) {}
});

export default router;
