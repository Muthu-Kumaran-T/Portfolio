import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/CartoonImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3><br></br>
              <p><strong>B.E CSE:</strong> R.M.K. Engineering College ,Year:2022-2026</p><br></br>
              <p><strong>Class 12th:</strong> Sri Ram Dayal Khemka Vivenkananda Vidyalaya ,Year:2021-2022</p><br></br>
              <p><strong>Class 10th:</strong> Sri Ram Dayal Khemka Vivenkananda Vidyalaya ,Year:2019-2020</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Internship</h3><br></br>
              <p><strong>May 2023 - May 2023:</strong> YBI Foundation - Data Science & Machine Learning</p>
              <p><strong>June 2024 - July 2024:</strong> Trios Technologies - Machine Learning</p>
              <p><strong>June 2025 - July 2025:</strong> StableCode - Frontend & Backend Projects</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3><br></br>
              <p><strong>1.</strong> Programming in Java (NPTEL)</p>
              <p><strong>2.</strong> The Joy of Computing Using Python (NPTEL)</p>
              <p><strong>3.</strong> Introduction of Internet of Things (NPTEL)</p>
              <p><strong>4.</strong> Oracle AI Vector Search Certified Professional</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
