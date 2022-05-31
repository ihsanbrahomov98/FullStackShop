import express from "express";
import { createHotel, updateHotel,deleteHotel,getHotelById,getAllHotells,register, login } from "../contolers/hotel.js";
import hotel from "../models/hotel.js";



const router = express.Router();

router.post("/" ,createHotel);

router.put("/:id", updateHotel);

router.delete("/:id",deleteHotel);

router.get("/:id", getHotelById);

router.get("/", getAllHotells);
router.post("/register",register);
router.post("/login", login);

export default router