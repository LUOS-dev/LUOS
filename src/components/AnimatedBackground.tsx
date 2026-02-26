
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState<any[]>([]);

  useEffect(() => {
    // Generamos las figuras SOLO cuando el componente ya está en el navegador
    const generatedShapes = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      type: i % 2 === 0 ? 'square' : 'circle',
      size: Math.random() * 100 + 30, // Entre 30px y 130px
      x: Math.random() * 100, // Posición X %
      y: Math.random() * 100, // Posición Y %
      duration: Math.random() * 5 + 5, // Duración entre 5 y 10s
      delay: Math.random() * 2,
    }));
    setShapes(generatedShapes);
  }, []);

  // Si no hay formas calculadas aún, no renderizamos nada (evita parpadeos)
  if (shapes.length === 0) return null;

  return (
    <div className="animated-bg-container">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`bg-shape ${shape.type}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.7, 0], // ¡HE SUBIDO LA OPACIDAD A 0.4 PARA QUE SE VEAN!
            scale: [0.5, 0.90, 0.5], 
            rotate: shape.type === 'square' ? [0, 90, 180] : 0,
            y: [0, -30, 0], // Flotan un poco hacia arriba
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;