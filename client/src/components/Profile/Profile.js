import styles from "./Profile.module.css";

import * as authService from "../../services/authService";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileMovieItem from "./ProfileMovieItam";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    authService.getUserPosts(user._id).then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <>
      <header className={styles["post-header"]}>
        <h1 className={styles["title-text"]}>{user.username}</h1>
        <p className={styles.text}>
          Welcome to your own profile. Here you can see all the movies you have
          shared with others! You can see how many views each one has, what
          comments there are or even change or delete one of them if necessary.
          Enjoy !
        </p>
      </header>
      <section className={styles["section-catalog"]}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <ProfileMovieItem key={movie._id} movie={movie} />
          ))
        ) : (
          <h1 className={styles["no-movies"]}>No movies</h1>
        )}
      </section>
    </>
  );
};

export default Profile;
