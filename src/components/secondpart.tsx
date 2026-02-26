import React from 'react';
import './secondpart.css';

interface SecondPartProps {
  imageSrc: string;
}

const SecondPart: React.FC<SecondPartProps> = ({ imageSrc }) => {
  return (
    <section className="life-section-container">
      <div className="ls-text-block ls-top-left">
        <p>
          Nuestra misión en LUOS-tech es empoderar a pequeñas y medianas empresas con tecnología que
          no solo ahorra tiempo, sino que les permite enfocarse en lo que realmente importa: innovar
          y alcanzar su máximo potencial.
        </p>
      </div>

      <div className="ls-image-container">
        <img 
          src={imageSrc} 
          alt="Tree of life illustration" 
          className="ls-shaped-image"/>
      </div>
      <div className="ls-text-block ls-top-right">
        <p>
          En LUOStech, convertimos los procesos lentos y tediosos de tu negocio en flujos de trabajo 
          eficientes y automatizados, esto te permite ahorrar tiempo, reducir costos y enfocarte en hacer 
          crecer tu negocio. Además, respaldamos nuestras soluciones con una garantía de un año de soporte 
          y mantenimiento sin costo, para que tengas total tranquilidad y tus operaciones nunca se detengan.
        </p>
      </div>

      {/* --- Título Inferior Izquierda --- */}
      <div className="ls-text-block ls-bottom-left">
        <div className="ls-title">
          <h2>LIFE</h2>
          <h2>AND MEANING</h2>
        </div>
      </div>

      {/* --- Botón y Call to Action Inferior Derecha --- */}
      <div className="ls-text-block ls-bottom-right">
        <span className="ls-cta-label">DA EL PRIMER PASO</span>
        <a href="/booking" style={{ textDecoration: 'none' }}>
          <button className="ls-btn">Empezar</button>
        </a>
      </div>

      {/* --- DEFINICIÓN DEL CLIP-PATH SVG --- 
        Esto no se ve en la página, pero el CSS lo usa para cortar la imagen.
        Define la forma de cruz redondeada.
      */}
     <svg
        width="0"
        height="0"
        viewBox="0 0 1361 764"
        //viewBox="0 0 1361 764"
        preserveAspectRatio="none"
        style={{ position: 'absolute' }}
        aria-hidden="true"
      >
        <defs>
          <clipPath
            id="rounded-cross-clip"
            clipPathUnits="userSpaceOnUse"
          >
            <path d="M0 207C0 184.356 18.3563 166 41 166H369C391.644 166 410 147.644 410 125V41C410 18.3563 428.356 0 451 0H857C879.644 0 898 18.3563 898 41V184.5C898 207.144 916.356 225.5 939 225.5H1319.61C1342.41 225.5 1360.83 244.091 1360.61 266.884L1357.88 558.829C1357.67 581.343 1339.34 599.475 1316.83 599.445L1029.56 599.056C1006.89 599.025 988.5 617.39 988.5 640.056V723C988.5 745.644 970.144 764 947.5 764H696C673.356 764 655 745.644 655 723V616.5C655 593.856 636.644 575.5 614 575.5H286C263.356 575.5 245 557.144 245 534.5V500.5C245 477.856 226.644 459.5 204 459.5H41C18.3563 459.5 0 441.144 0 418.5V207Z"/>
          </clipPath>
        </defs>
      </svg>


    </section>
  );
};

export default SecondPart;