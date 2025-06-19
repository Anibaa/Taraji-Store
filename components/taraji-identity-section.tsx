"use client"

import { useState } from "react"
import { Crown, Heart, Trophy, Users, Star, Play } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TarajiIdentitySection() {
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      id: 1,
      title: "احنا الترجي",
      subtitle: "Nous Sommes Taraji",
      description:
        "Plus qu'un club, Taraji est une famille, une passion qui unit des millions de cœurs à travers le monde. Depuis 1919, nous portons haut les couleurs rouge et jaune avec une fierté inébranlable.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Heart,
      color: "from-red-600 to-pink-600",
    },
    {
      id: 2,
      title: "Taraji Dawla",
      subtitle: "L'État de Taraji",
      description:
        "Taraji Dawla représente notre souveraineté sur le football africain. Nos victoires continentales et notre domination nationale font de nous les rois incontestés du football tunisien.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "التاريخ المجيد",
      subtitle: "Histoire Glorieuse",
      description:
        "Depuis notre fondation en 1919, nous avons écrit les plus belles pages du football tunisien et africain. Chaque titre, chaque victoire renforce notre légende.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Trophy,
      color: "from-yellow-600 to-red-600",
    },
  ]

  const achievements = [
    { number: "50+", label: "Titres Nationaux", icon: Trophy },
    { number: "4", label: "Ligues des Champions", icon: Crown },
    { number: "6M+", label: "Supporters", icon: Users },
    { number: "104", label: "Années d'Histoire", icon: Star },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl font-bold text-yellow-500 rotate-12 opacity-20">احنا</div>
        <div className="absolute bottom-20 right-20 text-9xl font-bold text-red-500 -rotate-12 opacity-20">الترجي</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white opacity-5">
          EST
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              احنا الترجي
            </span>
          </h2>
          <p className="text-2xl mb-4 opacity-90">Taraji Dawla - Notre Identité, Notre Fierté</p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Découvrez l'âme de Taraji à travers notre histoire, nos valeurs et notre passion inébranlable pour le
            football
          </p>
        </div>

        {/* Stories Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card
                key={story.id}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeStory === index
                    ? "bg-gradient-to-r from-red-600/20 to-yellow-500/20 border-yellow-500 shadow-2xl"
                    : "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                }`}
                onClick={() => setActiveStory(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${story.color} mr-4`}>
                      <story.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                      <p className="text-yellow-300 font-semibold">{story.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={stories[activeStory].image || "/placeholder.svg"}
                alt={stories[activeStory].title}
                width={600}
                height={400}
                className="w-full h-[500px] object-cover transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${stories[activeStory].color} opacity-30`}></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full mb-6">
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                {achievement.number}
              </div>
              <p className="text-gray-300 font-medium">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez la Famille <span className="text-yellow-400">Taraji</span>
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Portez nos couleurs avec fierté et faites partie de l'histoire légendaire de Taraji Dawla
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Découvrir Notre Histoire
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Rejoindre la Communauté
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
