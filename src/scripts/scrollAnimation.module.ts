export const ScrollTo = (id: string) => {

  // Agregar un event listener al clic del enlace
  document.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace
  
    // Obtener el elemento con el id "serviciosId"
    const serviciosSection: any = document.getElementById(id);
  
    // Calcular la distancia del elemento hasta la parte superior de la página
    const offsetTop = serviciosSection.offsetTop;
  
    // Función para hacer el scroll suave
    const scrollToElement = (targetPosition: any, duration = 1000) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: any = null;
  
      const animation = (currentTime: any) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
  
      const ease = (t:number, b:number, c:number, d:number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    // Hacer el scroll suave hacia el elemento
    scrollToElement(offsetTop);
  });
}

