import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Code, Database, Coffee, Megaphone, Settings, Lightbulb } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/public/Logo.svg?url";
import { set } from "astro:schema";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { 
      icon: <Code className="nav-icon" />, 
      title: "Desarrollo de Software", 
      description: "Aplicaciones web y móviles personalizadas",
      href: "/build" 
    },
    { 
      icon: <Database className="nav-icon" />, 
      title: "Big Data & Analytics", 
      description: "Análisis de datos e inteligencia de negocios",
      href: "/insights" 
    },
    { 
      icon: <Settings className="nav-icon" />, 
      title: "Consultoría TI", 
      description: "Estrategia y transformación digital",
      href: "/empower" 
    },
    { 
      icon: <Lightbulb className="nav-icon" />, 
      title: "Innovación", 
      description: "R&D y tecnologías emergentes",
      href: "/empower" 
    },
    { 
      icon: <Megaphone className="nav-icon" />, 
      title: "LUOS Blog",
      description: "Siteo informativo sobre el mundo tech",
      href: "/"
    },
    { 
      icon: <Coffee className="nav-icon" />, 
      title: "Nuestra Historia", 
      description: "Conoce el viaje de LUOS y nuestro impacto en la industria",
      href: "/about" 
    }
  ];

  const menuItems = [
    { name: "Build", href: "/build" },
    { name: "Empower", href: "/empower" },
    { name: "Insights", href: "/insights" }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // 1. Si NO es un ancla (ej: "/build"), redirigimos de inmediato y salimos de la función
    if (!href.includes('#')) {
      window.location.href = href;
      return;
    }

    // 2. Si es un ancla, procesamos el scroll
    const [path, targetId] = href.split('#');
    
    // Verificamos si estamos en la Home o si el path apunta a la Home
    if (window.location.pathname === '/' || path === '' || path === '/') {
      const element = document.querySelector(`#${targetId}`);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página (como /build) y clicamos un ancla de la home
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        className="navbar-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-content">
          <div className="navbar-inner">
            {/* Logo */}
            <motion.a
              href="/"
              className="navbar-logo"
              style={{ cursor: 'pointer', textDecoration: 'none' }} // Asegura que se vea como link
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                // Si ya estás en la Home, hacemos scroll suave al inicio
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <motion.div className="navbar-logo-icon">
                <span className="navbar-logo-text">
                  <img 
                    src={logo} 
                    alt="Logo LUOS" 
                    className="h-10 w-10"
                  />
                </span>
              </motion.div>
              <span className="navbar-logo-name">LUOS</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="navbar-menu-desktop">
              {/* Services Dropdown */}
              <div className="navbar-dropdown">
                <motion.button
                  className="navbar-dropdown-trigger"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="nav-chevron" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      className="navbar-dropdown-menu"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="navbar-dropdown-content">
                        {services.map((service, index) => (
                          <motion.a
                            key={service.title}
                            href={service.href}
                            className="navbar-service-item"
                            onClick={(e)=>{
                              e.preventDefault();
                              scrollToSection(service.href);
                              setIsServicesOpen(false);
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="navbar-service-content">
                              <div className="navbar-service-icon">
                                {service.icon}
                              </div>
                              <div>
                                <h4 className="navbar-service-title">
                                  {service.title}
                                </h4>
                                <p className="navbar-service-description">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Menu Items */}
              {menuItems.map((item) => (
              <motion.a  // Cambiado de button a a
                key={item.name}
                href={item.href} // Añadido href real para SEO
                className="navbar-menu-item"
                onClick={(e) => {
                  e.preventDefault(); // Evitamos comportamiento default para controlar el scroll nosotros
                  scrollToSection(item.href);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: 'none', cursor: 'pointer', display: 'inline-block' }} // Estilos base
              >
                {item.name}
              </motion.a>
            ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="navbar-actions">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/booking" style={{ textDecoration: 'none' }}>
                  <button className="navbar-cta-button">
                    Agenda una Llamada
                  </button>
                </a>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="navbar-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="nav-icon-mobile" /> : <Menu className="nav-icon-mobile" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navbar-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="navbar-mobile-content">
                {/* Mobile Services */}
                <div>
                  <button
                    className="navbar-mobile-dropdown-trigger"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>Services</span>
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="nav-chevron" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        className="navbar-mobile-services"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services.map((service) => (
                          <div 
                            key={service.title} 
                            className="navbar-mobile-service-item"
                            onClick={() => scrollToSection(service.href)}
                            style={{ cursor: 'pointer' }}
                          >
                            {service.title}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Menu Items */}
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    className="navbar-mobile-menu-item"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile CTA */}
                <div className="navbar-mobile-cta">
                  <a href="/booking" style={{ textDecoration: 'none' }}>
                    <button className="navbar-cta-button navbar-cta-button-mobile">
                      Agenda una Llamada
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Click outside to close services dropdown */}
      {isServicesOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </>
  );
}