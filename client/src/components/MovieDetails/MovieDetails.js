import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { MovieContext } from "../../contexts/MovieContext";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { getDetails } = useContext(MovieContext);
  const [movie, setMovie] = useState({});

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getDetails(movieId).then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <>
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
            <p className={styles.paragraph}>{movie.description}</p>
            {user._id == movie.creator ? (
              <>
                <Link
                  to={`/movies/edit/${movie._id}`}
                  className={styles.buttons}
                >
                  edit
                </Link>
                <Link
                  to={`/movies/delete/${movie._id}`}
                  className={styles.buttons}
                >
                  delete
                </Link>
                <a
                  className={styles.buttons}
                  href={movie.trailerUrl}
                  target="_blank"
                >
                  Trailer
                </a>
              </>
            ) : (
              <a
                className={styles.buttons}
                href={movie.trailerUrl}
                target="_blank"
              >
                Trailer
              </a>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className={styles["be-comment-block"]}>
          <h1 className={styles["comments-title"]}>Comments (1)</h1>
          <div className={styles["be-comment"]}>
         
            <div className={styles["be-comment-content"]}>
              <span className={styles["be-comment-name"]}>
                <p>Ravi Sah</p>
              </span>
              <p className={styles["be-comment-text"]}>
                Pellentesque gravida tristique ultrices. Sed blandit varius
                mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor
                gravida turpis tristique efficitur.
              </p>
            </div>
          </div>
          <form className={styles["form-block"]}>
            <div className={styles.row}>
              <div className={styles["col-xs-12"]}>
                <div className={styles["form-group"]}>
                  <textarea
                    className={styles["form-input"]}
                    required=""
                    placeholder="Your text"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button className={styles["btn btn-primary pull-right"]}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
