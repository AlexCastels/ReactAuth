import { useNavigate } from 'react-router-dom'
import styles from './homepage.module.css'
import { useEffect } from 'react'

export function Homepage(){
    
    const navigate = useNavigate()
    const handleSignin = () => navigate('/signin')
    const handleExplore = () => navigate('/explore')

    async function getData(){
        try {
            const res = await fetch('http://localhost:3000/api/test')
            const data = await res.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{},[
        getData()
    ])

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
            </div>
        </div>
    )
}