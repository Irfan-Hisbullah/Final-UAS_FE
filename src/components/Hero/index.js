import styles from "./Hero.module.css";
import gambar from "./hero.svg"

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            Memonitoring Covid di Indonesia
          </h3>
          <p className={styles.hero__description}>
            Memonitor kasus Covid-19 diseluruh indonesia
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={gambar}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
