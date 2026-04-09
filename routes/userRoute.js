import express from "express";
import {
  about,
  home,
  login,
  loginCheck,
  register,
  dashboard,
  dashboardPage,
  data
} from "../controllers/userController.js";
import upload from "../config/multer.js";
import { auth } from "../middleware/auth.js";

let userRoute = express.Router();

userRoute.get("/", home);
userRoute.get("/login", login);
userRoute.post("/login", loginCheck);
userRoute.get("/register", (req, res) => {
  res.render("index");
});
userRoute.post("/register", register);
userRoute.get("/about", about);
userRoute.get("/data", data);


userRoute.get('/dashboard',dashboardPage)
userRoute.post('/dashboard',auth,dashboard)

export default userRoute;
