import { useState } from 'react'
import styles from './signin.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userStateSlice, { setLogin } from '../../../redux/slice/userStateSlice'

export function Signin(){

    const [inputSpia, setInputspia] = useState(true)
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    async function handleForm(e){
        e.preventDefault()
        setError('')
        
        //valori ottenuti nei form
        const email = e.target.email.value
        const password = e.target.password.value
        const repeatPassword = e.target.repeatPassword.value
        
        if(password === repeatPassword){
            try {
                const res = await fetch('http://localhost:3000/signin' , {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({email , password}),
                    headers: {'Content-Type' : 'application/json'}
                })
                const data = await res.json()
                if(data){
                    setError(data)  
                }
                if(data.session === true){
                    dispatch(setLogin(data))
                    navigate('/')
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
            <p className={styles.title}>Sign in</p>
            <form className={styles.form} onSubmit={handleForm}>
                <div className={styles.emailContainer}>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Email' 
                        required
                    />
                </div>
                <div className={styles.passwordContainer}>
                    <label htmlFor="password">Password: </label>
                    <div className={styles.inputPassword}>
                        <input 
                            type={inputSpia ? 'password' : 'text'} 
                            name='password' 
                            placeholder='Password' 
                            required
                        />
                        <img src={inputSpia ? '/img/not-visible.png' : '/img/visible.png'} alt="visible password icon"  onClick={passwordView}  />                        
                    </div>
                    <div className={styles.inputPassword}>
                        <input 
                            type='password' 
                            name='repeatPassword' 
                            placeholder='Repeat Password' 
                            required/>
                    </div>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
}