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

type Lang = "es" | "en";

export const appEmpowerTexts = {
  es: {
    hero: {
      title: "EMPODERAR",
      subtitle: "Mantenga su negocio a la vanguardia del cambiante mercado global.",
      description:
        "Ayudamos a las empresas a identificar oportunidades de innovación y a encontrar la alternativa tecnológica adecuada para sus necesidades.",
    },
    sections: [
      {
        id: "innovation-opportunities",
        title: "OPORTUNIDADES DE INNOVACIÓN",
        description:
          "Identificamos y desarrollamos oportunidades de innovación únicas que posicionan su negocio como líder en su industria, aprovechando las últimas tendencias tecnológicas.",
        features: [
          "Análisis de Mercado Estratégico",
          "Identificación de Tendencias",
          "Desarrollo de Prototipos",
          "Implementación Escalable",
        ],
        stats: [
          { number: "85%", label: "Aumento en Innovación" },
          { number: "200+", label: "Oportunidades Identificadas" },
          { number: "95%", label: "Éxito en Implementación" },
        ],
      },
      {
        id: "digital-transformation",
        title: "TRANSFORMACIÓN DIGITAL",
        description:
          "Transformamos procesos tradicionales en soluciones digitales avanzadas, optimizando la eficiencia y preparando su empresa para el futuro del mercado global.",
        features: [
          "Automatización Inteligente",
          "Integración Global",
          "Experiencia del Cliente",
          "Optimización Continua",
        ],
        stats: [
          { number: "0%", label: "Dependencia de Papel" },
          { number: "360°", label: "Agilidad Operativa" },
          { number: "90%", label: "Satisfacción Cliente" },
        ],
      },
      {
        id: "technological-solutions",
        title: "SOLUCIONES TECNOLÓGICAS",
        description:
          "Desarrollamos e implementamos soluciones tecnológicas robustas y seguras que se adaptan perfectamente a las necesidades específicas de su negocio en evolución.",
        features: [
          "Seguridad Avanzada",
          "Escalabilidad Garantizada",
          "Soluciones Personalizadas",
          "Integración Empresarial",
        ],
        stats: [
          { number: "+20", label: "Capas de Seguridad" },
          { number: "1/1", label: "Solución a Medida" },
          { number: "100%", label: "Seguridad Garantizada" },
        ],
      },
    ],
    cta: {
      title: "¿Listo para empoderar su negocio?",
      description:
        "Transforme su empresa con soluciones innovadoras que la posicionarán como líder en el mercado global",
      button: "Empezar Transformación",
    },
  },
  en: {
    hero: {
      title: "EMPOWER",
      subtitle: "Keep your business at the forefront of the ever-changing global market.",
      description:
        "We help companies identify innovation opportunities and find the right technology alternative for their needs.",
    },
    sections: [
      {
        id: "innovation-opportunities",
        title: "INNOVATION OPPORTUNITIES",
        description:
          "We identify and develop unique innovation opportunities that position your business as a leader in its industry, leveraging the latest technology trends.",
        features: [
          "Strategic Market Analysis",
          "Trend Identification",
          "Prototype Development",
          "Scalable Implementation",
        ],
        stats: [
          { number: "85%", label: "Increase in Innovation" },
          { number: "200+", label: "Identified Opportunities" },
          { number: "95%", label: "Implementation Success" },
        ],
      },
      {
        id: "digital-transformation",
        title: "DIGITAL TRANSFORMATION",
        description:
          "We transform traditional processes into advanced digital solutions, optimizing efficiency and preparing your company for the future of the global market.",
        features: [
          "Smart Automation",
          "Global Integration",
          "Customer Experience",
          "Continuous Optimization",
        ],
        stats: [
          { number: "0%", label: "Paper Dependency" },
          { number: "150+", label: "Digitized Processes" },
          { number: "90%", label: "Customer Satisfaction" },
        ],
      },
      {
        id: "technological-solutions",
        title: "TECHNOLOGICAL SOLUTIONS",
        description:
          "We develop and implement robust, secure technological solutions that perfectly adapt to the specific needs of your evolving business.",
        features: [
          "Advanced Security",
          "Guaranteed Scalability",
          "Custom Solutions",
          "Enterprise Integration",
        ],
        stats: [
          { number: "+20", label: "Security Layers" },
          { number: "1/1", label: "Custom Solution" },
          { number: "100%", label: "Guaranteed Security" },
        ],
      },
    ],
    cta: {
      title: "Ready to empower your businSess?",
      description:
        "Transform your company with innovative solutions that position it as a leader in the global market",
      button: "Start Transformation",
    },
  },
};

export const appEmpowerVisualConfig = {
  sections: [
    {
      id: "innovation-opportunities",
      icon: Lightbulb,
      bgGradient: "from-green-50 via-green-100 to-emerald-100",
      bgColor: "#f0fdf4",
      cardGradient: "from-green-400 to-emerald-500",
      floatingColors: ["bg-green-300/30", "bg-emerald-300/30", "bg-lime-300/30"],
      textColor: "text-gray-800",
      accentColor: "text-green-700",
      featureIcons: [Target, Sparkles, Rocket, TrendingUp],
    },
    {
      id: "digital-transformation",
      icon: TrendingUp,
      bgGradient: "from-red-50 via-pink-50 to-rose-100",
      bgColor: "#ffedeb",
      cardGradient: "from-pink-400 to-rose-500",
      floatingColors: ["bg-pink-300/30", "bg-rose-300/30", "bg-red-300/30"],
      textColor: "text-gray-800",
      accentColor: "text-pink-700",
      featureIcons: [Zap, Globe, Users, CheckCircle],
    },
    {
      id: "technological-solutions",
      icon: Shield,
      bgGradient: "from-blue-50 via-sky-50 to-cyan-100",
      bgColor: "#b1d2f3",
      cardGradient: "from-blue-400 to-cyan-500",
      floatingColors: ["bg-blue-300/30", "bg-sky-300/30", "bg-cyan-300/30"],
      textColor: "text-gray-800",
      accentColor: "text-blue-700",
      featureIcons: [Lock, Rocket, Target, Globe],
    },
  ],
};

export const getAppEmpowerContent = (lang: Lang) => {
  const texts = appEmpowerTexts[lang];

  const information = appEmpowerVisualConfig.sections.map((section) => {
    const sectionText = texts.sections.find((item) => item.id === section.id);

    if (!sectionText) {
      return {
        ...section,
        title: "",
        description: "",
        features: section.featureIcons.map((icon) => ({ icon, text: "" })),
        stats: [],
      };
    }

    return {
      ...section,
      title: sectionText.title,
      description: sectionText.description,
      features: sectionText.features.map((text, index) => ({
        icon: section.featureIcons[index],
        text,
      })),
      stats: sectionText.stats,
    };
  });

  return {
    hero: texts.hero,
    information,
    cta: texts.cta,
  };
};
