"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Gift, Bell, Star, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const benefits = [
    {
      icon: Gift,
      title: "Offres VIP",
      description: "Réductions exclusives jusqu'à -30%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Bell,
      title: "Avant-Première",
      description: "Nouveautés 48h avant tout le monde",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Contenu Exclusif",
      description: "Actualités et contenus VIP Taraji",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-600/20 to-yellow-500/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-white space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                  <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                  Newsletter Taraji VIP
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Rejoignez la
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                    Famille Taraji
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  <span className="text-yellow-400 font-semibold">احنا الترجي</span> - Restez connecté avec l'univers
                  Taraji et profitez d'avantages exclusifs réservés à nos membres VIP.
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} shadow-lg`}>
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold"
                      >
                        T
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">+50K membres</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300 text-sm">4.9/5 satisfaction</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardContent className="p-8">
                  {!isSubscribed ? (
                    <>
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Mail className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Inscription Gratuite</h3>
                        <p className="text-gray-300">Accès immédiat aux avantages VIP</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Votre adresse email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 focus:border-yellow-400 h-14 text-lg pl-12"
                            required
                          />
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white h-14 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          Rejoindre Taraji VIP
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </form>

                      <p className="text-xs text-gray-400 text-center mt-6">
                        En vous inscrivant, vous acceptez nos conditions d'utilisation.
                        <br />
                        Désabonnement possible à tout moment.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Bienvenue dans la famille !</h3>
                      <p className="text-gray-300 mb-6">
                        Vous recevrez bientôt votre premier email VIP avec des offres exclusives.
                      </p>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-400 font-semibold">
                          🎉 Cadeau de bienvenue : -15% sur votre première commande !
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-500/30 to-red-600/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
