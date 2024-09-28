import pgp from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

// Configurazione della connessione
export const db = pgp()('postgres://postgres:admin@localhost:5432/ReactAuthDB')

const setupDB = async () => {
    try {
        await db.none(`DROP TABLE IF EXISTS Users`)
        await db.none(`
            CREATE TABLE Users(
                id SERIAL NOT NULL PRIMARY KEY,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );
        `)
        await db.none(`INSERT INTO Users (email , password) VALUES ($1 , $2)` , ['alex@gmail.it' , 'pass12'])
        console.log('Tabella creata e dati inseriti');       
    } catch (error) {
    console.log('Errore nel creazione della tabella' , error); 
    }
}

setupDB()

export default db
