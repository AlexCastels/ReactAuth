import express from "express";
import cors from 'cors';
import { getAllUser, getOneUser, logIn, signIn } from "./controllers.js";
import { getMethod } from "./middleware.js";
import db from "./database.js";

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(getMethod)

//route
app.get('/api/oneUser' , getOneUser)
app.get('/login' , logIn)
app.post('/signin' , signIn)

//test
app.get('/api/test' , async (req ,res ) => {
    const users = await db.many(`SELECT * FROM Users`)
    res.status(200).json(users)
})

app.listen(3000 , () => console.log('server run at http://localhost:3000'))