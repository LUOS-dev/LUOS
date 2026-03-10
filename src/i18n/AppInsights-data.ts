import {
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  PieChart,
  LineChart,
  Eye,
  Activity,
  BarChart3,
  Brain,
} from "lucide-react";

type Lang = "es" | "en";

export const appInsightsTexts = {
  es: {
    hero: {
      title: "INTELIGENCIA DE DATOS",
      subtitle: "Obtenga información y optimice las operaciones",
      description:
        "Libere el poder de sus datos con información basada en IA. Aproveche la analítica avanzada para tomar decisiones más inteligentes, impulsar la innovación y obtener una ventaja competitiva",
      caption: "Transforme sus datos en inteligencia práctica para impulsar su negocio.",
    },
    sections: [
      {
        id: "ai-analytics",
        title: "ANALISIS Y VISIÓN CON AI",
        description:
          "Libere el poder oculto de sus datos con inteligencia artificial avanzada. Los algoritmos de machine learning descubren patrones, predicen tendencias y generan insights accionables que transforman información en ventaja competitiva.",
        features: [
          "Análisis Predictivo Avanzado",
          "Detección de Patrones IA",
          "Insights Personalizados",
          "Recomendaciones Inteligentes",
        ],
        stats: [
          { number: "+10x", label: "Velocidad de Procesamiento" },
          { number: "0%", label: "De fuga de datos" },
          { number: "88%", label: "Precisión en Patrones" },
        ],
      },
      {
        id: "data-driven",
        title: "DECISIONES BASADAS EN DATOS",
        description:
          "Transforme la toma de decisiones empresariales con dashboards interactivos y reportes en tiempo real. Convierta datos complejos en visualizaciones claras que impulsan decisiones estratégicas informadas y resultados medibles.",
        features: [
          "Dashboards Interactivos",
          "Reportes en Tiempo Real",
          "Análisis Multidimensional",
          "KPIs Automatizados",
        ],
        stats: [
          { number: "95%", label: "Agilidad Estratégica" },
          { number: "50+", label: "Métricas Monitoreadas" },
          { number: "100%", label: "KPIs Personalizados" },
        ],
      },
    ],
    cta: {
      title: "¿Listo para desbloquear sus datos?",
      subtitle: "Transforme información en inteligencia accionable",
      description:
        "Descubra patrones ocultos, prediga tendencias futuras y tome decisiones basadas en datos que impulsen su negocio hacia el éxito",
      button: "Iniciar Análisis Inteligente",
    },
  },
  en: {
    hero: {
      title: "INSIGHTS",
      subtitle: "Get insights and optimize operations",
      description:
        "Unlock the power of your data with AI-driven insights. Use advanced analytics to make smarter decisions, drive innovation, and gain a competitive edge",
      caption: "Transform your data into practical intelligence to boost your business.",
    },
    sections: [
      {
        id: "ai-analytics",
        title: "AI ANALYTICS & INSIGHTS",
        description:
          "Unlock hidden value from your data with advanced artificial intelligence. Machine learning algorithms uncover patterns, predict trends, and generate actionable insights that turn information into competitive advantage.",
        features: [
          "Advanced Predictive Analytics",
          "AI Pattern Detection",
          "Personalized Insights",
          "Intelligent Recommendations",
        ],
        stats: [
          { number: "+10x", label: "Processing Speed" },
          { number: "0%", label: "Data Leakage" },
          { number: "88%", label: "Pattern Accuracy" },
        ],
      },
      {
        id: "data-driven",
        title: "DATA-DRIVEN DECISIONS",
        description:
          "Transform business decision-making with interactive dashboards and real-time reporting. Convert complex data into clear visualizations that support informed strategic choices and measurable outcomes.",
        features: [
          "Interactive Dashboards",
          "Real-Time Reports",
          "Multidimensional Analysis",
          "Automated KPIs",
        ],
        stats: [
          { number: "95%", label: "Strategic Agility" },
          { number: "50+", label: "Monitored Metrics" },
          { number: "100%", label: "Custom KPIs" },
        ],
      },
    ],
    cta: {
      title: "Ready to unlock your data?",
      subtitle: "Turn information into actionable intelligence",
      description:
        "Discover hidden patterns, predict future trends, and make data-driven decisions that push your business toward success",
      button: "Start Smart Analysis",
    },
  },
};

export const appInsightsVisualConfig = {
  sections: [
    {
      id: "ai-analytics",
      icon: Brain,
      gradientColors: ["#FF6B4C", "#FF8C42", "#FFB84D"],
      bgColor: "#FF6B4C",
      secondaryBgColor: "#FF8C42",
      accentColors: ["#FF6B4C", "#FF8C42", "#FFB84D"],
      floatingColors: ["rgba(255, 107, 76, 0.4)", "rgba(255, 140, 66, 0.4)", "rgba(255, 184, 77, 0.4)"],
      textColor: "text-white",
      accentColor: "text-[#FFB84D]",
      featureIcons: [Eye, Activity, Target, Sparkles],
    },
    {
      id: "data-driven",
      icon: BarChart3,
      gradientColors: ["#2C5F7F", "#3B7B97", "#4B97B0"],
      bgColor: "#2C5F7F",
      secondaryBgColor: "#4B97B0",
      accentColors: ["#2C5F7F", "#3B7B97", "#4B97B0"],
      floatingColors: ["rgba(44, 95, 127, 0.4)", "rgba(59, 123, 151, 0.4)", "rgba(75, 151, 176, 0.4)"],
      textColor: "text-white",
      accentColor: "text-[#4B97B0]",
      featureIcons: [PieChart, LineChart, Layers, TrendingUp],
    },
  ],
};

export const getAppInsightsContent = (lang: Lang) => {
  const texts = appInsightsTexts[lang];

  const information = appInsightsVisualConfig.sections.map((section) => {
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
