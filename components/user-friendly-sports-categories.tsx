"use client"

import { useState } from "react"
import { ArrowRight, Trophy, Users, Calendar, Target } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { sportsCategories, arabicTexts } from "@/lib/data"

export default function UserFriendlySportsCategories() {
  const [hoveredSport, setHoveredSport] = useState<string | null>(null)
  const router = useRouter()

  const handleSportClick = (sportId: string) => {
    router.push(`/${sportId}`)
  }

  const handleExploreAll = () => {
    router.push("/collections")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-yellow-500/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-4"></div>
            <Badge className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 text-lg">
              Nos Sports
            </Badge>
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full ml-4"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block mb-2" style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
              {arabicTexts.weAreTaraji}
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Trois Sports, Une Passion
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers sportif du Taraji à travers nos trois disciplines phares, chacune portant les couleurs
            rouge et jaune avec fierté
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {sportsCategories.map((sport, index) => (
            <Card
              key={sport.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredSport(sport.id)}
              onMouseLeave={() => setHoveredSport(null)}
              onClick={() => handleSportClick(sport.id)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-80`}></div>

                  {/* Sport Title Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <div className="text-4xl mb-2">{sport.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-2">{sport.name}</h3>
                    <p className="text-xl text-yellow-200 mb-4" style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
                      {sport.nameArabic}
                    </p>
                    <Badge className="bg-white/20 text-white px-3 py-1">{sport.products} Produits</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{sport.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-white font-semibold">{sport.stats.titles}</div>
                      <div className="text-gray-400 text-sm">Titres</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <Users className="h-6 w-6 text-red-400 mx-auto mb-2" />
                      <div className="text-white font-semibold">{sport.stats.players}</div>
                      <div className="text-gray-400 text-sm">Équipe</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <Calendar className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-white font-semibold">{sport.stats.founded}</div>
                      <div className="text-gray-400 text-sm">Fondé</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <Target className="h-6 w-6 text-red-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-xs">{sport.stats.stadium}</div>
                      <div className="text-gray-400 text-sm">Domicile</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Trophy className="h-4 w-4 text-yellow-400 mr-2" />
                      Derniers Succès
                    </h4>
                    <ul className="space-y-2">
                      {sport.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSportClick(sport.id)
                    }}
                    className={`w-full bg-gradient-to-r ${sport.color} hover:shadow-xl text-white font-semibold py-3 transform transition-all duration-300 ${
                      hoveredSport === sport.id ? "scale-105" : ""
                    }`}
                  >
                    Découvrir {sport.name}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={handleExploreAll}
            className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white px-12 py-4 text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explorer Toutes les Collections
            <ArrowRight className="h-6 w-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  )
}
