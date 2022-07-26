import { useState } from 'react';
import styles from './CreateMovie.module.css';

const CreateMovie = () => {

    const [gameData,setGameData] = useState({
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
        setGameData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
    };

    const minlength = (e,limit) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: gameData[e.target.name].length < limit,
        }));
    };

    const httpValidation = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !gameData[e.target.name].startsWith('http')
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(gameData);
        setGameData({
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
            <h1>Create Movie</h1>
            <p>Please fill in this form to create movie.</p>
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
                value={gameData.name}
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
                value={gameData.description}
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
                value={gameData.imageUrl}
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
                value={gameData.trailerUrl}
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
                value={gameData.actors}
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
                value={gameData.category}
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
                value={gameData.author}
                onChange={onChange}
            />
            <hr className={styles.separator}/>
            <button type="submit" className={styles.createbtn}>
                Create Movie
            </button>
            </div>
        </form>
      

    );
};

export default CreateMovie;