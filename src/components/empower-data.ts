import {
  Globe,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Shield,
  Target,
  Sparkles,
  Rocket,
  Lock,
} from "lucide-react";

export const information = [
  {
    title: "INNOVATION OPPORTUNITIES",
    icon: Lightbulb,
    description:
      "Identificamos y desarrollamos oportunidades de innovación únicas que posicionan su negocio como líder en su industria, aprovechando las últimas tendencias tecnológicas.",
    bgGradient: "from-green-50 via-green-100 to-emerald-100",
    bgColor: "#f0fdf4",
    cardGradient: "from-green-400 to-emerald-500",
    floatingColors: ["bg-green-300/30", "bg-emerald-300/30", "bg-lime-300/30"],
    textColor: "text-gray-800",
    accentColor: "text-green-700",
    features: [
      { icon: Target, text: "Análisis de Mercado Estratégico" },
      { icon: Sparkles, text: "Identificación de Tendencias" },
      { icon: Rocket, text: "Desarrollo de Prototipos" },
      { icon: TrendingUp, text: "Implementación Escalable" },
    ],
    stats: [
      { number: "85%", label: "Aumento en Innovación" },
      { number: "200+", label: "Oportunidades Identificadas" },
      { number: "95%", label: "Éxito en Implementación" }
    ],
  },
  {
    title: "DIGITAL TRANSFORMATION",
    icon: TrendingUp,
    description:
      "Transformamos procesos tradicionales en soluciones digitales avanzadas, optimizando la eficiencia y preparando su empresa para el futuro del mercado global.",
    bgGradient: "from-red-50 via-pink-50 to-rose-100",
    bgColor: "#ffedeb",
    cardGradient: "from-pink-400 to-rose-500",
    floatingColors: ["bg-pink-300/30", "bg-rose-300/30", "bg-red-300/30"],
    textColor: "text-gray-800",
    accentColor: "text-pink-700",
    features: [
      { icon: Zap, text: "Automatización Inteligente" },
      { icon: Globe, text: "Integración Global" },
      { icon: Users, text: "Experiencia del Cliente" },
      { icon: CheckCircle, text: "Optimización Continua" },
    ],
    stats: [
      { number: "70%", label: "Reducción en Tiempos" },
      { number: "150+", label: "Procesos Digitalizados" },
      { number: "90%", label: "Satisfacción Cliente" }
    ],
  },
  {
    title: "TECHNOLOGICAL SOLUTIONS",
    icon: Shield,
    description:
      "Desarrollamos e implementamos soluciones tecnológicas robustas y seguras que se adaptan perfectamente a las necesidades específicas de su negocio en evolución.",
    bgGradient: "from-blue-50 via-sky-50 to-cyan-100",
    bgColor: "#b1d2f3",
    cardGradient: "from-blue-400 to-cyan-500",
    floatingColors: ["bg-blue-300/30", "bg-sky-300/30", "bg-cyan-300/30"],
    textColor: "text-gray-800",
    accentColor: "text-blue-700",
    features: [
      { icon: Lock, text: "Seguridad Avanzada" },
      { icon: Rocket, text: "Escalabilidad Garantizada" },
      { icon: Target, text: "Soluciones Personalizadas" },
      { icon: Globe, text: "Integración Empresarial" },
    ],
    stats: [
        { number: "99%", label: "Tiempo de Actividad" },
        { number: "300+", label: "Soluciones Implementadas" },
        { number: "100%", label: "Seguridad Garantizada" }
      ],
  },
];
