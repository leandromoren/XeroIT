"use client";
import Brands from "@/components/Brands";
import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Heroe from "@/components/Heroe";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

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
        <Stats />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
