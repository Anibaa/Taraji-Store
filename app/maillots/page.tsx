"use client"

import { useState } from "react"
import { Shirt, Users, Trophy } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaillotsPage() {
  const [activeCategory, setActiveCategory] = useState("domicile")

  const jerseys = {
    domicile: [
      {
        id: 1,
        name: "Maillot Domicile 2024/25 'Taraji Dawla'",
        price: 89.99,
        originalPrice: 109.99,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Nouveau",
        rating: 4.9,
        reviews: 234,
        description: "Le maillot officiel domicile avec l'inscription 'Taraji Dawla' brodée en or",
        features: ["Technologie Dri-FIT", "Coupe athlétique", "Broderie premium"],
      },
      {
        id: 2,
        name: "Maillot Domicile Classique 'احنا الترجي'",
        price: 79.99,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Classique",
        rating: 4.8,
        reviews: 189,
        description: "Version classique avec calligraphie arabe authentique",
        features: ["100% Polyester", "Respirant", "Séchage rapide"],
      },
    ],
    exterieur: [
      {
        id: 3,
        name: "Maillot Extérieur 2024/25 'Taraji Champions'",
        price: 89.99,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Champions",
        rating: 4.7,
        reviews: 156,
        description: "Maillot extérieur inspiré de nos victoires continentales",
        features: ["Design unique", "Matière premium", "Confort optimal"],
      },
      {
        id: 4,
        name: "Maillot Extérieur Vintage 1919",
        price: 95.0,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Vintage",
        rating: 4.9,
        reviews: 98,
        description: "Édition spéciale commémorative de la fondation du club",
        features: ["Édition limitée", "Numérotation dorée", "Patch historique"],
      },
    ],
    entrainement: [
      {
        id: 5,
        name: "Maillot d'Entraînement 'Taraji Academy'",
        price: 65.0,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Training",
        rating: 4.6,
        reviews: 145,
        description: "Maillot technique pour l'entraînement et le sport",
        features: ["Ultra-léger", "Anti-transpiration", "Liberté de mouvement"],
      },
      {
        id: 6,
        name: "Maillot Pré-Match 'احنا الترجي'",
        price: 59.99,
        image: "/placeholder.svg?height=400&width=300",
        badge: "Pre-Match",
        rating: 4.5,
        reviews: 87,
        description: "Maillot d'échauffement officiel des joueurs",
        features: ["Coupe moderne", "Matière stretch", "Logo brodé"],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Better Gradient */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-red-800 to-yellow-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/80 via-transparent to-yellow-500/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-500/25 to-red-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-red-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center mb-6">
              <Shirt className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Maillots{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Taraji
              </span>
            </h1>
            <p className="text-2xl mb-4 opacity-90">احنا الترجي - Portez nos couleurs avec fierté</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Découvrez notre collection complète de maillots officiels, des versions domicile aux éditions spéciales
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Trophy className="h-12 w-12 text-yellow-500 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Titres Remportés</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-red-500 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Supporters</div>
            </div>
            <div className="flex flex-col items-center">
              <Shirt className="h-12 w-12 text-green-500 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Maillots Vendus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jerseys Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-2 rounded-xl max-w-md mx-auto">
              <TabsTrigger
                value="domicile"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold py-3"
              >
                Domicile
              </TabsTrigger>
              <TabsTrigger
                value="exterieur"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold py-3"
              >
                Extérieur
              </TabsTrigger>
              <TabsTrigger
                value="entrainement"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold py-3"
              >
                Entraînement
              </TabsTrigger>
            </TabsList>

            {Object.entries(jerseys).map(([category, products]) => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((jersey) => (
                    <ProductCard key={jersey.id} product={jersey} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Taraji Identity Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">احنا الترجي</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Chaque maillot raconte notre histoire, porte nos victoires et exprime notre fierté. Taraji Dawla - nous
            sommes une famille, nous sommes une légende.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Personnaliser Mon Maillot
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
