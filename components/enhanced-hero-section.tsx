"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Star, Shield, Award } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "احنا الترجي",
      titleEnglish: "Taraji Dawla",
      subtitle: "Collection Officielle 2024/25",
      description:
        "Découvrez notre nouvelle collection multi-sports avec les maillots officiels de football, volleyball et handball",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Découvrir la Collection",
      ctaSecondary: "Voir la Vidéo",
      badge: "Nouveau",
      stats: ["30+ Titres", "3 Sports", "100% Officiel"],
    },
    {
      id: 2,
      title: "Maillots Officiels",
      titleEnglish: "Official Jerseys",
      subtitle: "Football • Volleyball • Handball",
      description: "Portez les couleurs de l'EST avec fierté dans tous les sports. Qualité premium garantie.",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Voir les Maillots",
      ctaSecondary: "Guide des Tailles",
      badge: "Authentique",
      stats: ["Qualité Pro", "Livraison 24h", "Retours Gratuits"],
    },
    {
      id: 3,
      title: "تراث الترجي",
      titleEnglish: "Taraji Heritage",
      subtitle: "Depuis 1919 - Plus qu'un Club",
      description: "Célébrez l'histoire glorieuse de l'Espérance Sportive de Tunis avec nos collections heritage",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Collection Heritage",
      ctaSecondary: "Notre Histoire",
      badge: "Heritage",
      stats: ["104 Ans", "Légende", "Fierté Tunisienne"],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-600/70 to-yellow-600/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {index === currentSlide && (
                  <>
                    {/* Badge */}
                    <div className="mb-6">
                      <Badge className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-lg font-bold border border-white/30 animate-fade-in">
                        <Shield className="h-5 w-5 mr-2" />
                        {slide.badge}
                      </Badge>
                    </div>

                    {/* Arabic Title */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-tight">
                      <span className="block animate-slide-up" style={{ fontFamily: "Arial, sans-serif" }}>
                        {slide.title}
                      </span>
                    </h1>

                    {/* English Title */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up animation-delay-500">
                      <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                        {slide.titleEnglish}
                      </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl text-yellow-200 mb-6 font-semibold animate-fade-in-up animation-delay-600">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-800">
                      {slide.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-10 animate-fade-in-up animation-delay-1000">
                      {slide.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                        >
                          <Star className="h-5 w-5 text-yellow-400" />
                          <span className="text-white font-semibold">{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-1200">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl"
                      >
                        <Award className="h-6 w-6 mr-3" />
                        {slide.cta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-3 border-white text-white hover:bg-white hover:text-red-600 px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      >
                        <Play className="h-6 w-6 mr-3" />
                        {slide.ctaSecondary}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2 font-medium">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse z-10"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-2xl animate-pulse animation-delay-2000 z-10"></div>
    </section>
  )
}
