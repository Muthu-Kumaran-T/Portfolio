import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Muthu</h1>
        <p className={styles.description}>
          Currently pursuing a B.E in Computer Science and Engineering at R.M.K Engineering College
        </p>
        <p className={styles.description}>
          Aspiring Full-Stack Software Engineer | Passionate About Technology, Innovation, and Problem Solving
        </p>
        <a href="mailto:muthurock1352@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/MuthuImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
