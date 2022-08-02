import { Link } from 'react-router-dom';
import styles from './MostLikedMovies.module.css';

const LikedMovieItam = ({movie}) =>  {
    return(
        <div className={styles.center}>
            <div className={styles["property-card"]}>
                <img src={movie.imageUrl} alt="" className={styles["property-image"]} />  
            <div className={styles["property-description"]}>
                <h5 className={styles.title}> {movie.name} </h5>
                <p className={styles.inf}>
                {movie.category}
                </p>
            </div>
            <Link to={`/movies/${movie._id}`}>
                <div className={styles["property-social-icons"]}>
                    Details 
                </div>
            </Link>
            </div>
        </div>
    );
};


export default LikedMovieItam;