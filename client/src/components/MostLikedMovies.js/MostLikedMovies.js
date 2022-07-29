import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import LikedMovieItam from "./LikedMovieItam";

import styles from "./MostLikedMovies.module.css";

const MostLikedMovies = () => {
  const { movies } = useContext(MovieContext);

  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    let liked = [];

    for (const movie of movies) {
      liked.push(movie);
    }

    liked.sort((a, b) => {
      return b.views - a.views;
    });

    setLikedMovies(liked);
  }, [movies]);

  return (
    <>
      <header className={styles["post-header"]}>
        <h1 className={styles["title-text"]}>Most Liked Movies</h1>
        <p className={styles.text}>
          Welcome, here are the most watched movies on our site. Each movie has
          its own fans and is different from the others, but here you can find
          the most famous movies of the moment. Of course, if you recently
          watched a movie that intrigued you and you liked it and you don't find
          it in our ranking, you can share it and more people can find it. Enjoy
          watching!
        </p>
      </header>
      <section className={styles["section-catalog"]}>
        {movies.length > 0 ? (
          likedMovies.map((movie) => (
            <LikedMovieItam key={movie._id} movie={movie} />
          ))
        ) : (
          <h1 className={styles["no-movies"]}>No movies</h1>
        )}
      </section>
    </>
  );
};

export default MostLikedMovies;
