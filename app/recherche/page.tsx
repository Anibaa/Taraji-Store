"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Filter } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchTerm, setSearchTerm] = useState(query)

  // Simulation de résultats de recherche
  const searchResults = [
    {
      id: 1,
      name: "Maillot Domicile 2024/25 'Taraji Dawla'",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Nouveau",
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 2,
      name: "Écharpe 'احنا الترجي' Premium",
      price: 45.0,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Exclusif",
      rating: 4.8,
      reviews: 189,
    },
  ].filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Résultats de recherche pour "{query}"</h1>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600">
            {searchResults.length} résultat{searchResults.length > 1 ? "s" : ""} trouvé
            {searchResults.length > 1 ? "s" : ""}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h2>
            <p className="text-gray-600 mb-8">Essayez avec d'autres mots-clés ou parcourez nos catégories</p>
            <Button className="bg-red-600 hover:bg-red-700">Voir tous les produits</Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
