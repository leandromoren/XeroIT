"use cliente";
import styles from "@/styles/JobUs.module.css";
import { TTexts } from "@/utils/textConstants";

export default function JobUs() {
  const IMAGE_PATH = "images/handsJob.jpg"

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={IMAGE_PATH} />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{TTexts.mainTitleJob}</h2>
          <strong className={styles.strongText}>{TTexts.strongTextJob}</strong>
          <div className={styles.containerP}>
            <p className={styles.pText}>{TTexts.pTextJob}</p>
          </div>
          <button className={styles.btn}>{TTexts.btnJob}</button>
        </div>
      </div>
    </div>
  );
}
