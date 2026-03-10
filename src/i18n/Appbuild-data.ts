import {
  Code,
  Palette,
  Globe,
  Zap,
  Monitor,
  Smartphone,
  Users,
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";

type Lang = "es" | "en";

export const appBuildTexts = {
  es: {
    hero: {
      title: "TU SOFTWARE",
      subtitle: "Crea, inventa actualiza o integra tu solución a la medida que diga tu alma.",
      description:
        "Nuestro trabajo es ofrecer el mejor software para tu negocio, puedes contar con una integración completa:",
    },
    services: [
      {
        id: "software-business",
        title: "SOFTWARE PARA TU NEGOCIO",
        description:
          "Desarrollamos software personalizado que se adapta perfectamente a las necesidades específicas de tu negocio, desde aplicaciones web hasta sistemas empresariales completos.",
        features: [
          "Aplicaciones Web Personalizadas",
          "Apps Móviles Nativas",
          "Sistemas Empresariales",
          "Soluciones Escalables",
        ],
        stats: [
          { number: "50%", label: "Mejora de rendimiento" },
          { number: "98%", label: "Satisfacción Cliente" },
          { number: "24/7", label: "Soporte Técnico" },
        ],
      },
      {
        id: "ui-ux",
        title: "DISEÑO UI/UX",
        description:
          "Creamos experiencias digitales excepcionales con diseños intuitivos y atractivos que cautivan a tus usuarios y mejoran la interacción con tu marca.",
        features: [
          "Diseño de Interfaces Modernas",
          "Investigación de Usuarios",
          "Prototipos Interactivos",
          "Testing de Usabilidad",
        ],
        stats: [
          { number: "80%", label: "Reducción de errores de flujo" },
          { number: "85%", label: "Mejora en UX" },
          { number: "+35%", label: "Aceptación de usuarios" },
        ],
      },
      {
        id: "digital-identity",
        title: "IDENTIDAD DIGITAL",
        description:
          "Construimos tu presencia digital completa, desde el branding hasta la implementación web, creando una identidad coherente y memorable en todos los canales.",
        features: [
          "Branding Completo",
          "Sitios Web Corporativos",
          "Estrategia Digital",
          "Posicionamiento de Marca",
        ],
        stats: [
          { number: "100%", label: "Diseño Modular" },
          { number: "+80%", label: "Intención de Interacción" },
          { number: "<3s", label: "Tiempo de Carga (LCP)" },
        ],
      },
      {
        id: "automation",
        title: "AUTOMACIÓN",
        description:
          "Automatizamos procesos empresariales para optimizar la eficiencia, reducir costos y liberar tiempo valioso que puedes invertir en hacer crecer tu negocio.",
        features: [
          "Automatización de Procesos",
          "Ahorro de Tiempo",
          "Optimización de Recursos",
          "Integración de Sistemas",
        ],
        stats: [
          { number: "+20", label: "Procesos creados" },
          { number: "80%", label: "Ahorro Tiempo" },
          { number: "-70%", label: "Tareas Manuales" },
        ],
      },
    ],
    cta: {
      title: "¿Listo para transformar tu negocio?",
      description:
        "Contáctanos para descubrir cómo podemos hacer realidad tu visión digital con soluciones innovadoras y personalizadas",
      button: "Comenzar Proyecto",
    },
  },
  en: {
    hero: {
      title: "YOUR SOFTWARE",
      subtitle: "Create, invent, update, or integrate your custom solution with purpose.",
      description:
        "Our job is to offer the best software for your business, with complete integration you can rely on:",
    },
    services: [
      {
        id: "software-business",
        title: "SOFTWARE FOR YOUR BUSINESS",
        description:
          "We develop custom software tailored perfectly to your business needs, from web applications to full enterprise systems.",
        features: [
          "Custom Web Applications",
          "Native Mobile Apps",
          "Enterprise Systems",
          "Scalable Solutions",
        ],
        stats: [
          { number: "50%", label: "Performance Improvement" },
          { number: "98%", label: "Client Satisfaction" },
          { number: "24/7", label: "Technical Support" },
        ],
      },
      {
        id: "ui-ux",
        title: "UI/UX DESIGNS",
        description:
          "We create exceptional digital experiences with intuitive and attractive designs that engage your users and improve interaction with your brand.",
        features: [
          "Modern Interface Design",
          "User Research",
          "Interactive Prototypes",
          "Usability Testing",
        ],
        stats: [
          { number: "80%", label: "Reduction in Flow Errors" },
          { number: "85%", label: "UX Improvement" },
          { number: "+35%", label: "User Acceptance" },
        ],
      },
      {
        id: "digital-identity",
        title: "DIGITAL IDENTITY",
        description:
          "We build your full digital presence, from branding to web implementation, creating a consistent and memorable identity across all channels.",
        features: [
          "Full Branding",
          "Corporate Websites",
          "Digital Strategy",
          "Brand Positioning",
        ],
        stats: [
          { number: "100%", label: "Modular Design" },
          { number: "+80%", label: "Interaction Intent" },
          { number: "<3s", label: "Load Time (LCP)" },
        ],
      },
      {
        id: "automation",
        title: "AUTOMATION",
        description:
          "We automate business processes to optimize efficiency, reduce costs, and free valuable time that you can invest in growing your business.",
        features: [
          "Process Automation",
          "Time Savings",
          "Resource Optimization",
          "System Integration",
        ],
        stats: [
          { number: "+20", label: "Processes Created" },
          { number: "80%", label: "Time Savings" },
          { number: "-70%", label: "Manual Tasks" },
        ],
      },
    ],
    cta: {
      title: "Ready to transform your business?",
      description:
        "Contact us to discover how we can bring your digital vision to life with innovative and personalized solutions",
      button: "Start Project",
    },
  },
};

export const appBuildVisualConfig = {
  services: [
    {
      id: "software-business",
      icon: Code,
      bgGradient: "from-blue-900 via-indigo-900 to-cyan-900",
      cardGradient: "from-blue-600 to-cyan-600",
      floatingColors: ["bg-blue-500/20", "bg-indigo-500/20", "bg-cyan-500/20"],
      textColor: "text-white",
      featureIcons: [Monitor, Smartphone, Users, TrendingUp],
    },
    {
      id: "ui-ux",
      icon: Palette,
      bgGradient: "from-cyan-900 via-teal-900 to-emerald-900",
      cardGradient: "from-cyan-600 to-emerald-600",
      floatingColors: ["bg-cyan-500/20", "bg-teal-500/20", "bg-emerald-500/20"],
      textColor: "text-white",
      featureIcons: [Star, Users, Monitor, CheckCircle],
    },
    {
      id: "digital-identity",
      icon: Globe,
      bgGradient: "from-emerald-900 via-green-900 to-lime-900",
      cardGradient: "from-emerald-600 to-lime-600",
      floatingColors: ["bg-emerald-500/20", "bg-green-500/20", "bg-lime-500/20"],
      textColor: "text-white",
      featureIcons: [Globe, Monitor, TrendingUp, Star],
    },
    {
      id: "automation",
      icon: Zap,
      bgGradient: "from-lime-900 via-yellow-900 to-amber-900",
      cardGradient: "from-lime-600 to-amber-600",
      floatingColors: ["bg-lime-500/20", "bg-yellow-500/20", "bg-amber-500/20"],
      textColor: "text-white",
      featureIcons: [Zap, Clock, TrendingUp, CheckCircle],
    },
  ],
};

export const getAppBuildContent = (lang: Lang) => {
  const texts = appBuildTexts[lang];

  const services = appBuildVisualConfig.services.map((service) => {
    const serviceText = texts.services.find((item) => item.id === service.id);

    if (!serviceText) {
      return {
        ...service,
        title: "",
        description: "",
        features: service.featureIcons.map((icon) => ({ icon, text: "" })),
        stats: [],
      };
    }

    return {
      ...service,
      title: serviceText.title,
      description: serviceText.description,
      features: serviceText.features.map((text, index) => ({
        icon: service.featureIcons[index],
        text,
      })),
      stats: serviceText.stats,
    };
  });

  return {
    hero: texts.hero,
    services,
    cta: texts.cta,
  };
};
