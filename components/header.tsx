"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Search, Menu, Heart, User, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(5)
  const [wishlistCount, setWishlistCount] = useState(2)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "Accueil", href: "/" },
    { name: "Nouveautés", href: "/nouveautes" },
    { name: "Collections", href: "/collections" },
    { name: "Maillots", href: "/maillots" },
    { name: "Accessoires", href: "/accessoires" },
    { name: "Points de Vente", href: "/points-vente" },
    { name: "Promo", href: "/promo" },
  ]

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(searchTerm)}`)
      setIsSearchOpen(false)
    }
  }

  const handleCartClick = () => {
    // Ouvrir le panier flottant
    const cartTrigger = document.querySelector("[data-cart-trigger]") as HTMLButtonElement
    if (cartTrigger) {
      cartTrigger.click()
    }
  }

  const handleWishlistClick = () => {
    router.push("/wishlist")
  }

  const handleProfileClick = () => {
    router.push("/profile")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec les vrais logos Taraji et EST */}
          <Link href="/" className="flex items-center space-x-3 group">

            <div>
                            <Image
                src="/taraji-store.png"
                alt="Taraji Logo"
                width={160}    
                height={160}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <p className={`text-xs transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                احنا الترجي - Boutique Officielle
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"
                }`}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border p-4 animate-in slide-in-from-top-2 duration-300">
                  <Input
                    type="search"
                    placeholder="Rechercher des produits..."
                    className="w-full"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch((e.target as HTMLInputElement).value)
                      }
                    }}
                  />
                  <div className="mt-3 text-xs text-gray-500">Appuyez sur Entrée pour rechercher</div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className={`relative transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"
              }`}
              onClick={handleWishlistClick}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-600 text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button
              variant="ghost"
              size="icon"
              className={`transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"
              }`}
              onClick={handleProfileClick}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className={`relative transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"
              }`}
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-600 text-xs animate-bounce">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"}`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-yellow-500 to-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">T</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Taraji Store</h2>
                    <p className="text-sm text-gray-600">احنا الترجي</p>
                  </div>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <div className="w-0 h-0.5 bg-red-600 group-hover:w-8 transition-all duration-300"></div>
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-center text-gray-600 mb-4">احنا الترجي - Taraji Dawla</p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => router.push("/login")}
                    >
                      Se Connecter
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => router.push("/register")}>
                      S'inscrire
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
