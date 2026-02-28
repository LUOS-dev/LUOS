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
            <path d="M0 207
            C0 184.356 18.3563 166 41 166
            H369
            C391.644 166 410 147.644 410 125
            V41
            C410 18.3563 428.356 0 451 0
            H857
            C879.644 0 898 18.3563 898 41
            V184.5
            C898 207.144 916.356 225.5 939 225.5
            H1319.61
            C1342.41 225.5 1360.83 244.091 1360.61 266.884
            L1357.88 558.829
            C1357.67 581.343 1339.34 599.475 1316.83 599.445
            L1029.56 599.056
            C1006.89 599.025 988.5 617.39 988.5 640.056
            V723
            C988.5 745.644 970.144 764 947.5 764
            H696
            C673.356 764 655 745.644 655 723
            V616.5
            C655 593.856 636.644 575.5 614 575.5
            H286
            C263.356 575.5 245 557.144 245 534.5
            V500.5
            C245 477.856 226.644 459.5 204 459.5
            H41
            C18.3563 459.5 0 441.144 0 418.5V207
            Z"/>
          </clipPath>
        </defs>
      </svg>


    </section>
  );
};

export default SecondPart;