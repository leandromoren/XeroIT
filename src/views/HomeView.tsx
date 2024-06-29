"use client";
import "next-cloudinary/dist/cld-video-player.css";
import ClientSlide from "@/components/ClientSlide";
import styles from "@/styles/HomeView.module.css";
import { TTexts } from "../utils/textConstants";
import JobUs from "@/components/JobUs";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import News from "@/components/News";

export default function HomeView() {
  const videoCloudinary = "https://res.cloudinary.com/dq0japns7/video/upload/v1715927295/office1_jxbjfr.mp4";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.videoBackground}>
          <video autoPlay loop muted playsInline>
            <source src={videoCloudinary} type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.videoOverlay}></div>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h1 className={styles.mainTitleTop}>{TTexts.mainTitleTop}</h1>
            <h2 className={styles.mainTitleBot}>{TTexts.mainTitleBot}</h2>
            <p className={styles.descripcionHomeView}>
              {TTexts.descripcionHomeView}
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>{TTexts.buttonHomeView}</button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ClientSlide />
      </section>
      <section>
        <News />
      </section>
      <section>
        <JobUs />
      </section>
      <section>
        <Formulario />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
