"use client";
import styles from "../styles/Footer.module.css";
import servicesData from "../fixtures/servicesData.json";
import nosotrosData from "../fixtures/nosotrosData.json";
import publicacioneData from "../fixtures/publicacionesData.json";
import empleoData from "../fixtures/empleoData.json";
import { useEffect, useState } from "react";

export default function Footer() {
  const linkedinQavala: string = "https://linkedin.com/in/leandromoren";

  const [servicios, setServicios] = useState(servicesData);

  const [nosotros, setNosotros] = useState(nosotrosData);

  const [publicaiones, setPublicaciones] = useState(publicacioneData);

  const [empleo, setEmpleo] = useState(empleoData);

  useEffect(() => {
    setServicios(servicesData);
    setNosotros(nosotrosData);
    setEmpleo(empleoData);
    setPublicaciones(publicacioneData);
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Servicios</h3>
          <ul>
            {servicios.map((e) => (
              <li key={e.id}>
                <a href={e.href}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Nosotros</h3>
          <ul>
            {nosotros.map((e) => (
              <li key={e.id}>
                <a href={e.href}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Publicaciones</h3>
          <ul>
            {publicaiones.map((e) => (
              <li key={e.id}>
                <a href={e.href}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Empleo</h3>
          <ul>
            {empleo.map((e) => (
              <li key={e.id}>
                <a href={e.href}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>©2024 Getronics</p>
        <div className={styles.footerBottomRight}>
          <a href="/politica-de-privacidad">Política de privacidad</a> ·
          <a href="/certificaciones">Certificaciones</a> ·
          <a href="/politicas">Políticas</a> ·
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
        </div>
        <div className={styles.footerSocial}>
          <a target="_blank" href={linkedinQavala}>
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
