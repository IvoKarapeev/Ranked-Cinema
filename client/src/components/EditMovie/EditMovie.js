import { useState } from 'react';
import styles from './EditMovie.module.css';


const EditMovie = () => {

    const [movieData,setMovieData] = useState({
        name:'',
        description:'',
        imageUrl:'',
        trailerUrl:'',
        actors:'',
        category:'',
        author:''
    });

    const [errors,setErrors] = useState({});


    const onChange = (e) => {
        setMovieData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
    };

    const minlength = (e,limit) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: movieData[e.target.name].length < limit,
        }));
    };

    const httpValidation = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !movieData[e.target.name].startsWith('http')
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(movieData);

        setMovieData({
            name:'',
            description:'',
            imageUrl:'',
            trailerUrl:'',
            actors:'',
            category:'',
            author:''
        });
    };


    return (
        <form onSubmit={onSubmit}>
            <div className={styles.container}>
            <h1>Edit Movie</h1>
            <p>Edit your movie!</p>
            <hr className={styles.separator}/>
            <label htmlFor="movieName">
                <b>Movie Name</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Movie Name"
                name="name"
                id="name"
                value={movieData.name}
                onChange={onChange}
                onBlur={(e) => minlength(e,2)}
            />
            {errors.name &&
                <div className={styles.validate}>Name should be at least 2 characters long</div>
            }
             <label htmlFor="description">
                <b>Description</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Description"
                name="description"
                id="description"
                value={movieData.description}
                onChange={onChange}
                onBlur={(e) => minlength(e,10)}
            />
            {errors.description &&
                <div className={styles.validate}>Description should be at least 10 characters long</div>
            }
             <label htmlFor="imageUrl">
                <b>Movie Image</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter imageUrl"
                name="imageUrl"
                id="imageUrl"
                value={movieData.imageUrl}
                onChange={onChange}
                onBlur={(e) => httpValidation(e)}
            />
            {errors.imageUrl &&
                <div className={styles.validate}>imageUrl should starts with http/https</div>
            }
            <label htmlFor="trailerUrl">
                <b>Movie Trailer</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter trailerUrl"
                name="trailerUrl"
                id="trailerUrl"
                value={movieData.trailerUrl}
                onChange={onChange}
                onBlur={(e) => httpValidation(e)}
            />
            {errors.trailerUrl &&
                <div className={styles.validate}>trailerUrl should starts with http/https</div>
            }
            <label htmlFor="actors">
                <b>Actors</b>
            </label>
            <input
                className={styles["input-text"]}
                type="text"
                placeholder="Enter Actors"
                name="actors"
                id="actors"
                value={movieData.actors}
                onChange={onChange}
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
                value={movieData.category}
                onChange={onChange}
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
                value={movieData.author}
                onChange={onChange}
            />
            <hr className={styles.separator}/>
            <button type="submit" className={styles.editbtn}>
                Edit Movie
            </button>
            </div>
        </form>
    );
};

export default EditMovie;