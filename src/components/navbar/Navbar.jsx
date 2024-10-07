import { Link, useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../redux/slice/userStateSlice'

export function Navbar(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = () => navigate('/login')
    const handleSignin = () => navigate('/signin')
    const handleAdmin = () => navigate('/admin')
    const userState = useSelector(state => state.userState)
    
    async function handleLogout(){
        dispatch(setLogout())
        try {
            const res = await fetch('http://localhost:3000/logout' ,{
                method : 'POST',
                credentials: 'include'
            })
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <nav className={styles.container}>
            <div className={styles.navbar}>
                <Link className={styles.titleLink} to={'/'}>ReactAuth Demo</Link>
                <div className={styles.logContainer}>
                    {userState.userName && <p>Benvenuto {userState.userName}</p>}
                    <ul className={styles.list}>
                        {userState.isAdmin && <li><button className={styles.listEl} onClick={handleAdmin}>Admin</button></li>}
                        {userState.session ? (
                                <li><button className={styles.listEl} onClick={handleLogout}>Log out</button></li> 
                            ) : (
                                <>
                                    <li><button className={styles.listEl} onClick={handleLogin}>Log in</button></li>
                                    <li><button className={styles.listEl} onClick={handleSignin}>Sign In</button></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.line}></div>
        </nav>
    )
}