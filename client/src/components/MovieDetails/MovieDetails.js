import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { MovieContext } from "../../contexts/MovieContext";
import CommentItem from "./CommentItem";

import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
    const { movieId } = useParams();
    const { getDetails, getMovieComments, postMovieComment } = useContext(MovieContext);
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        getDetails(movieId).then((res) => {
        setMovie(res);
        });
    }, []);

    useEffect(() => {
        getMovieComments(movieId).then((res) => {
        res.comments.forEach((element) => {
            const user = res.users.find((x) => x._id == element.user);
            if (user) {
            const comment = {
                _id: element._id,
                user: user.username,
                comment: element.comment,
            };

            setComments((oldComments) => [...oldComments, comment]);
            }
        });
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const {comment} = Object.fromEntries(new FormData(e.target));

        postMovieComment(movieId,comment)
            .then(res => {

                const newComment = {
                    _id:res.comments[res.comments.length - 1]._id,
                    user:res.comments[res.comments.length - 1].user.username,
                    comment:res.comments[res.comments.length - 1].comment
                };

                setComments(oldComments => [
                    ...oldComments,
                    newComment
                ]);
            })
    }

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
          <h1 className={styles["comments-title"]}>
            Comments ({comments.length})
          </h1>
          <div className={styles["be-comment"]}>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
              ))
            ) : (
              <h2 className={styles["no-comment"]}>No comments yet</h2>
            )}
          </div>
          {user.AccessToken 
            &&
            <form className={styles["form-block"]} onSubmit={onSubmit}>
                <div className={styles.row}>
                <div className={styles["col-xs-12"]}>
                    <div className={styles["form-group"]}>
                    <textarea
                        className={styles["form-input"]}
                        required=""
                        placeholder="Your text"
                        defaultValue={""}
                        name="comment"
                    />
                    </div>
                </div>
                <button className={styles["btn btn-primary pull-right"]}>
                    submit
                </button>
                </div>
            </form>}
         
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
