import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  const boxItem = [
    {
      number: "10 K+",
      title: "Year of Experience",
    },
    {
      number: "50 K+",
      title: "Year of Experience",
    },
    {
      number: "15 K+",
      title: "Year of Experience",
    },
  ];
  // console.log("let's check this work");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, brrave, and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum cum
          explicabo maxime nemo aperiam, odit ea recusandae ratione laudantium
          dignissimos ab tempore veritatis autem. Suscipit rem ullam vitae
          mollitia ut!
        </p>
        <div className={styles.boxes}>
          {boxItem.map((boxItems) => (
            <>
              <div className={styles.box}>
                <h1 key={boxItems.number}>{boxItems.number}</h1>
                <p>{boxItems.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img/about.png" alt="" fill />
      </div>
    </div>
  );
};
export default AboutPage;
