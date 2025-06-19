"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function NewArrivalsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const newProducts = [
    {
      id: 1,
      name: "Maillot Domicile 2024/25 - Édition Spéciale",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=400&width=300",
      hoverImage: "/placeholder.svg?height=400&width=300",
      badge: "Nouveau",
      rating: 4.9,
      reviews: 127,
      isNew: true,
    },
    {
      id: 2,
      name: "Survêtement d'Entraînement Premium",
      price: 149.99,
      image: "/placeholder.svg?height=400&width=300",
      hoverImage: "/placeholder.svg?height=400&width=300",
      badge: "Exclusif",
      rating: 4.8,
      reviews: 89,
      isNew: true,
    },
    {
      id: 3,
      name: "Casquette Coupe du Monde 2025",
      price: 45.0,
      image: "/placeholder.svg?height=400&width=300",
      hoverImage: "/placeholder.svg?height=400&width=300",
      badge: "Édition Limitée",
      rating: 4.7,
      reviews: 203,
      isNew: true,
    },
    {
      id: 4,
      name: "Écharpe Officielle Taraji - Nouvelle Version",
      price: 39.99,
      image: "/placeholder.svg?height=400&width=300",
      hoverImage: "/placeholder.svg?height=400&width=300",
      badge: "Populaire",
      rating: 4.9,
      reviews: 156,
      isNew: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            Nouveautés
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dernières Arrivées</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos tout derniers produits officiels, fraîchement arrivés dans notre boutique
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} hoveredProduct={hoveredProduct} onHover={setHoveredProduct} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Voir Toutes les Nouveautés
          </Button>
        </div>
      </div>
    </section>
  )
}
