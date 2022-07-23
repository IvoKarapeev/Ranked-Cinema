import styles from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <img src="logohere" alt="" className={styles.logo} />
            {/* <img src="/static/images/imageOfText.png" alt="" className="braveEng" /> */}
            <hr />
            {/* NAVIGATION MENU */}
            <ul className={styles['nav-links']}>
                {/* NAVIGATION MENUS */}
                <div className={styles.menu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>All Movies</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/movies/ranked'>The Most Liked</Link>
                </li>
                <li>
                    <Link to='/welcome'>
                    Welcome,user
                    </Link>
                </li>
                <li>
                    <Link to='/logout'>Logout</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                </div>
            </ul>
        </nav>

    );
};

export default Header;