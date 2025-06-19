"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Ben Salem",
      role: "Fan depuis 15 ans",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "La qualité des produits est exceptionnelle ! J'ai acheté plusieurs maillots et ils sont identiques à ceux portés par les joueurs. Livraison rapide et service client au top.",
      product: "Maillot Domicile 2024",
    },
    {
      id: 2,
      name: "Fatma Trabelsi",
      role: "Supportrice passionnée",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Taraji Store est devenu ma boutique de référence. Les collections sont toujours à jour et les prix sont corrects. Je recommande vivement !",
      product: "Écharpe Premium",
    },
    {
      id: 3,
      name: "Mohamed Khelifi",
      role: "Collectionneur",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "En tant que collectionneur, je suis très exigeant sur l'authenticité. Tous mes achats chez Taraji Store sont des produits officiels de grande qualité.",
      product: "Collection Coupe du Monde",
    },
    {
      id: 4,
      name: "Leila Mansouri",
      role: "Mère de famille",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Mes enfants adorent porter les couleurs de Taraji. La boutique propose des tailles pour toute la famille et la qualité est au rendez-vous.",
      product: "Maillots Enfants",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Témoignages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que Disent Nos Fans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis authentiques de nos clients satisfaits qui font confiance à Taraji Store
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Quote className="h-12 w-12 text-red-600 mx-auto mb-6" />

                  <div className="relative">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={`transition-all duration-500 ${
                          index === currentTestimonial
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 absolute inset-0"
                        }`}
                      >
                        {index === currentTestimonial && (
                          <>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                              "{testimonial.text}"
                            </p>

                            <div className="flex items-center justify-center mb-6">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                              ))}
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-full border-4 border-white shadow-lg"
                              />
                              <div className="text-left">
                                <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                                <p className="text-gray-600">{testimonial.role}</p>
                                <p className="text-sm text-red-600 font-medium">Achat: {testimonial.product}</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  index === currentTestimonial ? "ring-2 ring-red-600" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-4 border-2 border-gray-200"
                  />
                  <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{testimonial.role}</p>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
