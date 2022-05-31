import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRouting from "./routes/hotels.js";
import authRouting from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import profileRouting from "./routes/profile.js"
import productRoute from './routes/productRoute.js'



const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOO);
        console.log("MONGOO Connected");
      } catch (error) {
        throw(error);
      }
};
mongoose.connection.on("disconnected", () =>{
    console.log("MONGOO not working :(");
})
mongoose.connection.on("connected", () =>{
    console.log("MONGOO working <3");
})

app.use(cookieParser());
app.use(express.json());

app.use("/back/hotels", hotelsRouting );
app.use("/back/authroute", authRouting);
app.use("/back/profile", profileRouting);
app.use("/back/product", productRoute );
// app.use((err,req,res,next)=>{
// const erroStatus = err.status || 500
// const erorMessage = err.message || "mistake"
//     return res.status(erroStatus).json({
//         success: false,
//         status: erroStatus,
//         message: erorMessage,
//         stack: err.stack,
//     }

//     )
// })


app.listen(5550, () =>{
    connect();
    console.log("back end working <3");
})
