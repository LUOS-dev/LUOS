import { motion } from "motion/react";
import "./Eagle.css";

export const GeometricEagle = () => {
  return (
    <div className="principal-container">
      <motion.svg
        width="800"
        height="700"
        viewBox="0 0 800 700"
        className="text-blue-600/30 hover:text-blue-600/50 transition-colors duration-1000 w-full h-full max-w-full md:max-w-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        preserveAspectRatio="xMidYMid meet"
      >
        
        {/* Cabeza del águila */}
        <motion.polygon
          points="400,100 440,140 420,180 360,180 340,140"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        />
        
        {/* Pico */}
        <motion.polygon
          points="340,140 300,150 320,170"
          fill="currentColor"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Ojo */}
        <motion.circle
          cx="370"
          cy="150"
          r="6"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        
        {/* Cuello */}
        <motion.line
          x1="390"
          y1="180"
          x2="390"
          y2="260"
          stroke="currentColor"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        {/* Cuerpo principal */}
        <motion.polygon
          points="390,260 340,400 440,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        {/* Ala izquierda expandida */}
        <motion.path
          d="M340,300 L240,240 L160,280 L120,360 L180,400 L260,380 L340,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
        
        {/* Ala derecha expandida */}
        <motion.path
          d="M440,300 L540,240 L620,280 L660,360 L600,400 L520,380 L440,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Plumas del ala izquierda más detalladas */}
        <motion.line x1="240" y1="240" x2="200" y2="200" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1 }} />
        <motion.line x1="200" y1="260" x2="160" y2="220" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.1 }} />
        <motion.line x1="160" y1="280" x2="120" y2="260" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
        <motion.line x1="140" y1="320" x2="100" y2="310" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.3 }} />
        <motion.line x1="130" y1="340" x2="90" y2="335" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.4 }} />
        
        {/* Plumas del ala derecha más detalladas */}
        <motion.line x1="540" y1="240" x2="580" y2="200" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1 }} />
        <motion.line x1="580" y1="260" x2="620" y2="220" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.1 }} />
        <motion.line x1="620" y1="280" x2="660" y2="260" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
        <motion.line x1="640" y1="320" x2="680" y2="310" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.3 }} />
        <motion.line x1="650" y1="340" x2="690" y2="335" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.4 }} />
        
        {/* Cola extendida */}
        <motion.path
          d="M390,400 L390,500 L360,560 L320,600 L360,620 L390,580 L420,620 L460,600 L420,560"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
        
        {/* Puntos decorativos dispersos */}
        {[...Array(40)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + (i * 15) + Math.sin(i * 0.5) * 40}
            cy={500 + Math.cos(i * 0.3) * 60 + (i % 3) * 20}
            r="3"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
          />
        ))}
        
        {/* Líneas conectoras geométricas más complejas */}
        <motion.path
          d="M150,500 Q400,450 650,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        
        <motion.path
          d="M200,550 Q400,520 600,550"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
        />
        
        <motion.path
          d="M180,580 Q400,560 620,580"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.4 }}
        />
        {/* Circuitos en las alas */}
        <motion.path
          d="M180,320 L220,320 L220,340 L260,340"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        
        <motion.path
          d="M600,320 L560,320 L560,340 L520,340"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
        />

        {/* Nodos tecnológicos */}
        <motion.circle cx="220" cy="320" r="4" fill="none" stroke="currentColor" strokeWidth="1" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.7 }} />
        <motion.circle cx="560" cy="320" r="4" fill="none" stroke="currentColor" strokeWidth="1" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.8 }} />
      </motion.svg>
    </div>
  );
};