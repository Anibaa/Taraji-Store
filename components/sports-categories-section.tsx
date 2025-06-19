"use client"

import { useState } from "react"
import { Trophy, Users, Star, TrendingUp, Award, Shield, Zap } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SportsCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("football")

  const sportsCategories = [
    {
      id: "football",
      name: "Football",
      icon: "⚽",
      description: "Maillots officiels de football EST",
      image: "/placeholder.svg?height=400&width=600",
      products: 45,
      bestseller: "Maillot Domicile 2024/25",
      color: "from-green-600 to-emerald-500",
      stats: {
        sales: "2,847",
        rating: 4.9,
        reviews: 1234,
      },
      features: ["Technologie Dri-FIT", "Broderie Premium", "Coupe Athlétique", "Matière Respirante"],
      achievements: ["30+ Titres Nationaux", "4x Champions d'Afrique", "Club le Plus Titré"],
    },
    {
      id: "volleyball",
      name: "Volleyball",
      icon: "🏐",
      description: "Équipements volleyball haute performance",
      image: "/placeholder.svg?height=400&width=600",
      products: 28,
      bestseller: "Kit Volleyball Complet",
      color: "from-blue-600 to-cyan-500",
      stats: {
        sales: "1,456",
        rating: 4.8,
        reviews: 567,
      },
      features: ["Tissu Ultra-Léger", "Évacuation Humidité", "Coupe Ergonomique", "Liberté Mouvement"],
      achievements: ["Champions Tunisie 2023", "Finaliste Coupe d'Afrique", "Équipe Professionnelle"],
    },
    {
      id: "handball",
      name: "Handball",
      icon: "🤾",
      description: "Maillots handball résistants et confortables",
      image: "/placeholder.svg?height=400&width=600",
      products: 32,
      bestseller: "Ensemble Handball Pro",
      color: "from-orange-600 to-red-500",
      stats: {
        sales: "1,234",
        rating: 4.7,
        reviews: 423,
      },
      features: ["Résistant Abrasion", "Séchage Rapide", "Anti-Odeur", "Coupe Professionnelle"],
      achievements: ["Vice-Champions Tunisie", "Participation Continentale", "Équipe Montante"],
    },
    {
      id: "basketball",
      name: "Basketball",
      icon: "🏀",
      description: "Maillots basketball style urbain",
      image: "/placeholder.svg?height=400&width=600",
      products: 24,
      bestseller: "Maillot Street Edition",
      color: "from-purple-600 to-pink-500",
      stats: {
        sales: "987",
        rating: 4.6,
        reviews: 298,
      },
      features: ["Mesh Respirant", "Coupe Ample", "Design Urbain", "Confort Maximum"],
      achievements: ["Équipe Émergente", "Style Unique", "Culture Urbaine"],
    },
    {
      id: "tennis",
      name: "Tennis",
      icon: "🎾",
      description: "Tenues tennis élégantes et techniques",
      image: "/placeholder.svg?height=400&width=600",
      products: 18,
      bestseller: "Polo Tennis Premium",
      color: "from-pink-600 to-rose-500",
      stats: {
        sales: "654",
        rating: 4.5,
        reviews: 187,
      },
      features: ["Protection UV", "Stretch 4-Way", "Élégance", "Performance"],
      achievements: ["Tournois Régionaux", "Élégance Sportive", "Tradition Tennis"],
    },
  ]

  const currentCategory = sportsCategories.find((cat) => cat.id === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5">
          EST
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Trophy className="h-4 w-4 mr-2" />
            SPORTS OFFICIELS EST
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Multi-Sports
            </span>
            <br />
            Excellence
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            احنا الترجي - Découvrez notre gamme complète d'équipements sportifs officiels pour tous les sports pratiqués
            par l'EST
          </p>
        </div>

        {/* Sports Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {sportsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "text-white/80 hover:text-white hover:bg-white/20"
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display */}
        {currentCategory && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Category Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{currentCategory.icon}</span>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{currentCategory.name}</h3>
                    <p className="text-xl text-gray-300">{currentCategory.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{currentCategory.products}</div>
                    <div className="text-sm text-gray-400">Produits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">{currentCategory.stats.sales}</div>
                    <div className="text-sm text-gray-400">Vendus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{currentCategory.stats.rating}</div>
                    <div className="text-sm text-gray-400">Note Moyenne</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                  Caractéristiques Techniques
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-400" />
                  Palmarès & Réalisations
                </h4>
                <div className="space-y-2">
                  {currentCategory.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Trophy className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${currentCategory.color} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  Voir Collection {currentCategory.name}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  Bestseller: {currentCategory.bestseller}
                </Button>
              </div>
            </div>

            {/* Category Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={currentCategory.image || "/placeholder.svg"}
                  alt={currentCategory.name}
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentCategory.color} opacity-20`}></div>

                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-900">{currentCategory.stats.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{currentCategory.stats.reviews} avis</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="font-bold text-gray-900">{currentCategory.stats.sales}</span>
                  </div>
                  <div className="text-sm text-gray-600">Produits vendus</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-red-600/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-red-600/30 to-yellow-500/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Trophy, number: "5", label: "Sports Officiels", color: "text-yellow-400" },
            { icon: Users, number: "127", label: "Produits Disponibles", color: "text-blue-400" },
            { icon: Star, number: "4.8", label: "Note Moyenne", color: "text-green-400" },
            { icon: Shield, number: "100%", label: "Produits Officiels", color: "text-red-400" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l'Excellence <span className="text-yellow-400">Multi-Sports</span>
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            احنا الترجي - Portez les couleurs de l'EST dans tous les sports avec nos équipements officiels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explorer Toutes les Collections
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Devenir Partenaire Sportif
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
