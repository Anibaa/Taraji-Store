"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Eye, Zap, Award, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedProductsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [autoPlay, setAutoPlay] = useState(true)

  const featuredProducts = [
    // Football Products
    {
      id: 1,
      name: "Maillot Football Domicile 2024/25 'Taraji Dawla'",
      sport: "Football",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Nouveau",
      rating: 4.9,
      reviews: 347,
      category: "football",
      features: ["Technologie Dri-FIT", "Broderie Premium", "Coupe Athlétique"],
      colors: ["Rouge/Jaune", "Rouge/Blanc"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      inStock: true,
      stockCount: 25,
      isOfficial: true,
      playerVersion: true,
    },
    {
      id: 2,
      name: "Maillot Football Extérieur 'Champions Edition'",
      sport: "Football",
      price: 94.99,
      originalPrice: 119.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Champions",
      rating: 4.8,
      reviews: 289,
      category: "football",
      features: ["Matière Respirante", "Design Exclusif", "Logo Brodé"],
      colors: ["Noir/Or", "Blanc/Rouge"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      inStock: true,
      stockCount: 18,
      isOfficial: true,
      playerVersion: true,
    },
    // Volleyball Products
    {
      id: 3,
      name: "Maillot Volleyball Officiel EST 'احنا الترجي'",
      sport: "Volleyball",
      price: 69.99,
      originalPrice: 84.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Officiel",
      rating: 4.7,
      reviews: 156,
      category: "volleyball",
      features: ["Tissu Ultra-Léger", "Évacuation Humidité", "Coupe Ergonomique"],
      colors: ["Rouge/Jaune", "Blanc/Rouge"],
      sizes: ["XS", "S", "M", "L", "XL"],
      inStock: true,
      stockCount: 22,
      isOfficial: true,
      playerVersion: false,
    },
    {
      id: 4,
      name: "Kit Volleyball Complet 'Taraji Dawla'",
      sport: "Volleyball",
      price: 129.99,
      originalPrice: 159.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Kit Complet",
      rating: 4.9,
      reviews: 203,
      category: "volleyball",
      features: ["Maillot + Short", "Matière Premium", "Personnalisation Incluse"],
      colors: ["Rouge/Jaune/Noir"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      stockCount: 12,
      isOfficial: true,
      playerVersion: true,
    },
    // Handball Products
    {
      id: 5,
      name: "Maillot Handball Professionnel EST",
      sport: "Handball",
      price: 74.99,
      originalPrice: 89.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Pro",
      rating: 4.8,
      reviews: 178,
      category: "handball",
      features: ["Résistant à l'Abrasion", "Séchage Rapide", "Liberté Mouvement"],
      colors: ["Rouge/Jaune", "Noir/Rouge"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      stockCount: 16,
      isOfficial: true,
      playerVersion: true,
    },
    {
      id: 6,
      name: "Ensemble Handball 'Taraji Champions'",
      sport: "Handball",
      price: 139.99,
      originalPrice: 169.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Ensemble",
      rating: 4.9,
      reviews: 234,
      category: "handball",
      features: ["Maillot + Short + Chaussettes", "Technologie Anti-Odeur", "Coupe Pro"],
      colors: ["Rouge/Jaune/Blanc"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      stockCount: 8,
      isOfficial: true,
      playerVersion: true,
    },
    // Basketball Products
    {
      id: 7,
      name: "Maillot Basketball EST 'Street Edition'",
      sport: "Basketball",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Street",
      rating: 4.6,
      reviews: 145,
      category: "basketball",
      features: ["Mesh Respirant", "Coupe Ample", "Design Urbain"],
      colors: ["Rouge/Noir", "Jaune/Rouge"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      stockCount: 20,
      isOfficial: true,
      playerVersion: false,
    },
    {
      id: 8,
      name: "Maillot Tennis EST 'احنا الترجي'",
      sport: "Tennis",
      price: 64.99,
      originalPrice: 79.99,
      image: "/placeholder.svg?height=500&width=400",
      hoverImage: "/placeholder.svg?height=500&width=400",
      badge: "Tennis",
      rating: 4.7,
      reviews: 112,
      category: "tennis",
      features: ["UV Protection", "Stretch 4-Way", "Élégant"],
      colors: ["Blanc/Rouge", "Rouge/Blanc"],
      sizes: ["XS", "S", "M", "L", "XL"],
      inStock: true,
      stockCount: 15,
      isOfficial: true,
      playerVersion: false,
    },
  ]

  const itemsPerSlide = 4
  const totalSlides = Math.ceil(featuredProducts.length / itemsPerSlide)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setAutoPlay(false)
  }

  const getCurrentProducts = () => {
    const startIndex = currentSlide * itemsPerSlide
    return featuredProducts.slice(startIndex, startIndex + itemsPerSlide)
  }

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case "Football":
        return "⚽"
      case "Volleyball":
        return "🏐"
      case "Handball":
        return "🤾"
      case "Basketball":
        return "🏀"
      case "Tennis":
        return "🎾"
      default:
        return "🏆"
    }
  }

  const getSportColor = (sport: string) => {
    switch (sport) {
      case "Football":
        return "bg-green-600"
      case "Volleyball":
        return "bg-blue-600"
      case "Handball":
        return "bg-orange-600"
      case "Basketball":
        return "bg-purple-600"
      case "Tennis":
        return "bg-pink-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            <Zap className="h-4 w-4 mr-2" />
            COLLECTION MULTI-SPORTS OFFICIELLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Maillots{" "}
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Officiels
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            احنا الترجي - Découvrez notre gamme complète de maillots officiels pour tous les sports
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-green-600" />
              Produits Officiels
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 text-yellow-600" />
              Qualité Premium
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1 text-blue-600" />
              Livraison Express
            </div>
          </div>
        </div>

        {/* Sports Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 bg-white rounded-2xl p-2 shadow-xl">
            {["Tous", "Football", "Volleyball", "Handball", "Basketball", "Tennis"].map((sport) => (
              <button
                key={sport}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-red-600 hover:text-white"
              >
                {sport !== "Tous" && getSportIcon(sport)} {sport}
              </button>
            ))}
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                    {featuredProducts
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((product, index) => (
                        <Card
                          key={product.id}
                          className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white"
                          onMouseEnter={() => setHoveredProduct(product.id)}
                          onMouseLeave={() => setHoveredProduct(null)}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={
                                hoveredProduct === product.id && product.hoverImage ? product.hoverImage : product.image
                              }
                              alt={product.name}
                              width={400}
                              height={500}
                              className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Sport Badge */}
                            <div className="absolute top-4 left-4 flex items-center space-x-2">
                              <Badge className={`${getSportColor(product.sport)} text-white font-bold`}>
                                {getSportIcon(product.sport)} {product.sport}
                              </Badge>
                              {product.isOfficial && (
                                <Badge className="bg-green-600 text-white">
                                  <Shield className="h-3 w-3 mr-1" />
                                  Officiel
                                </Badge>
                              )}
                            </div>

                            {/* Product Badge */}
                            <Badge
                              className={`absolute top-4 right-4 ${
                                product.badge === "Nouveau"
                                  ? "bg-green-600"
                                  : product.badge === "Champions"
                                    ? "bg-yellow-600"
                                    : product.badge === "Pro"
                                      ? "bg-purple-600"
                                      : "bg-blue-600"
                              } text-white font-bold`}
                            >
                              {product.badge}
                            </Badge>

                            {/* Quick Actions */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 mt-12">
                              <Button
                                size="icon"
                                variant="secondary"
                                className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="secondary"
                                className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Stock Indicator */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    product.stockCount > 10 ? "bg-green-500" : "bg-orange-500"
                                  }`}
                                ></div>
                                <span className="text-xs font-medium">
                                  {product.stockCount > 10 ? "En stock" : `${product.stockCount} restants`}
                                </span>
                              </div>
                            </div>

                            {/* Quick Add to Cart */}
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                              <Link href={`/produit/${product.id}`}>
                                <Button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white shadow-lg backdrop-blur-sm">
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Voir Détails
                                </Button>
                              </Link>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <div className="mb-3">
                              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                {product.name}
                              </h3>

                              {/* Features */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {product.features.slice(0, 2).map((feature, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">
                                {product.rating} ({product.reviews} avis)
                              </span>
                            </div>

                            {/* Colors */}
                            <div className="mb-4">
                              <div className="text-xs text-gray-500 mb-2">Couleurs disponibles:</div>
                              <div className="flex space-x-1">
                                {product.colors.map((color, idx) => (
                                  <div
                                    key={idx}
                                    className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gradient-to-r from-red-500 to-yellow-500"
                                    title={color}
                                  ></div>
                                ))}
                              </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-2xl text-gray-900">{product.price.toFixed(2)} DT</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">
                                    {product.originalPrice.toFixed(2)} DT
                                  </span>
                                )}
                              </div>
                              {product.originalPrice && (
                                <Badge variant="destructive" className="text-xs font-bold">
                                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
                                  %
                                </Badge>
                              )}
                            </div>

                            {/* Player Version Indicator */}
                            {product.playerVersion && (
                              <div className="mt-3 flex items-center justify-center">
                                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                  <Award className="h-3 w-3 mr-1" />
                                  Version Joueur
                                </Badge>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setAutoPlay(false)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-red-600 to-yellow-500 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAutoPlay(!autoPlay)}
            className="bg-white/80 backdrop-blur-sm"
          >
            {autoPlay ? "⏸️ Pause" : "▶️ Play"} Auto-défilement
          </Button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">احنا الترجي - Taraji Dawla</h3>
            <p className="text-xl mb-6 opacity-90">
              Rejoignez la famille Taraji avec nos maillots officiels multi-sports
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Voir Toute la Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Personnaliser Mon Maillot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
