"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number | string // Accepter les deux types temporairement
    originalPrice?: number | string
    image: string
    hoverImage?: string
    badge?: string
    rating: number
    reviews: number
    category?: string
  }
  hoveredProduct?: number | null
  onHover?: (id: number | null) => void
}

export default function ProductCard({ product, hoveredProduct, onHover }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Logique d'ajout au panier
    console.log("Ajout au panier:", product.id)
    alert(`${product.name} ajouté au panier !`)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Ouvrir modal de vue rapide ou rediriger
    window.open(`/produit/${product.id}`, "_blank")
  }

  return (
    <Link href={`/produit/${product.id}`}>
      <Card
        className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => onHover?.(product.id)}
        onMouseLeave={() => onHover?.(null)}
      >
        <div className="relative overflow-hidden">
          <Image
            src={hoveredProduct === product.id && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            width={300}
            height={400}
            className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badge */}
          {product.badge && (
            <Badge
              className={`absolute top-4 left-4 z-10 ${
                product.badge === "Nouveau"
                  ? "bg-green-600"
                  : product.badge === "Exclusif"
                    ? "bg-purple-600"
                    : product.badge === "Édition Limitée"
                      ? "bg-orange-600"
                      : "bg-blue-600"
              }`}
            >
              {product.badge}
            </Badge>
          )}

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <Button
              size="icon"
              variant="secondary"
              className={`h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg ${
                isWishlisted ? "text-red-600" : ""
              }`}
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Ajouter au Panier
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {product.name}
          </h3>

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
            <span className="text-sm text-gray-600 ml-2">({product.reviews} avis)</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-gray-900">
                {typeof product.price === "string" ? product.price : `${product.price.toFixed(2)} DT`}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {typeof product.originalPrice === "string"
                    ? product.originalPrice
                    : `${product.originalPrice.toFixed(2)} DT`}
                </span>
              )}
            </div>
            {product.originalPrice &&
              typeof product.price === "number" &&
              typeof product.originalPrice === "number" && (
                <Badge variant="destructive" className="text-xs">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </Badge>
              )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
