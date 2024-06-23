"use client";
import styles from "../styles/ContactForm.module.css";
import { TTexts } from "@/utils/textConstants";
export default function ContactForm() {
  return (
    <div className={styles.containerForm}>
      <div className={styles.leftContent}>
        <h2>{TTexts.mainTitleTop}</h2>
        <p>
          {TTexts.pTextForm}
        </p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.contactForm}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-XmpaBLVOKWX1Oy1nWPXygpiaiEGJSzw1lExP9lQZLDWgsw/viewform?embedded=true"
            width="640"
            height="1150"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}