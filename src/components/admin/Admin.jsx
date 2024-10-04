import { useEffect, useState } from "react"
import styles from './admin.module.css'
export function Admin(){

    const [users , setUsers] = useState([])
    
    async function getAllUser(){
        try {
            const res = await fetch('http://localhost:3000/api/allUser')
            const data = await res.json()
            if(data){
                setUsers(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllUser()
    },[])

    function handleUser(e){
        e.preventDefault()
    }

    return (
        <div className={styles.generalContainer}>
            <div>
                <p className={styles.title}>Admin Page</p>    
            </div>
            <div className={styles.container}>
                <div className={styles.userDetailContainer}>
                    <p className={styles.subTitle}>Current Users</p> 
                    <div className={styles.line}></div>  
                    <div className={styles.userContainer}>
                        {users && users.map((user) => {
                            return (
                                <div className={styles.detailContainer} key={user.id}>
                                    <div>
                                        <img alt="user img" src="/public/img/utente.jpeg"/>
                                        <p>id: {user.id}</p>
                                        <p>email: {user.email}</p>
                                    </div>
                                    <button>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.formContainer}>
                    <p className={styles.subTitle}>Add new user</p>
                    <form onSubmit={handleUser} className={styles.detailForm}>
                            <label htmlFor="email">email :</label>
                        <div>
                            <input type="text" name="email"/>
                        </div>
                            <label htmlFor="password">password :</label>
                        <div>
                            <input type="password" name="password"/>
                        </div>
                        <div>
                            <label htmlFor="isAdmin">E' un admin?</label>
                            <input type="checkbox" name="isAdmin"/>
                        </div>
                        <button>Invia</button>
                    </form>
                </div>
            </div>        
        </div>
        
    )
}