import { useState } from 'react';
import { motion } from 'motion/react';
import { Shrub, Lightbulb, Code2, Rocket } from 'lucide-react';
import './TimeLine.css';

interface Phase {
  number: string;
  title: string;
  clientMessage: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const phases: Phase[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    clientMessage: 'Definimos la hoja de ruta para evitar retrabajos.',
    icon: Shrub,
    color: '#3b82f6', // blue
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Strategic Blueprint',
    clientMessage: 'Visualizas tu solución antes de tirar una sola línea de código.',
    icon: Lightbulb,
    color: '#8b5cf6', // purple
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    number: '03',
    title: 'Iterative Building',
    clientMessage: 'Entregas constantes para que veas el progreso en tiempo real.',
    icon: Code2,
    color: '#ec4899', // pink
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    number: '04',
    title: 'Launch & Evolution',
    clientMessage: 'Tu sistema cobra vida y escala contigo.',
    icon: Rocket,
    color: '#f59e0b', // amber
    gradient: 'from-amber-500 to-amber-600',
  },
];

export function Timeline() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const handlePhaseClick = (index: number) => {
    setActivePhase(activePhase === index ? null : index);
  };

  const currentPhase = hoveredPhase !== null ? hoveredPhase : activePhase !== null ? activePhase : -1;

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="timeline-title"
          >
            Conoce tu camino al éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="timeline-subtitle"
          >
            Conoce el camino que Transcurrirá tu proyecto, desde la idea hasta el lanzamiento
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-relative-wrapper">
          {/* Decorative SVG Path Line - Desktop */}
          <div className="timeline-desktop-svg-container">
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="timeline-svg-full"
            >
              {/* Background decorative dots */}
              {[...Array(30)].map((_, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={i * 35}
                  cy={50 + Math.sin(i * 0.5) * 20}
                  r="2"
                  fill="#e5e7eb"
                  opacity="0.4"
                />
              ))}

              {/* Main path - gray background */}
              <motion.path
                d="M 0 50 Q 125 20, 250 50 T 500 50 Q 625 20, 750 50 T 1000 50"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />

              {/* Animated colored path */}
              <motion.path
                d="M 0 50 Q 125 20, 250 50 T 500 50 Q 625 20, 750 50 T 1000 50"
                stroke="url(#lineGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: currentPhase >= 0 ? (currentPhase + 1) / phases.length : 0,
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Shine effect on the path */}
              {currentPhase >= 0 && (
                <motion.path
                  d="M 0 50 Q 125 20, 250 50 T 500 50 Q 625 20, 750 50 T 1000 50"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{
                    pathLength: [0, 0.1, 0],
                    pathOffset: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}

              {/* Gradient definition */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  {phases.map((phase, index) => (
                    <stop
                      key={index}
                      offset={`${(index / (phases.length - 1)) * 100}%`}
                      stopColor={phase.color}
                    />
                  ))}
                </linearGradient>
              </defs>
            </svg>

            {/* Animated particles along the path */}
            {currentPhase >= 0 && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="timeline-particle"
                    style={{
                      backgroundColor: phases[Math.min(currentPhase, phases.length - 1)]?.color,
                      boxShadow: `0 0 15px ${phases[Math.min(currentPhase, phases.length - 1)]?.color}`,
                      filter: 'blur(1px)',
                    }}
                    animate={{
                      offsetDistance: ['0%', `${((currentPhase + 1) / phases.length) * 100}%`],
                      opacity: [0, 1, 1, 0.5],
                      scale: [0, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                    //style={{
                      //offsetPath: 'path("M 0 50 Q 125 20, 250 50 T 500 50 Q 625 20, 750 50 T 1000 50")',
                      //offsetRotate: '0deg',
                    //}}
                  />
                ))}
              </>
            )}
          </div>

          {/* Phases Grid */}
          <div className="timeline-grid">
            {phases.map((phase, index) => {
              const isActive = activePhase === index;
              const isHovered = hoveredPhase === index;
              const isDimmed =
                (activePhase !== null && activePhase !== index) ||
                (hoveredPhase !== null && hoveredPhase !== index);
              const Icon = phase.icon;

              return (
                <motion.div
                  key={index}
                  className="timeline-phase-item"
                  onMouseEnter={() => setHoveredPhase(index)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  onClick={() => handlePhaseClick(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isDimmed ? 0.4 : 1,
                    y: 0,
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    y: { duration: 0.5, delay: index * 0.1 },
                  }}
                >
                  {/* Phase Circle - Timeline Marker */}
                  <div className="timeline-marker-wrapper">
                    <motion.div
                      className="timeline-marker-circle"
                      animate={{
                        borderColor: isActive || isHovered ? phase.color : '#e5e7eb',
                        scale: isActive || isHovered ? 1.15 : 1,
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        scale: { duration: 0.3, ease: 'easeOut' },
                      }}
                    >
                      {/* Glow effect */}
                      {(isActive || isHovered) && (
                        <motion.div
                          className="timeline-marker-glow"
                          style={{ backgroundColor: phase.color }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}

                      {/* Icon - sin rotación */}
                      <motion.div
                        animate={{
                          scale: isActive || isHovered ? 1 : 0.8,
                        }}
                        transition={{
                          scale: { duration: 0.3 },
                        }}
                      >
                        <Icon
                          className="timeline-icon"
                          style={{ color: isActive || isHovered ? phase.color : '#9ca3af' }}
                        />
                      </motion.div>

                      {/* Number */}
                      <span
                        className="timeline-number"
                        style={{
                          color: isActive || isHovered ? phase.color : '#9ca3af',
                        }}
                      >
                        {phase.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Phase Content Card */}
                  <motion.div
                    className="timeline-card"
                    animate={{
                      borderColor: isActive || isHovered ? phase.color : 'transparent',
                      y: isActive || isHovered ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient background on hover */}
                    {(isActive || isHovered) && (
                      <motion.div
                        className={`timeline-card-gradient ${phase.gradient}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                      />
                    )}

                    <div className="timeline-card-content">
                      {/* Title */}
                      <h3 className="timeline-card-title">
                        {phase.title}
                      </h3>

                      {/* Client Message - Show only on hover/active */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isActive || isHovered ? 'auto' : 0,
                          opacity: isActive || isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="timeline-card-message-wrapper"
                      >
                        <p className="timeline-card-message">{phase.clientMessage}</p>
                      </motion.div>

                      {/* Decorative line */}
                      <motion.div
                        className="timeline-card-line"
                        style={{ backgroundColor: phase.color }}
                        initial={{ width: '0%' }}
                        animate={{
                          width: isActive || isHovered ? '100%' : '0%',
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline - Curved Path */}
          <div className="timeline-mobile-path-container">
            <svg width="100%" height="100%" className="timeline-mobile-svg">
              {/* Background path */}
              <path
                d={`M 1 0 Q 10 ${25}%, 1 50% T 1 100%`}
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />

              {/* Animated colored path */}
              <motion.path
                d={`M 1 0 Q 10 ${25}%, 1 50% T 1 100%`}
                stroke="url(#mobileLineGradient)"
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: currentPhase >= 0 ? (currentPhase + 1) / phases.length : 0,
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  {phases.map((phase, index) => (
                    <stop
                      key={index}
                      offset={`${(index / (phases.length - 1)) * 100}%`}
                      stopColor={phase.color}
                    />
                  ))}
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Call to Action 
        <motion.div
          className="timeline-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="timeline-cta-text">¿Listo para comenzar tu proyecto?</p>
          <motion.button
            className="timeline-cta-button"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>*/}
      </div>
    </section>
  );
}