import { Link, useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'

export function Navbar(){

    const navigate = useNavigate()

    const handleLogin = () => navigate('/login')
    const handleSignin = () => navigate('/signin')

    return (
        <nav className={styles.container}>
            <div className={styles.navbar}>
                <Link className={styles.titleLink} to={'/'}>ReactAuth Demo</Link>
                <ul className={styles.list}>
                    <li><button className={styles.listEl} onClick={handleLogin}>Log In</button></li>
                    <li><button className={styles.listEl} onClick={handleSignin}>Sign In</button></li>
                </ul>
            </div>
            <div className={styles.line}></div>
        </nav>
    )
}