"use client";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <a href="#">
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
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksHeading}>
            <h3>Enlaces</h3>
          </div>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre nosotros</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Equipo</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSubscribe}>
          <div className={styles.footerSubscribeHeading}>
            <h3>Suscribete</h3>
          </div>
          <div className={styles.footerSubscribeText}>
            <p>Suscribete para obtener las ultimas novedades sobre QAVALA</p>
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
            <a href="https://codepen.io/anupkumar92/">QAVALA</a>
          </p>
        </div>
        <div className={styles.footerMenu}>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Terminos del servicio</a>
            </li>
            <li>
              <a href="#">Politica de privacidad</a>
            </li>
            <li>
              <a href="#">Politicas</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
