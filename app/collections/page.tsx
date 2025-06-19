"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionsPage() {
  const [activeCollection, setActiveCollection] = useState("coupe-monde")

  const collections = [
    {
      id: "coupe-monde",
      name: "Collection Coupe du Monde 2025",
      subtitle: "Taraji Dawla على الطريق إلى المجد",
      description:
        "Une collection exclusive créée pour célébrer la participation historique de Taraji à la Coupe du Monde 2025. Chaque pièce raconte l'histoire de notre fierté et de notre passion.",
      image: "/placeholder.svg?height=600&width=800",
      products: 15,
      price: "À partir de 45 DT",
      badge: "Édition Limitée",
      color: "from-red-600 to-yellow-500",
    },
    {
      id: "heritage",
      name: "Collection Heritage 'احنا الترجي'",
      subtitle: "L'âme de Taraji depuis 1919",
      description:
        "Redécouvrez l'histoire glorieuse de l'Espérance Sportive de Tunis à travers cette collection qui rend hommage à nos racines et à notre identité tunisienne.",
      image: "/placeholder.svg?height=600&width=800",
      products: 22,
      price: "À partir de 39 DT",
      badge: "Classique",
      color: "from-yellow-600 to-red-600",
    },
    {
      id: "champions",
      name: "Collection Champions",
      subtitle: "Taraji Dawla - Les Rois d'Afrique",
      description:
        "Célébrez nos victoires continentales avec cette collection dédiée à nos triomphes en Ligue des Champions d'Afrique et nos titres nationaux.",
      image: "/placeholder.svg?height=600&width=800",
      products: 18,
      price: "À partir de 55 DT",
      badge: "Victoire",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "lifestyle",
      name: "Collection Lifestyle 'Taraji Style'",
      subtitle: "Portez Taraji au quotidien",
      description:
        "Une collection moderne et élégante pour porter les couleurs de Taraji dans votre vie quotidienne avec style et fierté.",
      image: "/placeholder.svg?height=600&width=800",
      products: 28,
      price: "À partir de 35 DT",
      badge: "Tendance",
      color: "from-gray-800 to-red-600",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Maillot Coupe du Monde 'Taraji Dawla'",
      price: "89.99 DT",
      image: "/placeholder.svg?height=300&width=250",
      collection: "coupe-monde",
    },
    {
      id: 2,
      name: "Écharpe Heritage 'احنا الترجي'",
      price: "45.00 DT",
      image: "/placeholder.svg?height=300&width=250",
      collection: "heritage",
    },
    {
      id: 3,
      name: "Polo Champions Edition",
      price: "65.00 DT",
      image: "/placeholder.svg?height=300&width=250",
      collection: "champions",
    },
    {
      id: 4,
      name: "Hoodie Lifestyle Taraji",
      price: "79.99 DT",
      image: "/placeholder.svg?height=300&width=250",
      collection: "lifestyle",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Better Gradient */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-red-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/70 via-transparent to-yellow-500/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Collections{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Taraji
              </span>
            </h1>
            <p className="text-2xl mb-4 opacity-90">احنا الترجي - Taraji Dawla</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Explorez nos collections exclusives qui célèbrent l'histoire, la passion et la fierté de l'Espérance
              Sportive de Tunis
            </p>
          </div>
        </div>
      </section>

      {/* Collections Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeCollection} onValueChange={setActiveCollection} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-100 p-2 rounded-xl">
              {collections.map((collection) => (
                <TabsTrigger
                  key={collection.id}
                  value={collection.id}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold py-3"
                >
                  {collection.name.split(" ")[1]}
                </TabsTrigger>
              ))}
            </TabsList>

            {collections.map((collection) => (
              <TabsContent key={collection.id} value={collection.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div className="space-y-6">
                    <div>
                      <Badge className={`bg-gradient-to-r ${collection.color} text-white mb-4`}>
                        {collection.badge}
                      </Badge>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{collection.name}</h2>
                      <p className="text-xl text-red-600 font-semibold mb-6">{collection.subtitle}</p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{collection.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">{collection.products}</div>
                        <div className="text-sm text-gray-600">Produits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">★★★★★</div>
                        <div className="text-sm text-gray-600">Qualité Premium</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${collection.color} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg`}
                      >
                        Découvrir la Collection
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                      >
                        {collection.price}
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        width={800}
                        height={600}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20`}></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
                  </div>
                </div>

                {/* Featured Products from Collection */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts
                    .filter((product) => product.collection === collection.id)
                    .concat(featuredProducts.filter((product) => product.collection !== collection.id).slice(0, 3))
                    .slice(0, 4)
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={250}
                            height={300}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />

                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-lg text-gray-900">{product.price}</span>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              Voir
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez la Famille Taraji</h2>
          <p className="text-xl mb-8 opacity-90">احنا الترجي - Ensemble, nous sommes plus forts</p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Voir Toutes les Collections
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
