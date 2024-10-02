import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export const temporaryMemory = new Map()
const secretKey = process.env.SECRET_KEY
const maxAgeOneDay = 60 * 60 * 24

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

export function createCookie(res , token){
    return res.cookie('jwt' , token , {httpOnly: true , maxAge: maxAgeOneDay * 1000 , sameSite: 'lax'})
}