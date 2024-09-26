import { useState } from 'react'
import styles from './signin.module.css'

export function Signin(){
    const [inputSpia, setInputspia] = useState(true)

    function handleForm(e){
        e.preventDefault()
    }

    function passwordView(){
        setInputspia(p => !p)
    }
    
    return (
        <div className={styles.container}>
            <p className={styles.title}>Sign in</p>
            <form className={styles.form} onSubmit={handleForm}>
                <div className={styles.emailContainer}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' placeholder='Email' required/>
                </div>
                <div className={styles.passwordContainer}>
                    <label htmlFor="password">Password: </label>
                    <div className={styles.inputPassword}>
                        <input type={inputSpia ? 'password' : 'text'} name='password' placeholder='Password' required/>
                        {/* successivamente sarà pure possibile impostare un controllo se l'input è vuoto o meno aggiungendo poi
                            un value con uno state all'input , successivamete per poi poter mandare i dati
                        */}
                        <img src={inputSpia ? '/img/not-visible.png' : '/img/visible.png'} alt="visible password icon"  onClick={passwordView}  />                        
                    </div>
                    <div className={styles.inputPassword}>
                        <input type={'password'} name='repeatPassword' placeholder='Repeat Password' required/>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}