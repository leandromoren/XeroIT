"use client";
import "next-cloudinary/dist/cld-video-player.css";
import ClientSlide from "@/components/ClientSlide";
import JobUs from "@/components/JobUs";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import News from "@/components/News";
import BackgroundVideoHome from "@/components/BackgroundVideoHome";

export default function HomeVista() {
  return (
    <>
      <section>
        <BackgroundVideoHome />
      </section>
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
    </>
  );
}
