import express from "express";


import mongoose from "mongoose";

import authRouter from "./src/routes/authentication";

import tourRouter from "./src/routes/tourRoutes";

import bookingRoutes from "./src/routes/bookingRoutes";

import { verifyToken } from "./src/middleware";

import dotenv from "dotenv";
import bodyParser from "body-parser"

dotenv.config();


const app = express()


app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Welcome to my server")
})
app.use('/auth', authRouter)
app.use('/tour', tourRouter)
app.use('/book', bookingRoutes);

app.listen('7080', () => {
    console.log('app is listening')
});

mongoose.connect('mongodb://127.0.0.1:27017/newsLetter', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OHH NO CONNECTION ERROR!!!")
        console.log(err)
    });