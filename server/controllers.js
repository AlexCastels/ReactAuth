import db from './database.js' 

export async function logIn(){}

export async function signIn(){}

export async function getAllUser(req , res){
    try {
        const res = await db.many(`SELECT * FROM ReactAuthDB`);
        res.status(200).json({res})
    } catch (err) {
        console.error('Errore durante la query:', err);
        throw err; 
    }
}

export async function getOneUser(req, res , id){
    try {
        const res = await db.one(`SELECT * FROM Users WHERE id=$1` , id)
        res.status(200).json(res)
    } catch (error) {
        throw new Error({message : 'Utente non trovato'})
    }
}

export async function postUser(){}