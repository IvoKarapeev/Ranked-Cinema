import styles from "./CatalogMovie.module.css";

import MovieItam from "./MovieItem";

const CatalogMovies = ({movies}) => {


    return (
        <section className={styles["section-catalog"]}>
            {movies.length > 0
                ? movies.map(movie => <MovieItam key={movie._id} movie={movie} />)
                :<h1 className={styles["no-movies"]}>No movies</h1>}
        </section>
    );
};

export default CatalogMovies;
