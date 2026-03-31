import express from "express";
import { about, dynamicID, home } from "../controllers/userController.js";
import upload from "../config/multer.js";

let userRoute = express.Router();

userRoute.get("/", home);
userRoute.get("/about", about);
userRoute.get("/:pid", dynamicID);

userRoute.post(
  "/login",
  upload.fields([
    { name: "photo", maxCount: 4 },
    { name: "img1", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("login post route ", req.body);
    console.log(req.file);
  },
);

// Array of images
// userRoute.post('/login',upload.array("photo",5),(req,res)=>{
//     console.log("login post route ",req.body)
//     console.log(req.file)
// })

// single photo
// userRoute.post('/login',upload.single("photo"),(req,res)=>{
//     console.log("login post route ",req.body)
//     console.log(req.file)
// })

export default userRoute;
