import express from 'express'
import userRoute from './routes/userRoute.js'
let app = express()
//setting view engine
app.set("view engine","ejs")
// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(userRoute)

app.listen(9000,()=>console.log("running.."))