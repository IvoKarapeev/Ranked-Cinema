import styles from "./MovieDetails.module.css";

const CommentItem = ({comment}) => {
    return (
        <div className={styles["be-comment-content"]}>
            <span className={styles["be-comment-name"]}>
            <p>{comment.user}</p>
            </span>
            <p className={styles["be-comment-text"]}>
            {comment.comment}
            </p>
        </div>
    );
};

export default CommentItem;