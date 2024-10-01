import { temporaryMemory } from "./models.js";

const secretKey = process.env.SECRET_KEY

export function getMethod(req , res, next){
    console.log(`Richiesta: ${req.method} | URL: ${req.url}`);
    next()
}

