import Customer from '../models/Customer.js';
import express from 'express';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req, res) => {
  const newUser = new Customer({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
    isAdmin: req.body.isAdmin,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500);
  }
});
router.post('/login', async (req, res) => {
  try {
    const user = await Customer.findOne({ username: req.body.username });
    !user && res.status(401).json('greshna parola ili ime');

    const hashedPassoword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    );
    const originalPassword = hashedPassoword.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(404).json('greshna parola ili ime');

    const accessToken = jwt.sign(
      {
        id: Customer._id,
        isAdmin: Customer.isAdmin,
      },
      process.env.JWTSECRET,
      { expiresIn: '1d' }
    );

    const { isAdmin, password, ...other } = user._doc;

    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    res.status(500);
  }
});

export default router;
