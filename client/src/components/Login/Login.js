import { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {
    const [userData,setUserData] = useState({
        username:'',
        password:''
    });

    const [errors,setErrors] = useState({});


    const onChange = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault();

        setUserData({
            name:'',
            description:'',
            imageUrl:'',
            trailerUrl:'',
            actors:'',
            category:'',
            author:''
        });
    };

    const minlength = (e,minL) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name].length < minL,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
        <div className={styles.container}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr className={styles.separator}/>
         <label htmlFor="username">
            <b>Username</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            value={userData.username}
            onChange={onChange}
            onBlur={(e) => minlength(e,5)}
        />
        {errors.username &&
            <div className={styles.validate}>Username should be at least 5 characters long</div>
        }
        <label htmlFor="password">
            <b>Password</b>
        </label>
        <input
            className={styles["input-text"]}
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            value={userData.password}
            onChange={onChange}
            onBlur={(e) => minlength(e,6)}
        />
        {errors.password &&
            <div className={styles.validate}>Password should be at least 6 characters long</div>
        }
        <hr className={styles.separator}/>
        <button type="submit" className={styles.loginbtn}>
            Login
        </button>
        </div>
    </form>
  

    );
};

export default Login;