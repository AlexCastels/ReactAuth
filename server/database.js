import pgp from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

// const URI = import.meta.env.VITE_DB_URI
const URI = process.env.DB_URI

// Configurazione della connessione
export const db = pgp()(URI)

const setupDB = async () => {
    try {
        await db.none(`DROP TABLE IF EXISTS Users`)
        await db.none(`
            CREATE TABLE Users(
                id SERIAL NOT NULL PRIMARY KEY,
                email TEXT NOT NULL,
                password TEXT NOT NULL,
                isAdmin BOOLEAN
            );
        `)
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['admin@admin.it' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , true])
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['mariobianchi@hotmail.it' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , false])
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['alex@gmail.com' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , true])
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['peppe67@gmail.com' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , false])
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['gianmarco@outlook.it' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , false])
        await db.none(`INSERT INTO Users (email , password , isAdmin) VALUES ($1 , $2, $3)` , ['giovanni.rossi@gmail.com' , '$2b$10$9C/HnByWm92eAgWtWeiOKe.DS1uWtkDWwo82bmAH7U34nMKB6jXj6' , false])
        console.log('Tabella creata e dati inseriti');       
    } catch (error) {
    console.log('Errore nel creazione della tabella' , error); 
    }
}

setupDB()

export default db
