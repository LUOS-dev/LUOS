import { motion } from 'framer-motion';
import { GeometricEagle } from './GeometricEagle';
import './InnovationSection.css';

const InnovationSection = () => {
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
            TU NUEVO ALIADO QUE <br />
            <span className="highlight-blue">INNOVA</span> DESDE LO MÁS <br />
            PROFUNDO
          </motion.h2>

          <motion.div
            className="innovation-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              En LUOS entendemos que la verdadera innovación nace desde el
              interior de cada organización. Nos sumergimos en tu negocio para
              crear soluciones tecnológicas que no solo resuelven problemas, sino
              que transforman la manera en que operas.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default InnovationSection;