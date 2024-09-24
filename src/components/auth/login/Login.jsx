import styles from './login.module.css'

export function Login(){

    function handleForm(e){
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Log in</p>
            <form className={styles.form} onSubmit={handleForm}>
                <div className={styles.emailContainer}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name='email' placeholder='Email' required/>
                </div>
                <div className={styles.passwordContainer}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' placeholder='Password' required/>
                    <input type="password" name='repeatPassword' placeholder='Repeat Password' required/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}