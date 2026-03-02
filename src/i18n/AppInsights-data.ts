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
  Layers,
  PieChart,
  LineChart,
  Eye,
  Activity,
  BarChart3,
  Brain,
} from "lucide-react";

export const information = [
  {
    title: "AI ANALYTICS & INSIGHTS",
    icon: Brain,
    description:
      "Libere el poder oculto de sus datos con inteligencia artificial avanzada. Nuestros algoritmos de machine learning descubren patrones, predicen tendencias y generan insights accionables que transforman información en ventaja competitiva.",
    gradientColors: ["#FF6B4C", "#FF8C42", "#FFB84D"],
    bgColor: "#FF6B4C",
    secondaryBgColor: "#FF8C42",
    accentColors: ["#FF6B4C", "#FF8C42", "#FFB84D"],
    floatingColors: ["rgba(255, 107, 76, 0.4)", "rgba(255, 140, 66, 0.4)", "rgba(255, 184, 77, 0.4)"],
    textColor: "text-white",
    accentColor: "text-[#FFB84D]",
    features: [
      { icon: Eye, text: "Análisis Predictivo Avanzado"},
      { icon: Activity, text: "Detección de Patrones IA" },
      { icon: Target, text: "Insights Personalizados" },
      { icon: Sparkles, text: "Recomendaciones Inteligentes" },
    ],
    stats: [
      { number: "95%", label: "Precisión en Predicciones" },
      { number: "500TB+", label: "Datos Procesados" },
      { number: "300%", label: "ROI Promedio" },
    ],
  },
  {
    title: "DATA-DRIVEN DECISIONS",
    icon: BarChart3,
    description:
      "Transforme la toma de decisiones empresariales con dashboards interactivos y reportes en tiempo real. Convierta datos complejos en visualizaciones claras que impulsan decisiones estratégicas informadas y resultados medibles.",
    gradientColors: ["#2C5F7F", "#3B7B97", "#4B97B0"],
    bgColor: "#2C5F7F",
    secondaryBgColor: "#4B97B0",
    accentColors: ["#2C5F7F", "#3B7B97", "#4B97B0"],
    floatingColors: ["rgba(44, 95, 127, 0.4)", "rgba(59, 123, 151, 0.4)", "rgba(75, 151, 176, 0.4)"],
    textColor: "text-white",
    accentColor: "text-[#4B97B0]",
    features: [
      { icon: PieChart, text: "Dashboards Interactivos" },
      { icon: LineChart, text: "Reportes en Tiempo Real" },
      { icon: Layers, text: "Análisis Multidimensional" },
      { icon: TrendingUp, text: "KPIs Automatizados" },
    ],
    stats: [
      { number: "80%", label: "Reducción en Tiempo" },
      { number: "50+", label: "Métricas Monitoreadas" },
      { number: "99.9%", label: "Disponibilidad" }
    ],
  },

];
