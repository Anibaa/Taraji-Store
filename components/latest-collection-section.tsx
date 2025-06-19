"use client"

import { useState } from "react"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function LatestCollectionSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full text-sm font-medium mb-6">
                Collection Exclusive 2025
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                  Coupe du Monde
                </span>
                <br />
                <span className="text-white">2025</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Une collection unique créée spécialement pour célébrer la participation de Taraji à la Coupe du Monde.
                Chaque pièce raconte l'histoire de notre passion et de notre fierté.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">15</div>
                <div className="text-sm text-gray-400">Pièces Exclusives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">2025</div>
                <div className="text-sm text-gray-400">Édition Limitée</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-sm text-gray-400">Fierté Taraji</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Découvrir la Collection
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Voir la Vidéo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Collection Coupe du Monde 2025"
                    width={500}
                    height={600}
                    className="w-full h-[600px] object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full h-[600px] bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-white mx-auto mb-4" />
                    <p className="text-white">Vidéo de la Collection</p>
                    <Button variant="outline" className="mt-4" onClick={() => setIsVideoPlaying(false)}>
                      Fermer
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
