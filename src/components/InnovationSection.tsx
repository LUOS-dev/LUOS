import { motion } from 'framer-motion';
import { GeometricEagle } from './GeometricEagle';
import { innovationSectionTexts } from "../i18n/home-translations";
import { useLanguage } from '../i18n/utils';
import './InnovationSection.css';

const InnovationSection = () => {
  const { lang } = useLanguage();
  const texts = innovationSectionTexts[lang];

  return (
    <section className="innovation-section">
      <div className="innovation-container">
        
        {/* Columna Izquierda: El Águila Geométrica */}
        <div className="innovation-visual">
          {/* Envolvemos tu componente existente para controlarlo con CSS */}
          <div className="eagle-wrapper">
             <GeometricEagle />
          </div>
        </div>

        {/* Columna Derecha: Texto */}
        <div className="innovation-content">
          <motion.h2 
            className="innovation-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {texts.text1} <br />
            <span className="highlight-blue">{texts.text2}</span> {texts.text3} <br />
            {texts.text4}
          </motion.h2>

          <motion.div
            className="innovation-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              {texts.parrafo}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default InnovationSection;