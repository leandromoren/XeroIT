"use client";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <a href="#">
              <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" />
            </a>
          </div>
          <div className={styles.footerText}>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className={styles.footerSocial}>
            <span>Follow us</span>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksHeading}>
            <h3>Useful Links</h3>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Expert Team</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSubscribe}>
          <div className={styles.footerSubscribeHeading}>
            <h3>Subscribe</h3>
          </div>
          <div className={styles.footerSubscribeText}>
            <p>
              Don't miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
          </div>
          <div className={styles.footerSubscribeForm}>
            <form>
              <input type="text" placeholder="Email Address" />
              <button type="submit">
                <i className="fab fa-telegram-plane"></i>
              </button>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
