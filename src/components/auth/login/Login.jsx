import { useState } from 'react';
import styles from './login.module.css'

export function Login(){

    const [input, setInput] = useState('password')
    // let typeInput = 'password'
    //al click deve cambiare la stringa in text o password

    function handleForm(e){
        e.preventDefault()
    }

    function passwordView(){
        setInput('text')
    }
    
    return (
        <div className={styles.container}>
            <p className={styles.title}>Log in</p>
            <form className={styles.form} onSubmit={handleForm}>
                <div className={styles.emailContainer}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' placeholder='Email' required/>
                </div>
                <div className={styles.passwordContainer}>
                    <label htmlFor="password">Password: </label>
                    <div className={styles.inputPassword}>
                        <input type={input} name='password' placeholder='Password' required/>
                        <img src="/img/visible.png" alt="visible password icon" />                        
                    </div>
                    <div className={styles.inputPassword}>
                        <input type={input} name='repeatPassword' placeholder='Repeat Password' required/>
                        <img src="/img/visible.png" alt="visible password icon" onClick={passwordView} />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

//Inserire una condizione per avere la img diversa al click, più ,il cambio di input tra password e text