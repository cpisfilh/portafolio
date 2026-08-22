import landingBalconesImage from "../assets/projects/landing-balconesplazahotel.png";
import landingPiurarentacarImage from "../assets/projects/landing-piurarentacar.png";
import landingHotelesenperuImage from "../assets/projects/landing-hotelesenperu.png";
import landingTalararentacarImage from "../assets/projects/landing-talararentacar.png";
import landingNorthPiurarentacarImage from "../assets/projects/landing-northpiurarentacar.png";
import landingAlojalosImage from "../assets/projects/landing-alojalos.png";
import appConfiguradorAxioma from "../assets/projects/app-configuradoraxioma.png";
import appFish from "../assets/projects/app-fish.png";
import appAdminInmobiliaria from "../assets/projects/app-admininmobiliaria.png";
import type { Project } from "@/interfaces/projects.types";

export const projectsData: Project[] = [
  {
    image: landingBalconesImage,
    title:"Hotel Balcones Plaza",
    description: "Landing page con motor de reservas y pasarela de pago izipay, desarrollada para un hotel de Cajamarca, Perú.",
    url: "https://balconesplaza.com",
    private: false,
    technologies: ["React + Vite", "TypeScript", "Tailwind"],
    challenges: "El desafío principal fue darme cuenta que no toda app debe ser desarrollada con React, marcando un antes y un después en mi análisis de proyectos. Al ser una app React no conseguíamos un SEO adecuado, pero investigando mas a fondo se pudo tener SEO decente. Por primera vez hice integración con pasarelas de pago como izipay y mercadopago. Optimización de imagenes a webp y lazy loading."
  },
  {
    image: landingPiurarentacarImage,
    title:"Piura Rent a car",
    description: "Landing page con formulario de cotizaciones para un servicio de alquiler de vehículos en Piura, Perú. Se desarrolló migrando de tecnologías el diseño existente y adaptándolo a las necesidades nuevas del proyecto. Indicar también que se usó una plantilla de metronic.",
    url: "https://piurarentacar.com",
    private: false,
    technologies: ["React + CRA", "TypeScript", "Bootstrap"],
    challenges: "El mayor trabajo fué darle vida a la cotización mediante un formulario (modal y validaciones). Filtro por marca y modelo en la sección de modelos disponibles. Aprendí a utilizar animaciones con framer-motion. La internacionalización fue un desafío adicional."
  },
  {
    image: landingTalararentacarImage,
    title:"Talara Rent a car",
    description: "Landing page con formulario de cotizaciones para un servicio de alquiler de vehículos en Talara, Perú",
    url: "https://talararentacar.com",
    private: false,
    technologies: ["React + Vite", "TypeScript", "Bootstrap"],
    challenges: "Este proyecto al ser similar al anterior, sólo cambiando la intención a otra ciudad, fue mas rápido de desarrollar."
  },
  {
    image: landingNorthPiurarentacarImage,
    title:"North Piura Rent a car",
    description: "Landing page con formulario de cotizaciones para un servicio de alquiler de vehículos en Piura, Perú. Esta es la web principal del cliente. Lo tome cuando ya estaba en una etapa avanzada, para ajustes y mejoras.",
    url: "https://northpiurarentacar.com",
    private: false,
    technologies: ["React + Vite", "TypeScript", "Bootstrap"],
    challenges: ""
  },
  {
    image: landingHotelesenperuImage,
    title:"Hoteles en Perú",
    description: "Sitio web para reservas directas de clientes con hoteles en Perú mediante Whatsapp. También funciona como vitrina, ya que afiliandote como hotelero te permite mostrar tus propiedades y recibir reservas.",
    url: "https://hotelesenperu.pe",
    private: false,
    technologies: ["Astro", "React", "TypeScript", "Tailwind"],
    challenges: "Mi primer proyecto con Astro, tuve todos los desafíos que competen aprenderlo desde cero. Después de hacer React para todo y descubrir este framework, me enamore y apoyo bastante esta idea. Pero lo mas sorprendente es darme cuenta que para esas partes dinámicas podría integrar React."
  },
  {
    image: landingAlojalosImage,
    title:"Alojalos.com",
    description: "Sitio web vitrina de alojamientos, enfocado en viajeros y clientes. Es un paso más a Hoteles en Perú, como su evolución",
    url: "https://alojalos.com",
    private: false,
    technologies: ["Astro", "React", "JavaScript", "TypeScript", "CSS"],
    challenges: "Fué un desafío enorme, el proyecto se me fué dado completamente hecho. Pero me preguntarás entonces ¿donde estuvo el desafío?, te explico, se generó todo el proyecto mediante inteligencia artificial y con un script de python se generaban las páginas estaticas y esto no convencía mucho y he aqui el desafío 'migrarlo a astro'. Tuve que ir por fases agregando scripts, hojas de estilos y hacerlo funcionar en Astro primero sin que se rompa nada, a partir de ahí lo fuí adaptando más y aún sigo trabajando en ello."
  },
  {
    image: appConfiguradorAxioma,
    title:"Configurador BackOffice Axioma Soluciones",
    description: "Aplicación web Backoffice para configurar los módulos de aplicativo Fish. Se usó la misma plantilla de metronic que ya había mencionado.",
    url: "",
    private: true,
    technologies: ["React + CRA", "TypeScript", "Bootstrap"],
    challenges: "El segundo proyecto más antiguo que mantengo actualmente. Aqui si tengo que ser mas técnico, porque si aprendí demasiado. En temas de formulario la plantilla tenía formik + yup, pero se está migrando a react-hook-form + zod porque investigando nos fijamos que en rendimiento es mejor. Se tienen las peticiones en varios archivos con cientos de líneas de código, lo que hace que sea mas difícil de mantener, de ahí en adelante mejor se creo una capa de servicio con una instancia de axios. La paginación está siendo manejada desde el frontend, lo cual no es correcto ya que debería ser del lado servidor, para ello se está migrando poco a poco y se crearon componentes para manejar esto y también filtro/ordenamiento."
  },
  {
    image: appFish,
    title:"Fish BackOffice",
    description: "CRM que va desde la captura de una cotización hasta la administración completa de alojamientos, clientes y reservas.",
    url: "",
    private: true,
    technologies: ["React + CRA", "TypeScript", "Bootstrap"],
    challenges: "El tercer proyecto más antiguo que mantengo actualmente. Aqui me traje el conocimiento y experiencia del proyecto Configurador BackOffice para no cometer los mismo errores, pero también se está migrando de a pocos. Para mejorar el consumo de la API se usó tanstack-query. Implementación de un dashboard complejo desde un diseño, primero tuve que separar en componentes y luego implementar la funcionalidad. Los desafíos mas importantes fueron crear Calendario de precios, calendario de disponibilidad y calendario de reservas. Propuse la migración de CRA a Vite ya que a día de hoy está deprecado y no se recomienda su uso."
  },
  {
    image: appAdminInmobiliaria,
    title:"Sistema inmobiliario",
    description: "Desarrollo fullstack propio de un sistema inmobiliario a medida para la gestión de clientes, predios, cuotas y pagos.",
    url: "",
    private: true,
    technologies: ["React", "TypeScript", "Tailwind", "NodeJS + Express", "PrismaORM", "MySQL"],
    challenges: "Teniendo toda la experiencia en Frontend antes mencionada, se me presentó la oportunidad de hacer este sistema para una inmobiliaria de Piura, Perú. El desafío principal fué estudiar lo necesario de Backend para implementar la lógica de negocio y la base de datos. Tardé días en el diseño y lo hice de la mejor manera posible. Al venir de React y typescript, me fuí por NodeJs + Express´. Tuve inconvenientes al guardar archivos, ya que me pidieron que los recibos generados se puedan descargar luego, así que usé Supabase para almacenar los archivos. Los pagos también fueron un desafío, ya qué el cronograma de pagos con sus respectivas cuotas se tuvieron que generar de forma dinámica mediante los datos de un formulario. Tengo muchas cosas que mejorar en este proyecto pero estoy orgulloso porque tengo reseñas positivas de mi cliente, es uno, pero me llena de alegría al ver que mi trabajo está siendo utilizado por una persona que realmente necesita mis servicios."
  }
]
