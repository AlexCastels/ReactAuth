import db from './database.js' 

export async function logIn(){}

export async function signIn(req , res){
    const {email , password} = req.body
    try {
        const newUser = await db.none(`INSERT INTO Users (email , password) VALUES ($1 , $2)` , [email , password])
        res.status(201).json('Utente registrato con successo: ')
    } catch (error) {
        console.log("Problemi con la registrazione dell'utente");
        res.status(400).json({error : error.message})
    }
}

export async function getAllUser(req , res){
    try {
        const data = await db.many(`SELECT * FROM ReactAuthDB`);
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