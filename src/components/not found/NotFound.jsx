import { Link } from "react-router-dom";
import styles from './notFound.module.css'

export function NotFound(){
    return (
        <div className={styles.container}>
            <p>Sorry, page not found!</p>
            <Link className={styles.link} to={'/'}>Go Home</Link>
        </div>
    )
}