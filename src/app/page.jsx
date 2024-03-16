/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat
          quia hic, harum a esse voluptatum, saepe odit omnis quidem velit. Non
          sapiente consequuntur nisi maiores obcaecati ullam, fugit laboriosam?
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/img/brands.png" fill className={styles.brand} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img/hero.gif" fill className={styles.hero} />
      </div>
    </div>
  );
};

export default Home;