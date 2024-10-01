import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const secretKey = import.meta.env.VITE_SECRET_KEY;
const maxAgeOneDay = 1 * 24 * 60 * 60

export async function hashPassword(password){
    try {
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(password, salt)
        return hashedPass
    } catch (error) {
        console.log('Problemi con la creazione della password criptata');
    }
}

export function createToken(id){
    return jwt.sign({id} , secretKey , {expiresIn : maxAgeOneDay} )
}
