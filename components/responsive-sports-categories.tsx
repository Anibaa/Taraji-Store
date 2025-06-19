"use client"

import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sportsCategories } from "@/lib/data"

export default function ResponsiveSportsCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl block mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
              احنا الترجي
            </span>
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Nos Sports
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Football, Volleyball et Handball - Trois sports, une passion
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {sportsCategories.map((sport, index) => (
            <Card
              key={sport.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={sport.image || "/placeholder.svg"}
                  alt={sport.name}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-80`}></div>

                {/* Sport Icon */}
                <div className="absolute top-4 left-4">
                  <div className="text-4xl sm:text-5xl lg:text-6xl">{sport.icon}</div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{sport.name}</h3>
                  <p className="text-lg sm:text-xl text-white/90 mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                    {sport.nameArabic}
                  </p>
                  <p className="text-white/80 mb-4 text-sm sm:text-base">{sport.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-white/90 text-sm mb-4">
                    <span>{sport.products} produits</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{sport.stats.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Best-seller:</h4>
                  <p className="text-gray-600 text-sm">{sport.bestseller}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sport.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/${sport.id}`}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white">
                    Voir Collection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Rejoignez la Famille Taraji</h3>
            <p className="text-lg lg:text-xl mb-6 opacity-90">Découvrez tous nos maillots officiels multi-sports</p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold"
            >
              Voir Toute la Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
