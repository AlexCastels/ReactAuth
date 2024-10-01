import { Card } from '../content/Card'
import styles from './explore.module.css'

export function Explore(){

    const contentPath = [
        "/img/content1.jpg",
        "/img/content2.jpg",
        "/img/content3.jpg"
    ]
    
    return (
        <div className={styles.container}>
            {contentPath.map((path , index) =>
                <Card key={index} img={path}/>
            )}
        </div>
    )
}