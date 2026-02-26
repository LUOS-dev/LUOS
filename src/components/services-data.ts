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

export const services = [
  {
    title: "SOFTWARE FOR YOUR BUSINESS",
    icon: Code,
    description:
      "Desarrollamos software personalizado que se adapta perfectamente a las necesidades específicas de tu negocio, desde aplicaciones web hasta sistemas empresariales completos.",
    bgGradient: "from-blue-900 via-indigo-900 to-cyan-900",
    cardGradient: "from-blue-600 to-cyan-600",
    floatingColors: ["bg-blue-500/20", "bg-indigo-500/20", "bg-cyan-500/20"],
    textColor: "text-white",
    features: [
      { icon: Monitor, text: "Aplicaciones Web Personalizadas" },
      { icon: Smartphone, text: "Apps Móviles Nativas" },
      { icon: Users, text: "Sistemas Empresariales" },
      { icon: TrendingUp, text: "Soluciones Escalables" },
    ],
    stats: [
      { number: "500+", label: "Proyectos Completados" },
      { number: "98%", label: "Satisfacción Cliente" },
      { number: "24/7", label: "Soporte Técnico" },
    ],
  },
  {
    title: "UI/UX DESIGNS",
    icon: Palette,
    description:
      "Creamos experiencias digitales excepcionales con diseños intuitivos y atractivos que cautivan a tus usuarios y mejoran la interacción con tu marca.",
    bgGradient: "from-cyan-900 via-teal-900 to-emerald-900",
    cardGradient: "from-cyan-600 to-emerald-600",
    floatingColors: ["bg-cyan-500/20", "bg-teal-500/20", "bg-emerald-500/20"],
    textColor: "text-white",
    features: [
      { icon: Star, text: "Diseño de Interfaces Modernas" },
      { icon: Users, text: "Investigación de Usuarios" },
      { icon: Monitor, text: "Prototipos Interactivos" },
      { icon: CheckCircle, text: "Testing de Usabilidad" },
    ],
    stats: [
      { number: "300+", label: "Diseños Creados" },
      { number: "85%", label: "Mejora en UX" },
      { number: "15", label: "Premios Ganados" },
    ],
  },
  {
    title: "DIGITAL IDENTITY",
    icon: Globe,
    description:
      "Construimos tu presencia digital completa, desde el branding hasta la implementación web, creando una identidad coherente y memorable en todos los canales.",
    bgGradient: "from-emerald-900 via-green-900 to-lime-900",
    cardGradient: "from-emerald-600 to-lime-600",
    floatingColors: ["bg-emerald-500/20", "bg-green-500/20", "bg-lime-500/20"],
    textColor: "text-white",
    features: [
      { icon: Globe, text: "Branding Completo" },
      { icon: Monitor, text: "Sitios Web Corporativos" },
      { icon: TrendingUp, text: "Estrategia Digital" },
      { icon: Star, text: "Posicionamiento de Marca" },
    ],
    stats: [
      { number: "200+", label: "Marcas Creadas" },
      { number: "150%", label: "Aumento en Ventas" },
      { number: "90%", label: "Reconocimiento" },
    ],
  },
  {
    title: "AUTOMATION",
    icon: Zap,
    description:
      "Automatizamos procesos empresariales para optimizar la eficiencia, reducir costos y liberar tiempo valioso que puedes invertir en hacer crecer tu negocio.",
    bgGradient: "from-lime-900 via-yellow-900 to-amber-900",
    cardGradient: "from-lime-600 to-amber-600",
    floatingColors: ["bg-lime-500/20", "bg-yellow-500/20", "bg-amber-500/20"],
    textColor: "text-white",
    features: [
      { icon: Zap, text: "Automatización de Procesos" },
      { icon: Clock, text: "Ahorro de Tiempo" },
      { icon: TrendingUp, text: "Optimización de Recursos" },
      { icon: CheckCircle, text: "Integración de Sistemas" },
    ],
    stats: [
      { number: "70%", label: "Reducción Costos" },
      { number: "80%", label: "Ahorro Tiempo" },
      { number: "100+", label: "Procesos Automatizados" },
    ],
  },
];
