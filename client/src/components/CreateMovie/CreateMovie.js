import styles from './CreateMovie.module.css';

const CreateMovie = () => {
    return (
        <form action="action_page.php">
            <div className={styles.container}>
            <h1>Create Game</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="movieName">
                <b>Movie Name</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Movie Name"
                name="firstName"
                id="firstName"
            />
             <label htmlFor="description">
                <b>Description</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Description"
                name="description"
                id="description"
            />
             <label htmlFor="imageUrl">
                <b>Movie Image</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter imageUrl"
                name="imageUrl"
                id="imageUrl"
            />
            <label htmlFor="trailerUrl">
                <b>Movie Trailer</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter trailerUrl"
                name="trailerUrl"
                id="trailerUrl"
            />
            <label htmlFor="actors">
                <b>Actors</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Actors"
                name="actors"
                id="actors"
            />
             <label htmlFor="category">
                <b>Category</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Category"
                name="category"
                id="category"
            />
            <label htmlFor="author">
                <b>Author</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Moive Author"
                name="author"
                id="author"
            />
            <hr/>
            <button type="submit" className={styles.createbtn}>
                Create Game
            </button>
            </div>
        </form>
      

    );
};

export default CreateMovie;