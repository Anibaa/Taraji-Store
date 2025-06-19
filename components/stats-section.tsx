"use client"

import { useEffect, useState } from "react"
import { Trophy, Users, Star, ShoppingBag } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      icon: Trophy,
      number: 70,
      suffix: "+",
      label: "Titres Remportés",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      number: 500000,
      suffix: "+",
      label: "Fans Satisfaits",
      color: "text-red-500",
    },
    {
      icon: Star,
      number: 4.9,
      suffix: "/5",
      label: "Note Moyenne",
      color: "text-yellow-500",
    },
    {
      icon: ShoppingBag,
      number: 50000,
      suffix: "+",
      label: "Produits Vendus",
      color: "text-green-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const AnimatedNumber = ({ number, suffix }: { number: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, number])

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Taraji en Chiffres</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi des milliers de fans nous font confiance pour leurs produits officiels
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 ${stat.color}`}
              >
                <stat.icon className="h-8 w-8" />
              </div>

              <div className="mb-2">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
              </div>

              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
