"use client";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Heroe from "@/components/Heroe";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";

export default function HomeVista() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <Heroe />
      </section>
      <section>
        <Brands />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
