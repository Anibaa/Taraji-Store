"use client"

import { useState } from "react"
import { Crown } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function BestSellersSection() {
  const [activeTab, setActiveTab] = useState("all")

  // Corriger les données des produits pour que les prix soient des nombres
  const bestSellers = [
    {
      id: 1,
      name: "Maillot Domicile Classique",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=250",
      rank: 1,
      sales: "2,847",
      category: "maillots",
      growth: "+23%",
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 2,
      name: "Écharpe Taraji Premium",
      price: 35.0,
      image: "/placeholder.svg?height=300&width=250",
      rank: 2,
      sales: "1,923",
      category: "accessoires",
      growth: "+18%",
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 3,
      name: "Casquette Officielle",
      price: 42.0,
      image: "/placeholder.svg?height=300&width=250",
      rank: 3,
      sales: "1,654",
      category: "accessoires",
      growth: "+15%",
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 4,
      name: "Short Domicile 2024",
      price: 45.99,
      image: "/placeholder.svg?height=300&width=250",
      rank: 4,
      sales: "1,432",
      category: "maillots",
      growth: "+12%",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 5,
      name: "Sac à Dos Taraji",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=250",
      rank: 5,
      sales: "1,287",
      category: "accessoires",
      growth: "+10%",
      rating: 4.5,
      reviews: 134,
    },
  ]

  const tabs = [
    { id: "all", label: "Tous", count: bestSellers.length },
    { id: "maillots", label: "Maillots", count: bestSellers.filter((p) => p.category === "maillots").length },
    { id: "accessoires", label: "Accessoires", count: bestSellers.filter((p) => p.category === "accessoires").length },
  ]

  const filteredProducts =
    activeTab === "all" ? bestSellers : bestSellers.filter((product) => product.category === activeTab)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            <Crown className="h-4 w-4 mr-2" />
            Best Sellers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Produits les Plus Vendus</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les produits préférés de nos fans, classés par popularité et ventes
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Voir Tous les Best Sellers
          </Button>
        </div>
      </div>
    </section>
  )
}
