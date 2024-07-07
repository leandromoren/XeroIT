"use client";
import ArbolEquipo from "@/components/ArbolEquipo";
import React from "react";
import styles from "../styles/ArbolEquipo.module.css";

export default function NuestroEquipoVista() {
  return (
    <>
      <section className={styles.containerTreeSection}>
        <ArbolEquipo />
      </section>
      <section>
        {/* Agregar alguna descripcion de los valores del equipo o la vida de cada uno, comentarios de ellos. testimonios*/}
      </section>
    </>
  );
}
