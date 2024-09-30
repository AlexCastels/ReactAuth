import { useState } from 'react';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';

export function Login(){

    const [inputSpia, setInputspia] = useState(true)
    const [error , setError] = useState('')
    const navigate = useNavigate()
    
    async function handleForm(e){
        e.preventDefault()
        
        //valori ottenuti nei form
        const email = e.target.email.value
        const password = e.target.password.value
        const repeatPassword = e.target.repeatPassword.value
        
        if(password === repeatPassword){
            setError('')
            try {
                const res = await fetch('http://localhost:3000/login' , {
                    method: 'POST',
                    body: JSON.stringify({email , password}),
                    headers: {'Content-Type' : 'application/json'}
                })
                const data = await res.json()
                if(data){
                    setError(data)  
                }
                if(data === 'Utente loggato con successo!'){
                    navigate('/explore')
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setError('Attenzione! Password differente!')
        }

    }

    function passwordView(){
        setInputspia(p => !p)
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
                {error && <p className={styles.error}>{error}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
}