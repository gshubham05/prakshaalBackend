import express from "express";
import {
  about,
  dynamicID,
  home,
  login,
  loginCheck,
  register,
} from "../controllers/userController.js";
import upload from "../config/multer.js";

let userRoute = express.Router();

userRoute.get("/", home);
userRoute.get("/login", login);
userRoute.post("/login", loginCheck);
userRoute.get("/register", (req, res) => {
  res.render("index");
});
userRoute.post("/register", register);
userRoute.get("/about", about);
userRoute.get("/:pid", dynamicID);

export default userRoute;
