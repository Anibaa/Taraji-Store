"use client"

import { useState } from "react"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function ResponsiveLatestCollection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                  Collection
                </span>
                <br />
                <span className="text-white">2025</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                Une collection unique créée spécialement pour célébrer la participation de Taraji à la Coupe du Monde.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-6 py-6 lg:py-8 border-y border-gray-800">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-500 mb-2">15</div>
                <div className="text-xs lg:text-sm text-gray-400">Pièces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-red-500 mb-2">2025</div>
                <div className="text-xs lg:text-sm text-gray-400">Édition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-xs lg:text-sm text-gray-400">Fierté</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Découvrir
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Vidéo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Collection 2025"
                    width={500}
                    height={600}
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="h-6 w-6 lg:h-8 lg:w-8 text-white ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 lg:h-16 lg:w-16 text-white mx-auto mb-4" />
                    <p className="text-white mb-4">Vidéo de la Collection</p>
                    <Button variant="outline" onClick={() => setIsVideoPlaying(false)}>
                      Fermer
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
