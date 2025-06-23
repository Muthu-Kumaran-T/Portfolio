import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, screenshots },
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {demo ? (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        ) : screenshots ? (
          <button onClick={() => setShowModal(true)} className={styles.link}>
            Screenshots
          </button>
        ) : null}

        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
            <div className={styles.screenshotGallery}>
              {screenshots.map((img, index) => (
                <img
                  key={index}
                  src={getImageUrl(img)}
                  alt={`Screenshot ${index + 1}`}
                  className={styles.modalImage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
