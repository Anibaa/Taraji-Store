"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Ruler,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react"
import Image from "next/image"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Base de données produits simulée
const productsDatabase = {
  1: {
    id: 1,
    name: "Maillot Domicile 2024/25 'Taraji Dawla' - Édition Spéciale",
    price: 89.99,
    originalPrice: 109.99,
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    category: "maillots",
    badge: "Nouveau",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    stockCount: 15,
    description:
      "Le maillot officiel domicile 2024/25 avec l'inscription 'Taraji Dawla' brodée en fil d'or. Conçu avec la technologie Dri-FIT pour un confort optimal sur et en dehors du terrain.",
    features: [
      "Technologie Dri-FIT pour évacuer la transpiration",
      "Broderie 'Taraji Dawla' en fil d'or authentique",
      "Coupe athlétique moderne",
      "100% Polyester recyclé",
      "Logo EST brodé haute qualité",
      "Étiquette d'authenticité incluse",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Rouge/Jaune", "Rouge/Blanc"],
    specifications: {
      Matière: "100% Polyester recyclé",
      Technologie: "Nike Dri-FIT",
      Coupe: "Athlétique",
      Entretien: "Lavage machine 30°C",
      Origine: "Fabriqué en Tunisie",
      Certification: "Produit officiel EST",
    },
    shipping: {
      standard: "Livraison gratuite en 2-3 jours",
      express: "Livraison express en 24h (+15 DT)",
      pickup: "Retrait gratuit en magasin",
    },
  },
  2: {
    id: 2,
    name: "Écharpe 'احنا الترجي' Premium - Édition Limitée",
    price: 45.0,
    originalPrice: null,
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    category: "accessoires",
    badge: "Exclusif",
    rating: 4.8,
    reviews: 189,
    inStock: true,
    stockCount: 8,
    description:
      "Écharpe premium avec calligraphie arabe authentique 'احنا الترجي'. Tissage de haute qualité aux couleurs officielles de l'EST.",
    features: [
      "Calligraphie arabe authentique",
      "Tissage jacquard premium",
      "Dimensions: 140cm x 18cm",
      "Franges tissées",
      "Couleurs officielles EST",
      "Emballage cadeau inclus",
    ],
    sizes: ["Unique"],
    colors: ["Rouge/Jaune/Noir"],
    specifications: {
      Matière: "100% Acrylique",
      Dimensions: "140cm x 18cm",
      Poids: "200g",
      Entretien: "Lavage à la main",
      Origine: "Fabriqué en Tunisie",
      Édition: "Limitée à 1000 exemplaires",
    },
    shipping: {
      standard: "Livraison gratuite en 2-3 jours",
      express: "Livraison express en 24h (+15 DT)",
      pickup: "Retrait gratuit en magasin",
    },
  },
  // Ajouter plus de produits...
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  const product = productsDatabase[productId as keyof typeof productsDatabase]

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <p className="text-gray-600 mb-8">Le produit que vous recherchez n'existe pas.</p>
          <Button onClick={() => router.push("/")} className="bg-red-600 hover:bg-red-700">
            Retour à l'accueil
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert("Veuillez sélectionner une taille")
      return
    }

    // Logique d'ajout au panier
    console.log("Ajout au panier:", {
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
    })

    // Simulation d'ajout réussi
    alert(`${product.name} ajouté au panier !`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers !")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button onClick={() => router.push("/")} className="hover:text-red-600">
            Accueil
          </button>
          <span>/</span>
          <button onClick={() => router.push(`/${product.category}`)} className="hover:text-red-600 capitalize">
            {product.category}
          </button>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Image principale */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.badge}</Badge>}

              {/* Navigation images */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Miniatures */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImage === index ? "border-red-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              {/* Prix */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-red-600">{product.price.toFixed(2)} DT</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice.toFixed(2)} DT</span>
                    <Badge variant="destructive">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  </>
                )}
              </div>

              {/* Stock */}
              <div className="flex items-center space-x-2 mb-6">
                {product.inStock ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">En stock ({product.stockCount} disponibles)</span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Rupture de stock</span>
                  </>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Couleur */}
              {product.colors.length > 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Couleur: {selectedColor}</label>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedColor === color
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Taille */}
              {product.sizes.length > 1 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-900">
                      Taille: {selectedSize || "Sélectionner"}
                    </label>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Ruler className="h-4 w-4 mr-1" />
                      Guide des tailles
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 border rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedSize === size
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantité */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Quantité</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gray-600">Maximum {product.stockCount} par commande</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-600 border-red-600" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Acheter maintenant
              </Button>
            </div>

            {/* Livraison */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{product.shipping.standard}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Garantie qualité 30 jours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Retours gratuits sous 14 jours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Détails produit */}
        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Caractéristiques</TabsTrigger>
              <TabsTrigger value="reviews">Avis ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>

                <h3 className="text-xl font-semibold mb-4">Caractéristiques principales :</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Spécifications techniques</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Livraison & Retours</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Truck className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Livraison standard</span>
                      </div>
                      <p className="text-sm text-gray-600">{product.shipping.standard}</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Truck className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Livraison express</span>
                      </div>
                      <p className="text-sm text-gray-600">{product.shipping.express}</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">Retrait en magasin</span>
                      </div>
                      <p className="text-sm text-gray-600">{product.shipping.pickup}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Avis clients</h3>
                  <Button variant="outline">Écrire un avis</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviews} avis</div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-3">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{
                                width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">
                            {stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Exemples d'avis */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Ahmed Ben Salem",
                      rating: 5,
                      date: "Il y a 2 jours",
                      comment:
                        "Excellent maillot ! La qualité est au rendez-vous et la broderie 'Taraji Dawla' est magnifique. Taille parfaitement.",
                    },
                    {
                      name: "Fatma Trabelsi",
                      rating: 5,
                      date: "Il y a 1 semaine",
                      comment:
                        "Très satisfaite de mon achat. Livraison rapide et produit conforme à la description. Je recommande !",
                    },
                    {
                      name: "Mohamed Khelifi",
                      rating: 4,
                      date: "Il y a 2 semaines",
                      comment:
                        "Bonne qualité mais j'aurais aimé plus d'options de tailles. Sinon très content du produit.",
                    },
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
