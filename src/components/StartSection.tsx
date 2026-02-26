import { motion, cubicBezier } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import './StartSection.css';

const StartSection = () => {
  const appleTransition = {
    duration: 1.5,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  };

  return (
    <section className="start-container">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="start-content">
        <div className="start-title-wrapper">
          
          {/* LUOS - Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 1.1 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ ...appleTransition, delay: 0.2 }}
            className="title-block"
          >
            <h1 className="start-title">LUOS</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 0.5, filter: "blur(1px)" }}
            transition={{ ...appleTransition, delay: 0.4 }}
            className="mirror-block"
          >
            <span className="start-mirror">SOUL</span>
          </motion.div>
        
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="start-subtitle"
        >
          Recreamos lo obvio. Creamos lo único
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          
        >
          <a href="/booking" style={{ textDecoration: 'none' }}>

          <button className="boton" onClick={() => console.log('Comenzar proyecto')}>
            Comienza tu proyecto
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StartSection;