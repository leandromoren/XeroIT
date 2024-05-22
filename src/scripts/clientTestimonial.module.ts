"use client";
import styles from "../styles/ClientSlide.module.css";
import dynamic from "next/dynamic";

const {} = dynamic(import("../components/ClientSlide"), { ssr: false });
export default function ClientTestimonialJS() {
  const picContainer =
    document.querySelector<HTMLDivElement>(".testimonialPics");
  const textContainer = document.querySelector<HTMLDivElement>(
    ".testimonialContents"
  );

  if (picContainer && textContainer) {
    const picElements = Array.from(picContainer.children) as HTMLElement[];
    const textElements = Array.from(textContainer.children) as HTMLElement[];

    picElements.forEach((pic) => {
      pic.addEventListener("click", function () {
        picElements.forEach((elem) => {
          elem.classList.remove("active");
        });
        this.classList.add("active");

        const currentIndex = Number(this.id);

        textElements.forEach((text) => {
          text.classList.remove("active");
        });
        textElements[currentIndex].classList.add("active");
      });
    });
  }
}
