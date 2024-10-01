import express from "express";
import cors from 'cors';
import db from "./database.js";
import { getMethod } from "./middleware.js";
import { getAllUser, getOneUser, logIn, signIn } from "./controllers.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(getMethod)

//route
app.get('/api/oneUser' , getOneUser)
app.post('/login' , logIn)
app.post('/signin' , signIn)

//test
// app.get('/api/test' , async (req ,res ) => {
//     res.cookie('test' , true , {httpOnly:true})
//     console.log('cookie ok');
//     res.status(200)
// })

// app.get('/api/testRead' , async (req ,res ) => {
//     console.log(req.cookies.test);
//     console.log('cookie letto');
//     res.status(200)
// })

app.listen(3000 , () => console.log('server run at http://localhost:3000'))