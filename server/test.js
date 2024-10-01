import bcrypt from 'bcrypt';

async function test(){
    const plainPassword = '12';
    const hashedPassword = '$2b$10$o1siWrirdJnXSTGxRZ/tJOBUaehTUnwC18avvpks8A6IEX.FLvO.C';
    try {
        const auth = await bcrypt.compare(plainPassword , hashedPassword)
        return console.log(auth);
    } catch (error) {
        console.log(error);
    }
}

test()
