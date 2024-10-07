import { Link, useNavigate } from 'react-router-dom'
import styles from './redirect.module.css'
import { useEffect } from 'react'

export function Redirect(){
    const navigate = useNavigate()
    
    function timeout(){
        setTimeout(() => {
            navigate('/signin')
        },5000)
    }
    
    useEffect(() => timeout(),[])

    return (
        <div className={styles.container}>
            <p>Per poter accedere a questa sezione devi essere registrato!</p>
            <p>Reindirizzamento...</p>
            <Link className={styles.link} to={'/signin'}>Sign in</Link>
        </div>
    )
}