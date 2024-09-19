import styles from './footer.module.css'

export function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.text}>
                <p>Testing sull'implementazione delle funzioni di JWT</p>
                <p>Alessandro Francesco Castelli</p>
            </div>
        </div>
    )
}