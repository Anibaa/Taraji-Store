"use client"

import { useState } from "react"
import { ShoppingCart, Heart, Eye, Star, Percent, Clock, FlameIcon as Fire } from "lucide-react"
import Image from "next/image"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function PromoPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

  const promoProducts = [
    {
      id: 1,
      name: "Maillot Domicile 'Taraji Dawla' 2024/25",
      price: 69.99,
      originalPrice: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      discount: 22,
      badge: "Flash Sale",
      rating: 4.9,
      reviews: 234,
      stock: 15,
      maxStock: 50,
      endTime: "2024-12-31",
    },
    {
      id: 2,
      name: "Pack Supporter 'احنا الترجي' Complet",
      price: 99.99,
      originalPrice: 149.99,
      image: "/placeholder.svg?height=400&width=300",
      discount: 33,
      badge: "Méga Promo",
      rating: 4.8,
      reviews: 189,
      stock: 8,
      maxStock: 25,
      endTime: "2024-12-31",
    },
    {
      id: 3,
      name: "Collection Heritage 'Taraji Dawla' Vintage",
      price: 129.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=400&width=300",
      discount: 28,
      badge: "Liquidation",
      rating: 4.7,
      reviews: 156,
      stock: 3,
      maxStock: 20,
      endTime: "2024-12-31",
    },
    {
      id: 4,
      name: "Écharpe Premium 'احنا الترجي' Brodée",
      price: 29.99,
      originalPrice: 45.0,
      image: "/placeholder.svg?height=400&width=300",
      discount: 33,
      badge: "Dernière Chance",
      rating: 4.9,
      reviews: 298,
      stock: 22,
      maxStock: 100,
      endTime: "2024-12-31",
    },
    {
      id: 5,
      name: "Survêtement 'Taraji Champions' Édition Spéciale",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg?height=400&width=300",
      discount: 31,
      badge: "Hot Deal",
      rating: 4.6,
      reviews: 167,
      stock: 12,
      maxStock: 30,
      endTime: "2024-12-31",
    },
    {
      id: 6,
      name: "Casquette 'Taraji Dawla' Collection Or",
      price: 24.99,
      originalPrice: 39.99,
      image: "/placeholder.svg?height=400&width=300",
      discount: 38,
      badge: "Best Deal",
      rating: 4.5,
      reviews: 203,
      stock: 35,
      maxStock: 80,
      endTime: "2024-12-31",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Better Gradient */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-red-700 to-amber-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/85 via-orange-500/40 to-yellow-500/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/25 to-red-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-rose-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Fire className="h-6 w-6 text-yellow-300 animate-pulse" />
                <span className="font-bold text-lg">PROMOTIONS EXCEPTIONNELLES</span>
                <Fire className="h-6 w-6 text-yellow-300 animate-pulse" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                MEGA
              </span>{" "}
              PROMO
            </h1>
            <p className="text-2xl mb-4 opacity-90">احنا الترجي - Taraji Dawla</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Profitez de réductions exceptionnelles jusqu'à -50% sur une sélection de produits officiels
            </p>

            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">Offre limitée se termine dans :</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm opacity-80">Jours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm opacity-80">Heures</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm opacity-80">Min</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm opacity-80">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Offres <span className="text-red-600">Exceptionnelles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélection exclusive de produits Taraji à prix réduits - Quantités limitées !
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {promoProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg">
                    -{product.discount}%
                  </div>
                </div>

                {/* Status Badge */}
                <Badge
                  className={`absolute top-4 right-4 z-20 ${
                    product.badge === "Flash Sale"
                      ? "bg-orange-600 animate-pulse"
                      : product.badge === "Méga Promo"
                        ? "bg-purple-600"
                        : product.badge === "Liquidation"
                          ? "bg-red-700"
                          : product.badge === "Dernière Chance"
                            ? "bg-red-800 animate-bounce"
                            : "bg-green-600"
                  }`}
                >
                  {product.badge}
                </Badge>

                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter au Panier
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
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
                    <span className="text-sm text-gray-600 ml-2">({product.reviews} avis)</span>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Stock restant: {product.stock}</span>
                      <span>{Math.round((product.stock / product.maxStock) * 100)}%</span>
                    </div>
                    <Progress value={(product.stock / product.maxStock) * 100} className="h-2" />
                    <div className="text-xs text-red-600 mt-1 font-medium">
                      {product.stock < 10 ? "⚠️ Stock très limité !" : "📦 Stock disponible"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl text-red-600">{product.price.toFixed(2)} DT</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice.toFixed(2)} DT</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">
                        Économie: {(product.originalPrice - product.price).toFixed(2)} DT
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ne Ratez Pas Ces Offres !</h2>
          <p className="text-xl mb-8 opacity-90">
            احنا الترجي - Profitez de prix exceptionnels sur vos produits préférés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Percent className="h-5 w-5 mr-2" />
              Voir Toutes les Promos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              S'abonner aux Alertes Promo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
