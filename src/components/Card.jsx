import image from "../assets/img.jpg"
import styles from '../components/styles.module.css'


export default function Card(){
    return(
      
            <div className={styles.container}>
            <img className={styles.poster} src={image} alt="Star wars Poster"/>
                <div>
                <h2>Poster do Filme Star Wars</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero inventore 
                    consectetur sed ut dicta dolores odio impedit! Natus autem doloribus adipisci.
                     Aspernatur autem repudiandae nisi fugiat, deleniti vero dignissimos.
                     Voluptatum quisquam doloremque soluta deleniti animi mollitia, distinctio deserunt 
                    esse eum libero delectus assumenda. Aut cum facere alias quae reprehenderit quia, 
                    veniam, nobis nesciunt dolorum doloremque, exercitationem vero voluptatum repudiandae.</p>
                <button>Comprar Agora</button>
                </div>
            </div>
       
    )
}