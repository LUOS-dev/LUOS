import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { information } from "./empower-data";
import { ArrowRight } from "lucide-react";
import "../Styles/appempower.css";
import "../Styles/components.css";

export default function AppEmpower() {
  return (
    <div className="relative">
      {/* Hero Section - Light gradient */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Floating Elements with light colors */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-300/30 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gray-300/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        <div className="empower-container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              EMPOWER
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
                Mantenga su negocio a la vanguardia del cambiante mercado global.
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Ayudamos a las empresas a identificar oportunidades de innovación y a encontrar la alternativa tecnológica adecuada para sus necesidades.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {information.map((information, index) => (
              <Card
                key={index}
                className="service-preview-card"
              >
                <CardContent className="service-preview-content">
                  <div
                    className={`service-icon-container bg-gradient-to-r ${information.cardGradient}`}
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
          className={`service-section bg-gradient-to-br ${info.bgGradient}`}
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
              className={`absolute top-32 right-32 w-32 h-32 ${info.floatingColors[0]} rounded-full blur-2xl animate-pulse`}
            ></div>
            <div
              className={`absolute bottom-32 left-32 w-24 h-24 ${info.floatingColors[1]} rounded-full blur-xl animate-pulse delay-1000`}
            ></div>
            <div
              className={`absolute top-1/2 right-1/4 w-40 h-40 ${info.floatingColors[2]} rounded-full blur-3xl animate-pulse delay-2000`}
            ></div>
          </div>

          <div className="empower-container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="flex items-center gap-6 mb-8">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${info.cardGradient} flex items-center justify-center text-white shadow-2xl`}
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
                      className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-3xl p-4 hover:bg-white/70 transition-all duration-300 shadow-md"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${info.cardGradient} flex items-center justify-center text-white`}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className={`${info.textColor} text-lg`}>
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
                      className="text-center bg-white/60 backdrop-blur-md rounded-3xl p-6 hover:bg-white/70 transition-all duration-300 shadow-md"
                    >
                      <div className={`text-3xl md:text-4xl ${info.accentColor} font-bold mb-2`}>
                        {stat.number}
                      </div>
                      <div className={`text-sm ${info.textColor} opacity-80`}>
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
                    className={`relative w-full h-96 rounded-3xl bg-gradient-to-r ${info.cardGradient} shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-3xl`}></div>
                    {/* Gradient overlay for extra depth */}
                    <info.icon className="w-40 h-40 text-white opacity-50" />
                  </div>
                  {/* Floating elements around the visual with service colors */}
                  <div
                    className={`absolute -top-6 -right-6 w-24 h-24 ${info.floatingColors[0]} rounded-full blur-xl animate-bounce`}
                  ></div>
                  <div
                    className={`absolute -bottom-6 -left-6 w-32 h-32 ${info.floatingColors[1]} rounded-full blur-xl animate-pulse`}
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

      {/* Final Call to Action - Light closing section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-blue-100 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#f0fdf4', opacity: 0.3}}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-2xl animate-pulse delay-1000" style={{backgroundColor: '#fdf2f8', opacity: 0.3}}></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000" style={{backgroundColor: '#f0f9ff', opacity: 0.2}}></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gray-300/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        <div className="empower-container mx-auto px-6 text-center relative z-10">
          <h3 className="text-5xl md:text-6xl mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            ¿Listo para empoderar su negocio?
          </h3>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforme su empresa con soluciones innovadoras que la posicionarán como líder en el mercado global
          </p>
           <a href="/booking" style={{ textDecoration: 'none' }}>
          <button className="bg-gradient-to-r from-green-500 via-pink-500 to-blue-500 hover:from-green-600 hover:via-pink-600 hover:to-blue-600 text-white px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            <span className="flex items-center gap-3">
              Empezar Transformación
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          </a>
        </div>
      </section>
    </div>
  );
}
