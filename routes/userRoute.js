import express from "express";
import {
  about,
  home,
  login,
  loginCheck,
  register,
  dashboard,
  dashboardPage
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


userRoute.get('/dashboard',dashboardPage)
userRoute.post('/dashboard',dashboard)

export default userRoute;
