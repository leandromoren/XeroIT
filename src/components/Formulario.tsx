"use client";
import React, { useState } from "react";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const validateForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    const nombre: string = (window.document.getElementById('nombre') as HTMLInputElement).value;
    const email: string = (window.document.getElementById('email') as HTMLInputElement).value;
    const telefono: string = (window.document.getElementById('telefono') as HTMLInputElement).value;
    const mensaje: string = (window.document.getElementById('mensaje') as HTMLInputElement).value;

    let hasError = false;
    const newErrors = { nombre: "", email: "", telefono: "", mensaje: "" };

    if (nombre.trim() === '') {
      newErrors.nombre = 'El nombre es requerido.';
      hasError = true;
    }
    if (telefono.trim() === '') {
      newErrors.telefono = 'El teléfono es requerido.';
      hasError = true;
    }
    if (mensaje.trim() === '') {
      newErrors.mensaje = 'El mensaje es requerido.';
      hasError = true;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // Enviar formulario
      console.log("Formulario válido");
    }
  };

  return (
    <form method="POST">
      <div className={styles.formHeader}>
        <h1>Contáctanos</h1>
        <h4>¡A nosotros nos encanta escucharte!</h4>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={`${styles.inputWrapper} ${styles.wide}`}>
            <input className={styles.input} id="nombre" type="text" />
            <label className={styles.label}>Nombre</label>
            {errors.nombre && <p className={styles.errorMessage}>{errors.nombre}</p>}
          </div>
          <div className={`${styles.inputWrapper} ${styles.half}`}>
            <input className={styles.input} id="email" type="email" />
            <label className={styles.label}>Correo electrónico</label>
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
          </div>
          <div className={`${styles.inputWrapper} ${styles.half}`}>
            <input className={styles.input} id="telefono" type="number" />
            <label className={styles.label}>Tel.</label>
            {errors.telefono && <p className={styles.errorMessage}>{errors.telefono}</p>}
          </div>
          <div className={`${styles.inputWrapper} ${styles.wide}`}>
            <textarea className={styles.textarea} id="mensaje"></textarea>
            <label className={styles.label}>Mensaje</label>
            {errors.mensaje && <p className={styles.errorMessage}>{errors.mensaje}</p>}
          </div>
          <button onClick={validateForm} className={styles.submitBtn}>Enviar mensaje</button>
        </div>
      </div>
    </form>
  );
}
