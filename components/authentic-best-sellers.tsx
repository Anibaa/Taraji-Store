"use client"

import { useState } from "react"
import { Heart, Eye, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getBestSellers, filterTabs, arabicTexts } from "@/lib/data"

export default function AuthenticBestSellers() {
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const bestSellers = getBestSellers()
  const router = useRouter()

  const filteredProducts =
    activeTab === "all" ? bestSellers : bestSellers.filter((product) => product.sport === activeTab)

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const handleQuickView = (productId: number) => {
    router.push(`/produit/${productId}`)
  }

  const handleAddToCart = (product: any) => {
    // Simuler l'ajout au panier
    console.log("Ajout au panier:", product)
    alert(`${product.name} ajouté au panier !`)
  }

  const handleViewAll = () => {
    router.push("/collections")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mr-4"></div>
            <Badge className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2">Best Sellers</Badge>
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="block mb-2" style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
              {arabicTexts.champions}
            </span>
            <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
              Meilleures Ventes
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les maillots les plus populaires, choisis par nos fans pour leur qualité exceptionnelle
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
                  {tab.labelAr}
                </span>
                <span className="text-sm">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.slice(0, 8).map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleQuickView(product.id)}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                      <Badge className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-xs px-2 py-1">
                        {product.badge}
                      </Badge>
                    )}
                    {product.discount && product.discount > 0 && (
                      <Badge className="bg-green-500 text-white text-xs px-2 py-1">-{product.discount}%</Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(product.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                        favorites.includes(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuickView(product.id)
                      }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Eye className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge className="bg-red-500 text-white px-4 py-2">Rupture de stock</Badge>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
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
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">{product.price.toFixed(2)} DT</span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice.toFixed(2)} DT</span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product)
                    }}
                    className={`w-full ${
                      product.inStock
                        ? "bg-gradient-to-r from-red-600 to-yellow-500 hover:shadow-lg text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } transition-all duration-300`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Ajouter au panier" : "Indisponible"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={handleViewAll}
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Voir Tous les Produits
          </Button>
        </div>
      </div>
    </section>
  )
}
