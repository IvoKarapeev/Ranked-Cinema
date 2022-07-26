import { useContext } from "react";
import MovieItam from "./MovieItem";
import { MovieContext } from "../../contexts/MovieContext";

import styles from "./CatalogMovie.module.css";

const CatalogMovies = () => {

    const { movies } = useContext(MovieContext);

    return (
        <section className={styles["section-catalog"]}>
            {movies.length > 0
                ? movies.map(movie => <MovieItam key={movie._id} movie={movie} />)
                :<h1 className={styles["no-movies"]}>No movies</h1>}
        </section>
    );
};

export default CatalogMovies;
