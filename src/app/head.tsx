export default function Head() {
  return (
    <header>
      <title>{obtenerTituloEnProduccion()}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="description" content="Consultora IT" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://qavala.vercel.app" />
      <meta property="og:title" content="Qavala" />
      <meta property="og:site_name" content="Qavala" />
      <link rel="icon" href="../assets/favicon.ico" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    </header>
  );
}

function obtenerTituloEnProduccion() {
  const fullUrl = window.location.href;
  const BASE_PATH = "http://qavala.vercel.app/";
  switch (fullUrl) {
    case BASE_PATH:
      return "Inicio";
    case BASE_PATH + "nosotros/nuestro-equipo":
      return "Nuestro equipo";
    case BASE_PATH + "nosotros/nuestra-historia":
      return "Nuestra historia";
    case BASE_PATH + "nosotros/nuestros-valores":
      return "Nuestros valores";
    case BASE_PATH + "nosotros/nuestras-oficinas":
      return "Nuestras oficinas";
    case BASE_PATH + "nosotros/partners":
      return "Partners";
    case BASE_PATH +"publicaciones/historia-de-clientes":
      return "Historia de clientes";
    case BASE_PATH + "publicaciones/eventos":
      return "Eventos";
    case BASE_PATH + "empleo/programa-de-practicas":
      return "Programa de practicas";
    case BASE_PATH + "empleo/vacantes":
      return "Vacantes";
    case BASE_PATH + "empleo/trabaja-con-nosotros":
      return "Trabaja con nosotros";
    case BASE_PATH + "empleo/subir-curriculum":
      return "Subir curriculum";
    case BASE_PATH + "servicios/software-testing":
      return "Software testing";
    case BASE_PATH + "servicios/reclutamiento-it":
      return "Reclutamiento IT";
    case BASE_PATH + "servicios/gestion-de-proyectos":
      return "Gestion de proyectos";
    case BASE_PATH + "servicios/ux-ui":
      return "UX / UI";
    case BASE_PATH + "servicios/desarrollo-software":
      return "Desarrollo de software";
  }
}
