import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { services } from "./services-data";
import { ArrowRight } from "lucide-react";
import "../Styles/appbuild.css";
import "../Styles/components.css";

export default function AppBuild() {
  return (
    <div className="relative">
      {/* Hero Section - Starting with purple-blue gradient */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-blue-900 relative overflow-hidden">
        {/* Floating Elements with harmonious colors */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-violet-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              TU SOFTWARE
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6">
                Crea, inventa actualiza o integra tu solución a la medida que diga tu alma.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Nuestro trabajo es ofrecer el mejor software para tu negocio, puedes contar con una integración completa:
              </p>
            </div>
          </div>

          {/* Service Preview Cards with harmonious colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-preview-card"
              >
                <CardContent className="service-preview-content">
                  <div
                    className={`service-icon-container bg-gradient-to-r ${service.cardGradient}`}
                  >
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections with harmonious color transitions */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`service-section bg-gradient-to-br ${service.bgGradient}`}
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
              className={`absolute top-32 right-32 w-32 h-32 ${service.floatingColors[0]} rounded-full blur-2xl animate-pulse`}
            ></div>
            <div
              className={`absolute bottom-32 left-32 w-24 h-24 ${service.floatingColors[1]} rounded-full blur-xl animate-pulse delay-1000`}
            ></div>
            <div
              className={`absolute top-1/2 right-1/4 w-40 h-40 ${service.floatingColors[2]} rounded-full blur-3xl animate-pulse delay-2000`}
            ></div>
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="flex items-center gap-6 mb-8">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${service.cardGradient} flex items-center justify-center text-white shadow-2xl`}
                  >
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h2
                    className={`text-4xl md:text-5xl ${service.textColor} tracking-tight`}
                  >
                    {service.title}
                  </h2>
                </div>

                <p
                  className={`text-xl md:text-2xl leading-relaxed ${service.textColor} mb-12 opacity-90`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.cardGradient} flex items-center justify-center text-white`}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className={`${service.textColor} text-lg`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {service.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className={`text-3xl md:text-4xl ${service.textColor} mb-2`}>
                        {stat.number}
                      </div>
                      <div className={`text-sm ${service.textColor} opacity-80`}>
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
                    className={`relative w-full h-96 rounded-3xl bg-gradient-to-r ${service.cardGradient} shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-3xl`}></div>
                    {/* Gradient overlay for extra depth */}
                    <service.icon className="w-40 h-40 text-white opacity-50" />
                  </div>
                  {/* Floating elements around the visual with service colors */}
                  <div
                    className={`absolute -top-6 -right-6 w-24 h-24 ${service.floatingColors[0]} rounded-full blur-xl animate-bounce`}
                  ></div>
                  <div
                    className={`absolute -bottom-6 -left-6 w-32 h-32 ${service.floatingColors[1]} rounded-full blur-xl animate-pulse`}
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

      {/* Final Call to Action - Closing the circle back to purple */}
      <section className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-5xl md:text-6xl mb-8 bg-gradient-to-r from-white via-amber-200 to-purple-200 bg-clip-text text-transparent">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contáctanos para descubrir cómo podemos hacer realidad tu visión digital con soluciones innovadoras y personalizadas
          </p>
          <a href="/booking" style={{ textDecoration: 'none' }}>
          <Button className="bg-gradient-to-r from-amber-600 via-orange-600 to-purple-600 hover:from-amber-700 hover:via-orange-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 mx-auto block">
            <span className="flex items-center gap-3">
              Comenzar Proyecto
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
