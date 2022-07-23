import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles['home-background']}>
            <div className={styles['home-information']}>
                Welcome to Ranked-Cinema! Here you can find all you're favorite
                movies! You can comment and share with us what was you're experience when 
                you saw them for the first time. Or you can add you're favorite movies if they
                are not in our catalog of movies. Also you can see which are the most 
                popular movies now in our ranking page. Have fun and we hope you like this
                page! 
            </div>
        </section>
    );
};

export default Home;
