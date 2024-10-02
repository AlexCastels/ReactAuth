import db from "./database.js";
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY

export function getMethod(req , res, next){
    console.log(`Richiesta: ${req.method} | URL: ${req.url}`);
    next()
}

export function checkUser(req , res , next){
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token , secretKey , async (err , decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null
                next()
            } else {
                console.log(decodedToken);
                let user = await db.oneOrNone(`SELECT * FROM Users WHERE id=$1` , decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}
