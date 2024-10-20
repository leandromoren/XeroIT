"use client";
import "next-cloudinary/dist/cld-video-player.css";
import ClientSlide from "@/components/ClientSlide";
//import JobUs from "@/components/JobUs";
import Formulario from "@/components/Formulario";
import BackgroundVideoHome from "@/components/BackgroundVideoHome";
import Comunidades from "@/components/Comunidades";

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
       <Comunidades />
      </section>
      <section>
        {/*<JobUs /> */}
      </section>
      <section>
        <Formulario />
      </section>
    </>
  );
}
