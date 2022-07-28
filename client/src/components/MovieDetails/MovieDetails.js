import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieContext';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {

    const { movieId } = useParams();
    const { getDetails } = useContext(MovieContext);
    const [movie,setMovie] = useState({});

    useEffect(() => {
        getDetails(movieId)
            .then(res => {
                setMovie(res);
            });
    },[]);

    return (
        <div className={styles.container}>
          <div className={styles.card}>
            <img
              className={styles.imageUrl}
              src={movie.imageUrl}
              alt={movie.name}
            />
            <div className={styles["card__details"]}>
              <span className={styles.tag}>{movie.category}</span>
              <span className={styles.tag}>views: {movie.views}</span>
              <div className={styles.name}>{movie.name}</div>
              <p className={styles.paragraph}>
                {movie.description}
              </p>
              <a className={styles.buttons} href={movie.trailerUrl} target="_blank">Trailer</a>.
            </div>
          </div>
        </div>      
    );
};

export default MovieDetails;