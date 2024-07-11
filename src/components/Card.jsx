import styles from '../components/styles.module.css'
import Button from "../components/Button/Button"

export default function Card(props){
    return(
      
            <div className={styles.container}>
            <img className={styles.poster} src={props.posterImage} alt={props.title}/>
                <div>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                    <Button/>
                </div>
            </div>
       
    )
}