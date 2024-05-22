'use client'
import styles from '../styles/Testimonials.module.css'

export default function Testimonials() {
    return (
        <>
        <div className={styles.testimonialSection}>
          <div className={styles.innerWidth}>
            <h1>Testimonios</h1>
            <div id="nav-tab" className={styles.testimonialPics}>
              <img
                src="https://i.postimg.cc/3xQK8g7V/p1.png"
                id="0"
                alt="img-1"
                data-index="0"
                className={styles.active}
              />
              <img
                src="https://i.postimg.cc/Tw1x70qL/p2.png"
                id="1"
                alt="img-2"
                data-index="1"
              />
              <img
                src="https://i.postimg.cc/wj5977jv/p3.png"
                id="2"
                alt="img-3"
                data-index="2"
              />
              <img
                src="https://i.postimg.cc/vmQb9b4v/p4.png"
                id="3"
                alt="img-4"
                data-index="3"
              />
            </div>

            <div className={styles.testimonialContents}>
              <div className={`${styles.testimonial} ${styles.active}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  consequatur et adipisci
                </p>
                <span className={styles.description}>Emy / Developer</span>
              </div>

              <div className={styles.testimonial}>
                <p>Lorem</p>
                <span className={styles.description}>Carla / Developer</span>
              </div>

              <div className={styles.testimonial}>
                <p>
                  Lorem similique, eum tenetur, numquam eligendi aliquid. Nulla
                  sit, cupiditate corporis labore, modi natus officiis
                  asperiores!
                </p>
                <span className={styles.description}>Thomas / Developer</span>
              </div>

              <div className={styles.testimonial}>
                <p>
                  Lorem ipsum dolorng elit. Ab consequatur et adipisci ut,
                  impedit cumque, similique, eum tenetur, numquam eligendi
                  aliquid. Nulla sit, cupiditate corporis labore, modi natus
                  officiis asperiores!
                </p>
                <span className={styles.description}>Monica / Developer</span>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}