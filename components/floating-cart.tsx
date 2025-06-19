"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function FloatingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Maillot Domicile 2024/25",
      price: 89.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      size: "L",
      sport: "football",
    },
    {
      id: 2,
      name: "Écharpe Taraji Premium",
      price: 35.0,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
      sport: "accessoires",
    },
    {
      id: 3,
      name: "Maillot Volleyball Femme",
      price: 69.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      size: "M",
      sport: "volleyball",
    },
  ])

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleCheckout = () => {
    setIsOpen(false)
    router.push("/checkout")
  }

  const handleContinueShopping = () => {
    setIsOpen(false)
    router.push("/collections")
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = totalPrice > 100 ? 0 : 7.5
  const finalTotal = totalPrice + shippingCost

  return (
    <>
      {/* Floating Cart Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl transform hover:scale-110 transition-all duration-300"
            data-cart-trigger
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-yellow-500 text-black font-bold animate-pulse">
                {totalItems}
              </Badge>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Panier ({totalItems})
              </span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-lg font-bold">
                  {finalTotal.toFixed(2)} DT
                </Badge>
                {cartItems.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-600 hover:text-red-700">
                    Vider
                  </Button>
                )}
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-hidden">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg mb-2">Votre panier est vide</p>
                <p className="text-gray-400 text-sm mb-6">Ajoutez des produits pour commencer</p>
                <Button onClick={handleContinueShopping} className="bg-red-600 hover:bg-red-700">
                  Continuer les achats
                </Button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 max-h-96 overflow-y-auto py-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 line-clamp-2">{item.name}</h4>
                        {item.size && <p className="text-sm text-gray-600">Taille: {item.size}</p>}
                        <p className="text-sm text-gray-600 capitalize">Sport: {item.sport}</p>
                        <p className="font-bold text-red-600">{item.price.toFixed(2)} DT</p>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="w-8 text-center font-semibold">{item.quantity}</span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sous-total:</span>
                    <span className="font-semibold">{totalPrice.toFixed(2)} DT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Livraison:</span>
                    <span className={`font-semibold ${shippingCost === 0 ? "text-green-600" : ""}`}>
                      {shippingCost === 0 ? "Gratuite" : `${shippingCost.toFixed(2)} DT`}
                    </span>
                  </div>
                  {totalPrice < 100 && (
                    <div className="text-xs text-gray-500">Livraison gratuite à partir de 100 DT</div>
                  )}
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold text-red-600">{finalTotal.toFixed(2)} DT</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={handleCheckout}
                  >
                    Procéder au Paiement
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={handleContinueShopping}
                  >
                    Continuer les achats
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
