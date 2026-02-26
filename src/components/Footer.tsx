import React, { useEffect, useRef } from 'react';
import Form from './Form';
import './Footer.css';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const Footer = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 30; // Cantidad de puntos

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'footer-particle';
      
      // Aleatorizar tamaño, posición y delay de animación
      const size = Math.random() * 4 + 1 + 'px'; // Entre 1px y 5px
      particle.style.width = size;
      particle.style.height = size;
      particle.style.left = Math.random() * 100 + '%';
      // Duración y retraso aleatorios para que no suban todos juntos
      particle.style.animationDuration = Math.random() * 15 + 10 + 's'; // Entre 10s y 25s
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      container.appendChild(particle);
    }
    return () => {
        if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <footer className="main-footer">
      {/* animación partiuclas */}
      <div className="footer-particles-container" ref={particlesRef} />

      <div className="footer-content-wrapper">
        <div className="footer-info-col">
          <div>
            <h2 className="footer-title">Contacto</h2>
            <p className="footer-desc">
              ¿Tienes un proyecto en mente? Cuéntanos sobre él y te ayudaremos a hacerlo realidad.
            </p>
          </div>

          <div className="footer-contact-items">
            <a href="mailto:contacto@luos.com" className="footer-contact-item">
              <MailIcon />
              <span>luos.consulting@gmail.com</span>
            </a>
            <a className="footer-contact-item">
              <PhoneIcon />
              <span>+52 (44) 27891143</span>
            </a>
            <div className="footer-contact-item">
               <MapPinIcon />
               <span>Querétaro, México</span>
            </div>
          </div>
        </div>

        <div className="footer-form-col">
            <Form />
        </div>
      </div>

      {/* Barra inferior de copyright */}
      <div className="footer-copyright">
        © 2026 LUOS Consultora TI. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;