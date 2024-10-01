import bcrypt from 'bcrypt'

export async function hashPassword(password){
    try {
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(password, salt)
        return hashedPass
    } catch (error) {
        console.log('Problemi con la creazione della password criptata');
    }
}

//hashPassword('ciao12').then(hashed => console.log(hashed))