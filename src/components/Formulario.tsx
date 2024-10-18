"use client";
import React from "react";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
  return (
    <form>
      <div className={styles.formHeader}>
        <h1>Contáctanos</h1>
        <h4>¡A nosotros nos encanta escucharte!</h4>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={`${styles.inputWrapper} ${styles.wide}`}>
            <input className={styles.input} type="text" required />
            <label className={styles.label}>Nombre</label>
          </div>
          <div className={`${styles.inputWrapper} ${styles.half}`}>
            <input className={styles.input} type="email" required />
            <label className={styles.label}>Correo electrónico</label>
          </div>
          <div className={`${styles.inputWrapper} ${styles.half}`}>
            <input className={styles.input} type="number" required />
            <label className={styles.label}>Cel. Tel.</label>
          </div>
          <div className={`${styles.inputWrapper} ${styles.wide}`}>
            <textarea className={styles.textarea} required></textarea>
            <label className={styles.label}>Mensaje</label>
          </div>
          <button className={styles.submitBtn}>Enviar mensaje</button>
        </div>
      </div>
    </form>
  )
}
