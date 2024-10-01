import styles from "./card.module.css"

export function Card({img}){
    return (
        <div className={styles.container}>
            <img src={img} alt="content card" className={styles.img}/>
            <p className={styles.title}>
                Lorem, ipsum dolor.
            </p>
            <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa quo neque iste debitis cum, placeat perspiciatis. Necessitatibus, eum blanditiis.
            </p>
        </div>
    )
}