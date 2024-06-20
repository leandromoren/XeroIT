"use client";
import { TTexts } from "@/utils/textConstants";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const linkLinkedin = "";
  const linkFacebook = "";
  const linkInstagram = "";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <a href="/">
              <strong className={styles.footerLogo}>QAVALA</strong>
            </a>
          </div>
          <div className={styles.footerText}>
            <p>
              Somos curiosos, tenaces y valientes, lo que nos permite ver
              siempre el cambio como una oportunidad. Cultivamos y desarrollamos
              el talento. Buscamos tu pasión para hacerlo crecer
            </p>
          </div>
          <div className={styles.footerSocial}>
            <span>Seguinos</span>
            <a href={linkFacebook}>
              <i className="bx bxl-facebook"></i>
            </a>
            <a href={linkInstagram}>
              <i className="bx bxl-instagram"></i>
            </a>
            <a href={linkLinkedin}>
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksHeading}>
            <h3>{`Gu\u00EDa`}</h3>
          </div>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/nosotros">Sobre nosotros</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/equipo">Equipo</a>
            </li>
            <li>
              <a href="/contacto">{`Cont\u00E1ctanos`}</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSubscribe}>
          <div className={styles.footerSubscribeHeading}>
            <h3>Suscribete</h3>
          </div>
          <div className={styles.footerSubscribeText}>
            <p>{TTexts.subscribeText}</p>
          </div>
          <div className={styles.footerSubscribeForm}>
            <form>
              <input type="text" placeholder="Email Address" />
              <button type="submit">Suscribir</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          <p>
            Copyright &copy; 2018, All Right Reserved{" "}
            <a href="/">QAVALA</a>
          </p>
        </div>
        <div className={styles.footerMenu}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/terminos-servicio">Terminos del servicio</a>
            </li>
            <li>
              <a href="/politicas-de-privacidad">Politica de privacidad</a>
            </li>
            <li>
              <a href="/politicas">Politicas</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
