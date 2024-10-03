import db from './database.js' 
import { createCookie, createToken, hashPassword} from './models.js';
import bcrypt from 'bcrypt';

export async function logIn(req , res){
    const {email , password} = req.body
    try {        
        const user = await db.oneOrNone(`SELECT * FROM Users WHERE email=$1` , email)
        const auth = await bcrypt.compare(password , user.password)
        const token = createToken(user.id)
        createCookie(res , token)
        const isAdmin = user.isAdmin
        console.log(user);
        if(user.isadmin === true){
            console.log('Admin loggato con successo!');    
            return res.status(200).json({ session: true , userName: email , isAdmin : true})
        }
        if(!user){
            console.log('Utente non esistente');
            return res.status(400).json('Attenzione! Utente non esistente.')
        } else if(!auth){
            console.log('Password errata');
            return res.status(400).json('Password errata!')
        } else {
            console.log('Utente loggato con successo!');    
            return res.status(200).json({ session: true , userName: email , isAdmin : false})
        }
    } catch (error) {
        console.log("Problemi con il login dell'utente");
        res.status(400).json("Problemi con il login dell'utente")
    }
}

export async function signIn(req , res){
    const {email , password} = req.body
    try {        
        const user = await db.oneOrNone(`SELECT * FROM Users WHERE email=$1` , email)
        if(user){
            return res.status(400).json('Attenzione! Utente già esistente.')
        } else {
            const hashed = await hashPassword(password)
            const newUser = await db.one(`INSERT INTO Users (email , password) VALUES ($1 , $2) RETURNING id` , [email , hashed])
            const token = createToken(newUser.id)
            createCookie(res , token)
            console.log(newUser);
            return res.status(201).json({ session: true , userName: email ,isAdmin : false}) 
        }
    } catch (error) {
        console.log("Problemi con la registrazione dell'utente");
        return res.status(400).json("Problemi con la registrazione dell'utente")
    }
}

export async function logout(req , res){
    res.clearCookie('jwt' ,{path : '/'})
    res.status(200).json({ session: false , userName : '' , isAdmin: false})
    console.log('utente sloggato');
}

export async function getAllUser(req , res){
    try {
        const data = await db.many(`SELECT * FROM User`);
        console.log('Utenti recuperati');
        res.status(200).json({data})
    } catch (err) {
        console.error('Errore in getAllUser');
        throw new Error({message : 'Errore nel recupero degli utenti'}); 
    }
}

export async function getOneUser(req, res , id){
    try {
        const data = await db.one(`SELECT * FROM Users WHERE id=$1` , id)
        res.status(200).json({data})
    } catch (error) {
        console.error('Errore in getOneUser');
        throw new Error({message : 'Utente non trovato'})
    }
}
