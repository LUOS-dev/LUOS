import { motion } from 'motion/react';
import { Target, Compass, Zap, Star, Shield, UserStar, Heart } from 'lucide-react';
import './AboutPage.css';
import { storyText } from '../i18n/story-translations';
import { useLanguage } from '../i18n/utils';


export function AboutPage() {
  const {lang} = useLanguage();
  const texts=storyText[lang];
  const values = [
  {
    icon: Zap,
    title: [texts.cardTitle1],
    description: [texts.cardText1],
    cssClass: 'innovation',
  },
  {
    icon: Star,
    title: [texts.cardTitle2],
    description: [texts.cardText2],
    cssClass: 'collaboration',
  },
  {
    icon: Shield,
    title: [texts.cardTitle3],
    description: [texts.cardText3],
    cssClass: 'trust',
  },
  {
    icon: UserStar,
    title: [texts.cardTitle4],
    description: [texts.cardText4],
    cssClass: 'excellence',
  },
];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        {/* Animated background shapes */}
        <motion.div
          className="about-hero__bg-shape-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="about-hero__bg-shape-2"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="about-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero__title">
              {texts.title1} <span className="about-hero__title-gradient">{texts.title2}</span>
            </h1>
            <p className="about-hero__subtitle">
              {texts.description}
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="about-hero__divider"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Geometric shapes decoration */}
        <div className="about-hero__fade-bottom" />
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        {/* Background decoration */}
        <div className="mission-vision-section__bg-decoration">
          <svg viewBox="0 0 200 200">
            <polygon points="100,0 200,50 200,150 100,200 0,150 0,50" fill="currentColor" className="text-blue-600" />
          </svg>
        </div>

        <div className="mission-vision-section__container">
          <div className="mission-vision-grid">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mission-card">
                {/* Decorative circle */}
                <motion.div
                  className="mission-card__decoration"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="card__content">
                  <div className="card__icon-container">
                    <Target className="card__icon" />
                  </div>
                  <h2 className="card__title">{texts.subTittle1}</h2>
                  <p className="card__description">
                    {texts.descriptionMision}
                    </p>
                </div>

                {/* Decorative lines */}
                <div className="card__bottom-border" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="vision-card">
                {/* Decorative square */}
                <motion.div
                  className="vision-card__decoration"
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="card__content">
                  <div className="card__icon-container">
                    <Compass className="card__icon" />
                  </div>
                  <h2 className="card__title">{texts.subTittle2}</h2>
                  <p className="card__description">
                    {texts.descriptioVision}
                  </p>
                </div>

                {/* Decorative lines */}
                <div className="card__bottom-border" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        {/* Geometric background pattern */}
        <div className="values-section__bg-pattern">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="values-section__bg-pattern-square"
              style={{
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 25}%`,
              }}
              initial={{ rotate: i * 15 }}
              animate={{
                rotate: [i * 15, i * 15 + 180],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        <div className="values-section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="values-section__header"
          >
            <h2 className="values-section__title">
              {texts.subTittle3}
            </h2>
            <p className="values-section__subtitle">
              {texts.descriptionValues}
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="value-card">
                    {/* Icon container with gradient background */}
                    <motion.div
                      className={`value-card__icon-container value-card__icon-container--${value.cssClass}`}
                      //whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="value-card__icon" />
                    </motion.div>

                    <h3 className="value-card__title">
                      {value.title}
                    </h3>
                    <p className="value-card__description">
                      {value.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`value-card__corner-accent value-card__corner-accent--${value.cssClass}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section with Shapes */}
      <section className="story-section">
        {/* Large geometric shapes */}
        <div className="story-section__bg-shape-1" />
        <div className="story-section__bg-shape-2" />

        <div className="story-section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-section__icon-container">
              <Heart className="story-section__icon" />
            </div>

            <h2 className="story-section__title">
              {texts.subTittle4}
            </h2>

            <div className="story-section__content">
              <p>
                {texts.descriptionStory1} <span className="story-section__highlight-blue">{texts.descriptionStory2}</span>.
              </p>
              <p>
                {texts.descriptionStory3} <span className="story-section__highlight-purple">{texts.descriptionStory4}</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="story-section__stats">
              {[
                { number: '100%', label: [texts.dato1] },
                { number: '0', label: [texts.dato2] },
                { number: '1+', label: [texts.dato3] },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="stat__number">
                    {stat.number}
                  </div>
                  <div className="stat__label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        {/* Animated shapes */}
        <motion.div
          className="cta-section__bg-shape"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="cta-section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-section__title">
              {texts.lastTitle}
            </h2>
            <p className="cta-section__subtitle">
              {texts.lastText}
            </p>
            <a href="/booking" style={{ textDecoration: 'none' }}>
            <motion.button
              className="cta-section__button"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {texts.button}
            </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}