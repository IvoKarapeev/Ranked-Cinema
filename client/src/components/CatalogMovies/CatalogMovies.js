import styles from "./CatalogMovie.module.css";

const CatalogMovies = () => {
  return (
    <section className={styles["section-catalog"]}>
        <div className={styles.center}>
            <div className={styles["property-card"]}>
            <a href="#">
                <div className={styles["property-image"]}>
                <div className={styles["property-image-title"]}>
                    {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
                </div>
                </div>
            </a>
            <div className={styles["property-description"]}>
                <h5 className={styles.title}> Card Title </h5>
                <p className={styles.inf}>
                Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
                Bingo. Lorem Ipum doth be hard.
                </p>
            </div>
            <a href="#">
                <div className={styles["property-social-icons"]}>
                {/* I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions */}
                </div>
            </a>
            </div>
        </div>
    </section>
  );
};

export default CatalogMovies;
