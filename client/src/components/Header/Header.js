import styles from './Header.module.css';

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
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">All Movies</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">The Most Liked</a>
                </li>
                <li>
                    <a href="/">
                    Welcome,user
                    </a>
                </li>
                <li>
                    <a href="/">Logout</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
                <li>
                    <a href="/">Register</a>
                </li>
                </div>
            </ul>
        </nav>

    );
};

export default Header;