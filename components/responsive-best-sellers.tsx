"use client"

import { useState } from "react"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBestSellers } from "@/lib/data"

export default function ResponsiveBestSellers() {
  const [activeTab, setActiveTab] = useState("all")
  const bestSellers = getBestSellers()

  const tabs = [
    { id: "all", label: "Tous" },
    { id: "football", label: "Football" },
    { id: "volleyball", label: "Volleyball" },
    { id: "handball", label: "Handball" },
  ]

  const filteredProducts =
    activeTab === "all" ? bestSellers : bestSellers.filter((product) => product.sport === activeTab)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Top Sellers</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Les produits les plus populaires de notre collection
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 bg-white rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id ? "bg-red-600 text-white shadow-lg" : "text-gray-600 hover:text-red-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.slice(0, 8).map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Simple Badge */}
                {product.isNew && <Badge className="absolute top-4 right-4 bg-green-600 text-white">Nouveau</Badge>}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <Link href={`/produit/${product.id}`}>
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Voir Détails
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
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
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-gray-900">{product.price.toFixed(2)} DT</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} DT</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-3 font-semibold"
          >
            Voir Tous les Best Sellers
          </Button>
        </div>
      </div>
    </section>
  )
}
