import type { Experience } from "@/interfaces/experience.types";

export const experienceData: Experience[] = [
    {
        position: "Frontend Developer",
        company: "Axioma Soluciones",
        fromDateText: "Marzo 2023",
        toDateText: "Actualidad",
        current: true,
        description:
            [
              "Desarrollo y mantenimiento de aplicaciones web frontend utilizando React, TypeScript y tecnologías modernas del ecosistema JavaScript.",
              "Implementación y gestión de estado global utilizando Redux Toolkit, Context API y Zustand.",
              "Diseño e implementación de dashboards interactivos y paneles administrativos para optimizar la gestión y visualización de información.",
              "Desarrollo de funcionalidades avanzadas de visualización de datos, incluyendo tablas, filtros, paginación y calendarios, mejorando la eficiencia operativa de los usuarios.",
              "Implementación de interfaces responsivas, reutilizables y escalables para plataformas de reservas de hoteles, PMS, renta de autos, búsqueda hotelera y envío de remesas.",
              "Integración con APIs REST y servicios de terceros, incluyendo pasarelas de pago como Mercado Pago e Izipay.",
              "Optimización de rendimiento y SEO técnico en aplicaciones públicas, mejorando la indexación y visibilidad en motores de búsqueda.",
              "Implementación de pipelines de CI/CD con GitHub Actions y runners self-hosted para automatizar procesos de construcción y despliegue.",
              "Diseño e implementación de arquitecturas frontend basadas en componentes reutilizables,promoviendo la reutilización de código, la mantenibilidad y la escalabilidad de las aplicaciones.",
              "Migración de formularios de Formik + Yup a React Hook Form + Zod para mejorar el rendimiento, simplificar las validaciones y facilitar el mantenimiento del código.",
              "Participación puntual en proyectos con SAP Hybris Commerce y SAP CPI."
            ]
    },
    {
        position: "FullStack Developer",
        company: "Pidia SRL",
        fromDateText: "Junio 2024",
        toDateText: "Diciembre 2024",
        current: false,
        description:[
          "Mantenimiento y extensión de funcionalidades frontend en sistema legacy (jQuery + Symfony).",
          "Participación en mantenimiento y mejora de módulos existentes del sistema.",
          "Soporte en pruebas, validación de funcionalidades y corrección de incidencias."
        ]
    },
];
