import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <nav className={styles.navbar}>
            <img src="/images/logo.png" alt="" className={styles.logo} />
            <hr />
            <ul className={styles['nav-links']}>
                <div className={styles.menu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>All Movies</Link>
                </li>
                <li>
                    <Link to='/movies/ranked'>The Most Liked</Link>
                </li>
                {user.AccessToken   
                    ?
                    <>
                        <li>
                        <Link to='/movies/create'>Create Movie</Link>
                        </li>
                        <li>
                            <Link to='/welcome'>
                            Welcome,{user.username}
                            </Link>
                        </li>
                        <li>
                            <Link to='/logout'>Logout</Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </>
                }
                </div>
            </ul>
        </nav>

    );
};

export default Header;