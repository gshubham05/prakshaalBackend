import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/userRoute.js";
let app = express();
//setting view engine
app.set("view engine", "ejs");
// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(userRoute);
let port = process.env.port || 9000
app.listen(port, () => console.log("running..", port));
