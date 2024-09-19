import { useNavigate } from 'react-router-dom'
import styles from './homepage.module.css'

export function Homepage(){
    
    const navigate = useNavigate()
    const handleSignin = () => navigate('/signin')

    return (
        <div className={styles.generalContainer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>My awesome App</h1>
                    <p>Dimostrazione delle capacità acquisite su JWT</p>    
                </div>
                <div className={styles.hero}>
                    <img className={styles.img} src="./public/img/jwt-logo.png" alt="jwt-logo"/>
                    <p>Non sei ancora iscritto? <span className={styles.heroSpan} onClick={handleSignin}>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}