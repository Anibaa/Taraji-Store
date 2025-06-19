"use client"

import { useState } from "react"
import { Shield, Award, Truck, RotateCcw, Crown, Zap, Star, Users, Heart, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const premiumFeatures = [
    {
      icon: Shield,
      title: "Authenticité Garantie",
      description: "Tous nos produits sont 100% officiels et authentiques",
      details: [
        "Certification officielle EST",
        "Hologramme de sécurité",
        "Numéro de série unique",
        "Garantie d'authenticité",
      ],
      color: "from-green-600 to-emerald-500",
      stats: "100% Authentique",
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Matériaux de haute qualité et finitions exceptionnelles",
      details: [
        "Tissus techniques premium",
        "Broderies haute définition",
        "Coutures renforcées",
        "Tests de qualité rigoureux",
      ],
      color: "from-orange-600 to-red-500",
      stats: "Note 4.9/5",
    },
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Livraison rapide et sécurisée partout en Tunisie",
      details: ["Livraison en 24-48h", "Suivi en temps réel", "Emballage sécurisé", "Livraison gratuite dès 100 DT"],
      color: "from-yellow-600 to-orange-500",
      stats: "24-48h",
    }
  ]

  const testimonials = [
    {
      name: "Ahmed Ben Salem",
      role: "Supporter depuis 20 ans",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "La qualité est exceptionnelle ! Mon maillot Taraji Dawla est identique à celui des joueurs. Service client au top.",
      verified: true,
    },
    {
      name: "Fatma Trabelsi",
      role: "Collectionneuse",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "J'ai toute la collection multi-sports. Chaque produit est authentique et de qualité premium. Livraison toujours rapide.",
      verified: true,
    },
    {
      name: "Mohamed Khelifi",
      role: "Joueur amateur",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "En tant que joueur, je peux confirmer que ces maillots sont identiques à ceux des pros. Confort et performance garantis.",
      verified: true,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            <Crown className="h-4 w-4 mr-2" />
            EXPÉRIENCE PREMIUM TARAJI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir{" "}
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Taraji Store
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احنا الترجي - Découvrez l'excellence de notre service et la qualité premium de nos produits officiels
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {premiumFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                activeFeature === index ? "ring-2 ring-red-600 shadow-2xl" : ""
              }`}
              onClick={() => setActiveFeature(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                <Badge className={`bg-gradient-to-r ${feature.color} text-white font-bold mb-4`}>{feature.stats}</Badge>

                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full mt-6 bg-gradient-to-r ${feature.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300`}
                >
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">احنا الترجي - Nos Chiffres Parlent</h3>
            <p className="text-xl opacity-90">La confiance de milliers de supporters</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50,000+", label: "Clients Satisfaits", growth: "+23%" },
              { icon: Star, number: "4.9/5", label: "Note Moyenne", growth: "+0.2" },
              { icon: Shield, number: "100%", label: "Produits Authentiques", growth: "Garanti" },
              { icon: Heart, number: "98%", label: "Clients Fidèles", growth: "+15%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 mb-2">{stat.label}</div>
                <Badge className="bg-white/20 text-white border-white/30">+{stat.growth}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages <span className="text-red-600">Authentiques</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que disent nos clients sur leur expérience Taraji Store
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        {testimonial.name}
                        {testimonial.verified && <CheckCircle className="h-4 w-4 text-green-500 ml-2" />}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez l'Excellence Taraji</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احنا الترجي - Découvrez pourquoi des milliers de supporters nous font confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Commencer Mes Achats
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Devenir Membre VIP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
