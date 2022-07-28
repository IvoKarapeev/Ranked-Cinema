import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

import styles from './Register.module.css';

const Register = () => {

    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const [userData,setUserData] = useState({
        firstName:'',
        secondName:'',
        username:'',
        password:'',
        repeatPassword:''
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

        
        if (userData.password !== userData.repeatPassword) {
            return;
        };
        
        authService.register(userData.firstName, userData.secondName, userData.username, userData.password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            })
            .catch(() => {
                navigate('/');
            })


        setUserData({
            firstName:'',
            secondName:'',
            username:'',
            password:'',
            repeatPassword:''
        });
    };

    const minlength = (e,minL) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name].length < minL,
        }));
    };

    const equalPasswords = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name] !== userData.password
        }));
    }

    return (
        <form onSubmit={onSubmit}>
        <div className={styles.container}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr className={styles.separator}/>
        <label htmlFor="firstName">
            <b>First Name</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={onChange}
            onBlur={(e) => minlength(e,2)}
        />
        {errors.firstName &&
            <div className={styles.validate}>First Name should be at least 2 characters long</div>
        }
         <label htmlFor="secondName">
            <b>secondName</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter Second Name"
            name="secondName"
            id="secondName"
            value={userData.secondName}
            onChange={onChange}
            onBlur={(e) => minlength(e,2)}
        />
        {errors.secondName &&
        <div className={styles.validate}>Second Name should be at least 2 characters long</div>
        }
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
        <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
        </label>
        <input
            className={styles["input-text"]}
            type="password"
            placeholder="Enter Password"
            name="repeatPassword"
            id="repeatPassword"
            value={userData.repeatPassword}
            onChange={onChange}
            onBlur={(e) => equalPasswords(e)}
        />
        {errors.repeatPassword &&
            <div className={styles.validate}>Passwords must be equal</div>
        }
        <hr className={styles.separator}/>
        <button type="submit" className={styles.registerbtn}>
            Login
        </button>
        </div>
    </form>
  

    );
};

export default Register;