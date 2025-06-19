"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Collection Coupe du Monde 2025",
      subtitle: "Édition Limitée",
      description: "Soutenez Taraji avec style dans la collection officielle Coupe du Monde 2025",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Découvrir la Collection",
      ctaSecondary: "Voir la Vidéo",
    },
    {
      id: 2,
      title: "Nouveaux Maillots 2024/25",
      subtitle: "Maintenant Disponible",
      description: "Les nouveaux maillots domicile et extérieur sont arrivés",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Acheter Maintenant",
      ctaSecondary: "Voir Tous les Maillots",
    },
    {
      id: 3,
      title: "Accessoires Officiels",
      subtitle: "Complétez Votre Look",
      description: "Écharpes, casquettes, sacs et plus encore aux couleurs de Taraji",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Explorer Accessoires",
      ctaSecondary: "Voir Promotions",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-yellow-500/60 to-black/80 z-10"></div>
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
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium animate-fade-in">
                        {slide.subtitle}
                      </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
                      {slide.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className="inline-block animate-fade-in-up"
                          style={{ animationDelay: `${i * 200}ms` }}
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl animate-fade-in-up animation-delay-600">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                      >
                        {slide.cta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                      >
                        <Play className="h-5 w-5 mr-2" />
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

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2">Défiler</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}
