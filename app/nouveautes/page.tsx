"use client"

import { useState } from "react"
import { Filter, Grid, List } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export default function NouveautesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const products = [
    {
      id: 1,
      name: "Maillot Domicile 2024/25 - Édition Spéciale Taraji Dawla",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "maillots",
      badge: "Nouveau",
      rating: 4.9,
      reviews: 127,
      description: "Le nouveau maillot domicile avec l'inscription 'Taraji Dawla' brodée",
    },
    {
      id: 2,
      name: "Écharpe 'احنا الترجي' - Édition Limitée",
      price: 45.0,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessoires",
      badge: "Exclusif",
      rating: 4.8,
      reviews: 89,
      description: "Écharpe premium avec calligraphie arabe authentique",
    },
    {
      id: 3,
      name: "Casquette Taraji Dawla - Collection Heritage",
      price: 39.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessoires",
      badge: "Heritage",
      rating: 4.7,
      reviews: 203,
      description: "Casquette avec broderie dorée 'Taraji Dawla'",
    },
    {
      id: 4,
      name: "Survêtement d'Entraînement 'احنا الترجي'",
      price: 149.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "vetements",
      badge: "Promo",
      rating: 4.9,
      reviews: 156,
      description: "Survêtement technique avec inscription en arabe",
    },
    {
      id: 5,
      name: "T-Shirt Vintage 'Taraji Dawla' 1919",
      price: 55.0,
      image: "/placeholder.svg?height=400&width=300",
      category: "vetements",
      badge: "Vintage",
      rating: 4.6,
      reviews: 98,
      description: "T-shirt commémoratif de la fondation du club",
    },
    {
      id: 6,
      name: "Sac à Dos 'احنا الترجي' Premium",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessoires",
      badge: "Premium",
      rating: 4.8,
      reviews: 134,
      description: "Sac à dos de qualité supérieure avec broderie arabe",
    },
  ]

  const categories = [
    { id: "maillots", name: "Maillots", count: 12 },
    { id: "accessoires", name: "Accessoires", count: 24 },
    { id: "vetements", name: "Vêtements", count: 18 },
  ]

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Better Gradient */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-800 to-amber-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/80 via-transparent to-yellow-500/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-500/30 to-red-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nouveautés{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
                Taraji
              </span>
            </h1>
            <p className="text-xl mb-6 opacity-90">احنا الترجي - Nous sommes Taraji</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Découvrez nos dernières créations qui célèbrent l'identité et la fierté de Taraji Dawla
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-red-600" />
                Filtres
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Catégories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category.id])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category.id))
                          }
                        }}
                      />
                      <label htmlFor={category.id} className="text-sm cursor-pointer">
                        {category.name} ({category.count})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Prix (DT)</h4>
                <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0]} DT</span>
                  <span>{priceRange[1]} DT</span>
                </div>
              </div>

              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => {
                  setSelectedCategories([])
                  setPriceRange([0, 200])
                }}
              >
                Réinitialiser
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-gray-600">{filteredProducts.length} produits</span>
                <div className="flex space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Plus récent</SelectItem>
                  <SelectItem value="price-low">Prix croissant</SelectItem>
                  <SelectItem value="price-high">Prix décroissant</SelectItem>
                  <SelectItem value="rating">Mieux notés</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
