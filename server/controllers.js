import db from './database.js' 
import { createToken, hashPassword, temporaryMemory } from './models.js';
import bcrypt from 'bcrypt';

export async function logIn(req , res){
    const {email , password} = req.body
    try {        
        const user = await db.oneOrNone(`SELECT * FROM Users WHERE email=$1` , email)
        const auth = await bcrypt.compare(password , user.password)
        const token = createToken(user.id)
        temporaryMemory.set(user.id , token)
        console.log(temporaryMemory);
        if(!user){
            res.status(400).json('Attenzione! Utente non esistente.')
            return console.log('Utente non esistente');
        } else if(!auth){
            res.status(400).json('Password errata!')
            return console.log('Password errata');
        } else {
            res.status(200).json('Utente loggato con successo!')
            return console.log('Utente loggato con successo!');    
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
            temporaryMemory.set(newUser.id , token)
            console.log(temporaryMemory);
            console.log('Utente registrato con successo');
            return res.status(201).json('Utente registrato con successo!') 
        }
    } catch (error) {
        console.log("Problemi con la registrazione dell'utente");
        return res.status(400).json("Problemi con la registrazione dell'utente")
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