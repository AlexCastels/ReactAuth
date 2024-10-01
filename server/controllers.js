import db from './database.js' 
import { hashPassword } from './models.js';

export async function logIn(req , res){
    const {email , password} = req.body
    try {        
        const user = await db.oneOrNone(`SELECT * FROM Users WHERE email=$1` , email)
        if(!user){
            res.status(400).json('Attenzione! Utente non esistente.')
            console.log('Utente non esistente');
        } else if(user.password !== password){
            res.status(400).json('Password errata!')
            console.log('Password errata');
        } else {
            res.status(200).json('Utente loggato con successo!')
            console.log('Utente loggato con successo!');    
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
            res.status(400).json('Attenzione! Utente già esistente.')
        } else {
            const hashed = await hashPassword(password)
            const newUser = await db.none(`INSERT INTO Users (email , password) VALUES ($1 , $2)` , [email , hashed])
            console.log('Utente registrato con successo');
            res.status(201).json('Utente registrato con successo!')    
        }
    } catch (error) {
        console.log("Problemi con la registrazione dell'utente");
        res.status(400).json("Problemi con la registrazione dell'utente")
    }
}

export async function getAllUser(req , res){
    try {
        const data = await db.many(`SELECT * FROM User`);
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

export async function postUser(){}