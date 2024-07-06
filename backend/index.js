import express from 'express';
import {PORT,MongoDBURL} from './config.js';
import mongoose from 'mongoose';
import cors from 'cors'
;
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling the CORS policy
// Method 1: allows everything 
app.use(cors());
// Method 2: Allows certain things only
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','DELETE','PUT'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/',(req,res)=>{
    res.send("Hello Guys");
})  

app.use('/books',booksRoute);

mongoose.connect(MongoDBURL)
.then(()=>{
    console.log("Successful connected with database");
    app.listen(PORT,()=>{
        console.log(`Server running on http://localhost:${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})