import { useNavigate } from 'react-router-dom'
import styles from './homepage.module.css'
import { useEffect } from 'react'

export function Homepage(){
    
    const navigate = useNavigate()
    const handleSignin = () => navigate('/signin')
    const handleExplore = () => navigate('/explore')

    //test
    const handlecookie = async () => await fetch('http://localhost:3000/get-cookie' , {
        method: 'GET',
        credentials: 'include'
    })

    return (
        <div className={styles.generalContainer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>My awesome App</h1>
                    <p>Dimostrazione delle capacità acquisite su JWT</p> 
                    <button className={styles.button} onClick={handleExplore}>Explore</button>   
                </div>
                <div className={styles.hero}>
                    <img className={styles.img} src="/img/jwt-logo.png" alt="jwt-logo"/>
                    <p>Non sei ancora iscritto? <span className={styles.heroSpan} onClick={handleSignin}>Sign In</span></p>
                </div>
                <button onClick={handlecookie}>cookie</button>
            </div>
        </div>
    )
}