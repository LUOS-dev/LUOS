import { Hammer, Zap, Brain, ArrowRight, Code } from "lucide-react";
import { Card, CardContent } from "./card";
import { motion } from "motion/react";
import { hubPageTexts } from "../i18n/home-translations";
import { useLanguage } from '../i18n/utils';
import "./HubPage.css";



export default function HubPage() {
  const { lang } = useLanguage();
  const texts = hubPageTexts[lang];
  const sections = [
    
    {
      id: "build",
      title: "BUILD",
      icon: <Code className="icon" />,
      description: texts.firstText1,
      summary: texts.secondText1,
      gradient: "gradient-build",
    },
    {
      id: "empower",
      title: "EMPOWER",
      icon: <Zap className="icon" />,
      description: texts.firstText2,
      summary: texts.secondText2,
      gradient: "gradient-empower",
    },
    {
      id: "insights",
      title: "INSIGHTS",
      icon: <Brain className="icon" />,
      description: texts.firstText3,
      summary: texts.secondText3,
      gradient: "gradient-insights",
    }
  ];


  return (
    <div className="hub-page-container">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-blur-1" />
        <div className="bg-blur-2" />
        <div className="bg-blur-3" />
      </div>

      <div className="hub-page-content">
        <div className="header-section">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="main-title"
          >
            {texts.tittle1} <span className="title-gradient">{texts.tittle2}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="subtitle"
          >
            {texts.option}
          </motion.p>
        </div>

        <div className="sections-grid">
          {sections.map((section, index) => (
            <a href={`/${section.id}`} key={section.id} className="section-link group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="motion-container"
              >
                <Card className={`card-container card-hover-${section.id}`}>
                  {/* Hover Gradient Overlay */}
                  <div className={`card-gradient-overlay ${section.gradient}`} />
                  
                  <CardContent className="card-content">
                    <div className="icon-wrapper">
                      <div className="icon-inner">
                        {section.icon}
                      </div>
                    </div>
                    
                    <h2 className={`section-title title-gradient-${section.id}`}>
                      {section.title}
                    </h2>
                    
                    <div className="description-summary-wrapper">
                      <p className="description">
                        {section.description}
                      </p>
                      <p className="summary">
                        {section.summary}
                      </p>
                    </div>

                    <div className="explore-link">
                        {texts.btn} <ArrowRight className="explore-arrow" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}