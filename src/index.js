// require('dotenv').config({path: './env'});
import dns from 'node:dns';
import dotenv from 'dotenv';
import connectDB from './db/index.js'
import { app } from './app.js';


dotenv.config({
  path: './.env'
});

dns.setServers(['8.8.8.8', '1.1.1.1']);

connectDB()
.then(()=>{
  app.listen(process.env.PORT||4000,()=>{
    console.log(`Server is running at port ${process.env.PORT||4000}`);
  });
})
.catch((error)=>{
  console.log("MongoDB connection Failed !!", error);
});










/*

// sara code ek hi jagah pe dal diya

import express from "express";
const app = express();

// (;) professional approach to start with ;
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`APP is Listening on Port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
