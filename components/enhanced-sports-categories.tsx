"use client"

import { useState } from "react"
import { Trophy, Users, Star, TrendingUp, Award, Shield, Zap, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sportsCategories, getProductsBySport } from "@/lib/data"

export default function EnhancedSportsCategories() {
  const [activeCategory, setActiveCategory] = useState("football")

  const currentCategory = sportsCategories.find((cat) => cat.id === activeCategory)
  const categoryProducts = getProductsBySport(activeCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5">
          EST
        </div>
        {/* Arabic calligraphy background */}
        <div
          className="absolute top-1/4 right-1/4 text-[15rem] font-bold text-white/3 rotate-12"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          احنا
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 text-[15rem] font-bold text-white/3 -rotate-12"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          الترجي
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Trophy className="h-4 w-4 mr-2" />
            SPORTS OFFICIELS EST
          </div>

          {/* Arabic Title */}
          <h2 className="text-6xl md:text-8xl font-bold mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
            احنا الترجي
          </h2>

          {/* English Title */}
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Multi-Sports
            </span>
            <br />
            Excellence
          </h3>

          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez notre gamme complète d'équipements sportifs officiels pour les trois sports phares de l'EST
          </p>
        </div>

        {/* Enhanced Sports Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            {sportsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "text-white/80 hover:text-white hover:bg-white/20"
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="font-bold">{category.name}</span>
                  <span className="text-xs opacity-80" style={{ fontFamily: "Arial, sans-serif" }}>
                    {category.nameArabic}
                  </span>
                  <Badge variant="outline" className="text-xs border-white/30 text-white/70">
                    {getProductsBySport(category.id).length} produits
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Active Category Display */}
        {currentCategory && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Category Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-8xl mr-6">{currentCategory.icon}</span>
                  <div>
                    <h3 className="text-5xl font-bold mb-2">{currentCategory.name}</h3>
                    <p className="text-2xl text-yellow-300 mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                      {currentCategory.nameArabic}
                    </p>
                    <p className="text-xl text-gray-300">{currentCategory.description}</p>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{currentCategory.products}</div>
                    <div className="text-sm text-gray-400">Produits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">{currentCategory.stats.sales}</div>
                    <div className="text-sm text-gray-400">Vendus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{currentCategory.stats.rating}</div>
                    <div className="text-sm text-gray-400">Note Moyenne</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Features */}
              <div>
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-yellow-400" />
                  Caractéristiques Techniques
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Achievements */}
              <div>
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-yellow-400" />
                  Palmarès & Réalisations
                </h4>
                <div className="space-y-3">
                  {currentCategory.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${currentCategory.color} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <ChevronRight className="h-5 w-5 mr-2" />
                  Collection {currentCategory.name}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <Star className="h-5 w-5 mr-2" />
                  {currentCategory.bestseller}
                </Button>
              </div>
            </div>

            {/* Enhanced Category Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={currentCategory.image || "/placeholder.svg"}
                  alt={currentCategory.name}
                  width={600}
                  height={500}
                  className="w-full h-[600px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentCategory.color} opacity-20`}></div>

                {/* Enhanced Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-900 text-xl">{currentCategory.stats.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{currentCategory.stats.reviews} avis clients</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-gray-900 text-xl">{currentCategory.stats.sales}</span>
                  </div>
                  <div className="text-sm text-gray-600">Produits vendus</div>
                </div>

                {/* Sport Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-[8rem] opacity-20">{currentCategory.icon}</div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-red-600/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-red-600/30 to-yellow-500/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        )}

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Trophy,
              number: "3",
              label: "Sports Officiels",
              color: "text-yellow-400",
              desc: "Football, Volleyball, Handball",
            },
            { icon: Users, number: `${sportsCategories.reduce((acc, cat) => acc + cat.products, 0)}` },
            {
              icon: Users,
              number: `${sportsCategories.reduce((acc, cat) => acc + cat.products, 0)}`,
              label: "Produits Disponibles",
              color: "text-blue-400",
              desc: "Toutes catégories confondues",
            },
            {
              icon: Star,
              number: "4.8",
              label: "Note Moyenne",
              color: "text-green-400",
              desc: "Satisfaction client garantie",
            },
            {
              icon: Shield,
              number: "100%",
              label: "Produits Officiels",
              color: "text-red-400",
              desc: "Authenticité certifiée",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-6xl" style={{ fontFamily: "Arial, sans-serif" }}>
                احنا
              </div>
              <div className="absolute bottom-4 right-4 text-6xl" style={{ fontFamily: "Arial, sans-serif" }}>
                الترجي
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="block text-5xl md:text-6xl mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  احنا الترجي
                </span>
                Rejoignez l'Excellence <span className="text-yellow-400">Multi-Sports</span>
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Portez les couleurs de l'EST dans tous les sports avec nos équipements officiels de qualité premium
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Trophy className="h-5 w-5 mr-2" />
                  Explorer Toutes les Collections
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <Award className="h-5 w-5 mr-2" />
                  Devenir Partenaire Sportif
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
