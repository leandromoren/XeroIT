"use client"
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
         
            </section>
        </>
    )
}