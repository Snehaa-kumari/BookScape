import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

import bookRoute from './route/bookRoute.js';
import userRoute from './route/userRoute.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;


//conect to mongodb

try{
    mongoose.connect(MongoDBURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to the mongoDB")
}catch(error){
   console.error("Error", error)
}

app.use("/book", bookRoute);
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})

