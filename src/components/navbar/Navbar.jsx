import { Link, useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'
import { useSelector } from 'react-redux'

export function Navbar(){

    const navigate = useNavigate()
    const handleLogin = () => navigate('/login')
    const handleSignin = () => navigate('/signin')
    const userState = useSelector(state => state.userState)

    return (
        <nav className={styles.container}>
            <div className={styles.navbar}>
                <Link className={styles.titleLink} to={'/'}>ReactAuth Demo</Link>
                <ul className={styles.list}>
                    {userState ? (
                            <li><button className={styles.listEl} onClick={handleSignin}>Log out</button></li> 
                        ) : (
                            <>
                                <li><button className={styles.listEl} onClick={handleLogin}>Log in</button></li>
                                <li><button className={styles.listEl} onClick={handleSignin}>Sign In</button></li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className={styles.line}></div>
        </nav>
    )
}