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
                res.locals.user = null;
                console.log('Token non valido');
                return res.status(401).json('Token non valido o scaduto')
            } else {
                try {
                    let user = await db.oneOrNone(`SELECT * FROM Users WHERE id=$1` , decodedToken.id)
                    if(user){
                        console.log(decodedToken);
                        res.locals.user = user
                        next()
                    } else {
                        return res.status(401).json('Utente non trovato');
                    }
                } catch (error) {
                    console.log(error);
                    return res.status(500).json('Errore del server');
                }
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

// export function checkAdmin(req , res ,next){
//     const isAdmin = req.body.isAdmin
// }
