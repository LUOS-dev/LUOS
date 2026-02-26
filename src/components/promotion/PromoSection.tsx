import { Package, BarChart3, ClipboardList, TrendingUp, ArrowRight } from "lucide-react";
import logo from "../../assets/public/Logo.svg?url";
import "./PromoSection.css";

export function InventoryPromoSection() {
  const features = [
    {
      icon: Package,
      title: "Control Total",
      description: "Gestiona en tiempo real"
    },
    {
      icon: BarChart3,
      title: "Reportes Inteligentes",
      description: "Analytics avanzados"
    },
    {
      icon: ClipboardList,
      title: "Auditoría Automática",
      description: "Seguimiento completo"
    },
    {
      icon: TrendingUp,
      title: "Optimización",
      description: "Predicciones de demanda"
    }
  ];

  return (
    <section className="promo-section">
      <div className="promo-radial-effect" />
      
      <div className="promo-decoration-top" />
      <div className="promo-decoration-bottom" />

      <div className="promo-container">
        <div className="promo-grid">
          <div>
            <div className="promo-badge">
              <div className="promo-badge-dot" />
              <span className="promo-badge-text">NUEVO LANZAMIENTO</span>
            </div>
            
            <h1 className="promo-title">
              Revoluciona la Gestión de tu Inventario
            </h1>
            
            <p className="promo-description">
              <span className="promo-description-highlight">El nombre pro de la app</span> - 
              La solución completa para optimizar y automatizar el control de inventario de tu empresa
            </p>

            <div className="promo-buttons">
              <button className="promo-btn-primary">
                Solicitar Demo Gratuita
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="promo-btn-secondary">
                Ver Características
              </button>
            </div>

            <div className="promo-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="promo-feature-card">
                  <div className="promo-feature-content">
                    <div className="promo-feature-icon">
                      <feature.icon />
                    </div>
                    <div>
                      <h3 className="promo-feature-title">
                        {feature.title}
                      </h3>
                      <p className="promo-feature-desc">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="promo-illustration">
            <div className="promo-illustration-container">
              <div className="promo-center-icon">
                  <img 
                    src={logo} 
                    alt="Logo"/>
              </div>

              <div className="promo-orbital-icon promo-orbital-top">
                <BarChart3 />
              </div>

              <div className="promo-orbital-icon promo-orbital-bottom">
                <ClipboardList />
              </div>

              <div className="promo-orbital-icon promo-orbital-left">
                <TrendingUp />
              </div>

              <div className="promo-orbital-icon promo-orbital-right">
                <Package />
              </div>

              <svg className="promo-connections">
                <line className="promo-connection-line" x1="50%" y1="50%" x2="50%" y2="15%" />
                <line className="promo-connection-line" x1="50%" y1="50%" x2="50%" y2="85%" />
                <line className="promo-connection-line" x1="50%" y1="50%" x2="15%" y2="50%" />
                <line className="promo-connection-line" x1="50%" y1="50%" x2="85%" y2="50%" />
              </svg>

              <div className="promo-offer-badge">
                <p className="promo-offer-label">OFERTA DE LANZAMIENTO</p>
                <p className="promo-offer-value">30% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}