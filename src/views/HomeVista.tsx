"use client";
import Banner from "@/components/Banner";
import  CTASection  from "@/components/CTASection";
//import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import Heroe from "@/components/Heroe";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";
import "@/styles/global.css";


export default function HomeVista() {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <NavBar />
      </section>
      <section >
        <Heroe />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <CTASection />
      </section>
      {/* <section>
        <FAQ />
      </section> */}
      <section>
        <Footer />
      </section>
    </>
  );
}
