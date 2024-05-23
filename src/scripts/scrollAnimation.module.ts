export default function scrollAnimation(idSection: string) {
  try {
    document.addEventListener("click", (event) => {
      // Verificar si el elemento clickeado tiene un atributo "href"
      const target = event.target as HTMLElement;
      if (target.hasAttribute("href")) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace

        const navSection: HTMLElement | null = document.getElementById(idSection);

        if (navSection) {
          // Calcular la posición del elemento "serviciosId" relativa a la página
          const offsetTop = navSection.offsetTop;

          // Función para realizar el scroll suave
          const scrollToElement = (targetPosition: number, duration = 1000) => {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime: number | null = null;

            const animation = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const run = ease(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) {
                requestAnimationFrame(animation);
              }
            };

            const ease = (t: number, b: number, c: number, d: number) => {
              t /= d / 2;
              if (t < 1) return (c / 2) * t * t + b;
              t--;
              return (-c / 2) * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
          };

          // Ejecutar la función de scroll suave
          scrollToElement(offsetTop);
        } else {
          console.error(
            "Element with ID " + idSection + " not found in the DOM."
          );
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}
