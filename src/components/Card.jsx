import styles from '../components/styles.module.css'
import Button from "../components/Button/Button"

export default function Card({title, content, posterImage}){
    return(
      
            <div className={styles.container}>
            <img className={styles.poster} src={posterImage} alt={title}/>
                <div>
                <h2>{title}</h2>
                <p>{content}</p>
                    <Button/>
                </div>
            </div>
       
    )
}