import styles from './Profile.module.css';

import * as authService from '../../services/authService';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ProfileMovieItem from './ProfileMovieItam';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        authService.getUserPosts(user._id)
            .then(result => {
                setMovies(result);
            });
    }, []);

    return (

        <section className={styles["section-catalog"]}>
            {movies.length > 0
                ? movies.map(movie => <ProfileMovieItem key={movie._id} movie={movie} />)
                :<h1 className={styles["no-movies"]}>No movies</h1>}
        </section>

    );
};

export default Profile;