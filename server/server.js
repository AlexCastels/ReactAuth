import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { checkUser, getMethod } from "./middleware.js";
import { deleteUser, getAllUser, getOneUser, logIn, logout, signIn } from "./controllers.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

//middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(getMethod);
app.use(cookieParser());

//route
app.get('*' , checkUser)
app.post('/login' , logIn)
app.post('/signin' , signIn)
app.post('/logout' , logout)
app.get('/api/oneUser' , getOneUser)
app.get('/api/allUser' , getAllUser)

app.delete('/api/delete' , deleteUser)

//test
app.get('/set-cookie', (req, res) => {
    res.cookie('jwt', 'cookieValue', { maxAge: 900000, httpOnly: true , sameSite: 'lax'});
    res.send('Cookie has been set');
});

app.get('/get-cookie' , (req , res) => {
    const cookie = req.cookies
    console.log(cookie);
    res.status(200)
})

//FETCHARE COOKIES SU PORTE DIVERSE
// const handlecookie = async () => await fetch('http://localhost:3000/get-cookie' , {
//         method: 'GET',
//         credentials: 'include'
//     })


app.listen(3000 , () => console.log('server run at http://localhost:3000'))