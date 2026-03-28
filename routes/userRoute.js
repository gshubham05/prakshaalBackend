import express from "express";
import { about, dynamicID, home } from "../controllers/userController.js";

let userRoute = express.Router();


userRoute.get('/',home)
userRoute.get('/about',about)
userRoute.get('/:pid',dynamicID)
userRoute.post('/login',(req,res)=>{
    console.log("login post route ",req.body)
    
})



export default userRoute