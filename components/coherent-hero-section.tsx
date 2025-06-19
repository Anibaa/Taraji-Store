"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Star, Shield, Truck, Play } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { heroSlides } from "@/lib/data"

export default function CoherentHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const handleMainCTA = () => {
    const currentSlideData = heroSlides[currentSlide]
    if (currentSlideData.id === 1) {
      router.push("/collections")
    } else if (currentSlideData.id === 2) {
      router.push("/collections?filter=limited")
    } else {
      router.push("/about")
    }
  }

  const handleVideoClick = () => {
    // Ouvrir modal vidéo ou rediriger vers page vidéo
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-600 to-yellow-600">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-600/70 to-yellow-600/80 z-10"></div>
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Trust Indicators */}
      <div className="absolute top-20 right-4 lg:right-8 z-30 space-y-3">
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-white text-center cursor-pointer hover:bg-white/30 transition-colors">
          <Star className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
          <div className="text-sm font-semibold">4.9/5</div>
          <div className="text-xs opacity-80">5,847 avis</div>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-white text-center cursor-pointer hover:bg-white/30 transition-colors">
          <Shield className="h-5 w-5 text-green-400 mx-auto mb-1" />
          <div className="text-xs">Paiement</div>
          <div className="text-xs opacity-80">Sécurisé</div>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-white text-center cursor-pointer hover:bg-white/30 transition-colors">
          <Truck className="h-5 w-5 text-blue-400 mx-auto mb-1" />
          <div className="text-xs">Livraison</div>
          <div className="text-xs opacity-80">24-48h</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : "opacity-0 translate-y-8 translate-x-4"
                }`}
              >
                {index === currentSlide && (
                  <>
                    {/* Badge */}
                    <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-4 py-2 text-sm animate-pulse">
                      {slide.badge}
                    </Badge>

                    {/* Main Title - Arabic */}
                    <h1
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
                      style={{
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
                        animation: "fadeInUp 1s ease-out",
                      }}
                    >
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                      style={{
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        animation: "fadeInUp 1s ease-out 0.3s both",
                      }}
                    >
                      <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                        {slide.subtitle}
                      </span>
                    </h2>

                    {/* Description */}
                    <p
                      className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed"
                      style={{
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        animation: "fadeInUp 1s ease-out 0.6s both",
                      }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className="flex flex-col sm:flex-row gap-4"
                      style={{ animation: "fadeInUp 1s ease-out 0.9s both" }}
                    >
                      <Button
                        size="lg"
                        onClick={handleMainCTA}
                        className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:shadow-2xl text-white px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        {slide.cta}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleVideoClick}
                        className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm text-black"
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Voir Vidéo
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
        <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
