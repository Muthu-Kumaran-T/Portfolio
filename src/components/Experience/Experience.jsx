import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json"; // now contains platform, profileLink, description, imageSrc
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Progress</h2><br></br>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((item, id) => {
            return (
              <li key={id}>
                <a
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.historyItem}
                >
                  <img
                    src={getImageUrl(item.imageSrc)}
                    alt={`${item.platform} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{item.platform}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
