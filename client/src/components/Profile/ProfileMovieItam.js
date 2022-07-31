import styles from './Profile.module.css';

import { Link } from 'react-router-dom';

const ProfileMovieItem = ({movie}) => {
    return (
        <div className={styles.center}>
            <div className={styles["property-card"]}>
                <img src={movie.imageUrl} alt="" className={styles["property-image"]} />  
            <div className={styles["property-description"]}>
                <h5 className={styles.title}> {movie.name} </h5>
                <p className={styles.inf}>
                {movie.trailerUrl}
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

export default ProfileMovieItem;