import pgp from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

// Configurazione della connessione
export const db = pgp()('postgres://postgres:admin@localhost:5432/ReactAuthDB')

const setupDB = async () => {
    await db.none(`
        DROP TABLE IF EXISTS Users;
        CREATE TABLE Users(
            id SERIAL NOT NULL PRIMARY KEY,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `)
    await db.none(`INSERT INTO Users (email , password) VALUES ($1 , $2)` , ['alex@gmail.it' , 'pass12'])
}

setupDB()

export default db
