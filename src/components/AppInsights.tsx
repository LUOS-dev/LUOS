import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { information } from "./insights-data";
import { ArrowRight } from "lucide-react";
import "../Styles/figma-theme.css";
import "../Styles/appinsights.css";
import "../Styles/components.css";

export default function AppEmpower() {
  return (
    <div className="relative">
      {/* Hero Section - Figma Theme Gradient - Vibrant Red/Orange */}
      <section className="min-h-screen relative overflow-hidden" style={{backgroundImage: "linear-gradient(135deg, #C73C1D 0%, #A82D2D 50%, #8B1F1F 100%)"}}>
        {/* Floating Elements with insights colors */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{backgroundColor: '#FF6B4C40'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000" style={{backgroundColor: '#FF8C42FF40'}}></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full blur-xl animate-pulse delay-2000" style={{backgroundColor: '#FFB84D40'}}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full blur-xl animate-pulse delay-3000" style={{backgroundColor: '#FF6B4C40'}}></div>
        </div>

        <div className="empower-container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl mb-8 text-white font-bold" style={{textShadow: "0 2px 10px rgba(0,0,0,0.3)"}}>
              INSIGHTS
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
                Obtenga información y optimice las operaciones
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Libere el poder de sus datos con información basada en IA. Aproveche la analítica avanzada para tomar decisiones más inteligentes, impulsar la innovación y obtener una ventaja competitiva
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Transforme sus datos en inteligencia práctica para impulsar su negocio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {information.map((information, index) => (
              <Card
                key={index}
                className="service-preview-card"
              >
                <CardContent className="service-preview-content">
                  <div
                    className="service-icon-container text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${information.gradientColors[0]} 0%, ${information.gradientColors[1]} 50%, ${information.gradientColors[2]} 100%)`
                    }}
                  >
                    <information.icon className="w-12 h-12" />
                  </div>
                  <h3 className="service-title">
                    {information.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections with harmonious color transitions */}
      {information.map((info, index) => (
        <section
          key={index}
          style={{
            backgroundImage: `linear-gradient(135deg, ${info.gradientColors[0]} 0%, ${info.gradientColors[1]} 50%, ${info.gradientColors[2]} 100%)`
          }}
          className="service-section relative overflow-hidden"
        >
          {/* Background Elements with service-specific colors */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            {/* Color-specific floating elements */}
            <div
              className="absolute top-32 right-32 w-32 h-32 rounded-full blur-2xl animate-pulse"
              style={{backgroundColor: info.floatingColors[0]}}
            ></div>
            <div
              className="absolute bottom-32 left-32 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000"
              style={{backgroundColor: info.floatingColors[1]}}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full blur-3xl animate-pulse delay-2000"
              style={{backgroundColor: info.floatingColors[2]}}
            ></div>
          </div>

          <div className="empower-container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="flex items-center gap-6 mb-8">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${info.gradientColors[0]} 0%, ${info.gradientColors[2]} 100%)`
                    }}
                  >
                    <info.icon className="w-12 h-12" />
                  </div>
                  <h2
                    className={`text-4xl md:text-5xl ${info.textColor} tracking-tight`}
                  >
                    {info.title}
                  </h2>
                </div>

                <p
                  className={`text-xl md:text-2xl leading-relaxed ${info.textColor} mb-12 opacity-90`}
                >
                  {info.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {info.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-3xl p-4 hover:bg-white/30 transition-all duration-300 shadow-md border border-white/10"
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                        style={{
                          backgroundColor: info.gradientColors[0]
                        }}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className={`${info.textColor} text-lg font-medium`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {info.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-md border border-white/10"
                    >
                      <div className={`text-3xl md:text-4xl text-white font-bold mb-2`}>
                        {stat.number}
                      </div>
                      <div className={`text-sm ${info.textColor} opacity-90 font-medium`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="relative">
                  <div
                    className="relative w-full h-96 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${info.gradientColors[0]} 0%, ${info.gradientColors[1]} 50%, ${info.gradientColors[2]} 100%)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-3xl"></div>
                    {/* Gradient overlay for extra depth */}
                    <info.icon className="w-40 h-40 text-white opacity-50" />
                  </div>
                  {/* Floating elements around the visual with service colors */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl animate-bounce"
                    style={{backgroundColor: info.floatingColors[0]}}
                  ></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-xl animate-pulse"
                    style={{backgroundColor: info.floatingColors[1]}}
                  ></div>
                </div>
              </div>
            </div>

            {/* Call to Action for each section 
            <div className="text-center mt-16">
              <Button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto border border-white/20 hover:border-white/40">
                <span className="text-lg">Conoce más sobre {service.title}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>*/}
          </div>
        </section>
      ))}

      {/* Final Call to Action - Red/Orange Vibrant closing section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{backgroundImage: "linear-gradient(135deg, #C73C1D 0%, #A82D2D 50%, #8B1F1F 100%)"}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#FF6B4C4D'}}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-2xl animate-pulse delay-1000" style={{backgroundColor: '#FF8C424D'}}></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000" style={{backgroundColor: '#FFB84D33'}}></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full blur-2xl animate-pulse delay-3000" style={{backgroundColor: '#FF6B4C4D'}}></div>
        </div>

        <div className="empower-container mx-auto px-6 text-center relative z-10">
          <h3 className="text-5xl md:text-6xl mb-8 text-white font-bold" style={{textShadow: "0 2px 10px rgba(0,0,0,0.3)"}}>
            ¿Listo para desbloquear sus datos?
          </h3>
          <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforme información en inteligencia accionable
          </p>
          <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed">
            Descubra patrones ocultos, prediga tendencias futuras y tome decisiones basadas en datos que impulsen su negocio hacia el éxito
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white px-12 md:px-24 py-6 rounded-3xl text-xl transition-all duration-300 transform hover:scale-110 shadow-xl min-w-[320px] inline-flex items-center justify-center tracking-wide">
            <span className="flex items-center gap-3">
              Iniciar Análisis Inteligente
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
