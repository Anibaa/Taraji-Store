"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function SimplifiedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "احنا الترجي",
      subtitle: "Collection Officielle 2024/25",
      description: "Maillots officiels Football • Volleyball • Handball",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Découvrir",
    },
    {
      id: 2,
      title: "Taraji Dawla",
      subtitle: "Maillots Authentiques",
      description: "Qualité premium • Livraison rapide • Retours gratuits",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Voir Collection",
    },
    {
      id: 3,
      title: "EST 1919",
      subtitle: "Plus qu'un Club",
      description: "104 ans d'histoire • 30+ titres • Fierté tunisienne",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Notre Histoire",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-600/60 to-yellow-600/70 z-10"></div>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    {/* Main Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                      <span className="block animate-fade-in-up" style={{ fontFamily: "Arial, sans-serif" }}>
                        {slide.title}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-500">
                      <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                        {slide.subtitle}
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-800">
                      {slide.description}
                    </p>

                    {/* CTA */}
                    <div className="animate-fade-in-up animation-delay-1000">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-4 text-lg sm:text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        {slide.cta}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
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
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
