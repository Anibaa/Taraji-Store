"use client"

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: "Nouveautés", href: "/nouveautes" },
      { name: "Maillots", href: "/maillots" },
      { name: "Accessoires", href: "/accessoires" },
      { name: "Collections", href: "/collections" },
      { name: "Points de Vente", href: "/points-vente" },
      { name: "Promotions", href: "/promotions" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Livraison", href: "/livraison" },
      { name: "Retours", href: "/retours" },
      { name: "Guide des Tailles", href: "/guide-tailles" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "À Propos", href: "/a-propos" },
      { name: "Notre Histoire", href: "/histoire" },
      { name: "Carrières", href: "/carrieres" },
      { name: "Presse", href: "/presse" },
      { name: "Partenaires", href: "/partenaires" },
    ],
    legal: [
      { name: "Conditions d'Utilisation", href: "/conditions" },
      { name: "Politique de Confidentialité", href: "/confidentialite" },
      { name: "Mentions Légales", href: "/mentions-legales" },
      { name: "Cookies", href: "/cookies" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-yellow-500 to-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EST</span>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Taraji Store</h3>
                <p className="text-gray-400 text-sm">Boutique Officielle</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              La boutique officielle de l'Espérance Sportive de Tunis. Nous proposons des produits authentiques et de
              qualité pour tous les fans de Taraji.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-red-500" />
                <span>Avenue Habib Bourguiba, Tunis, Tunisie</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-red-500" />
                <span>+216 71 123 456</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
                <span>contact@taraji-store.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Boutique</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Entreprise</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Mini */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input type="email" placeholder="Email" className="bg-gray-700 border-gray-600 text-white text-sm" />
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Taraji Store - Espérance Sportive de Tunis. Tous droits réservés.</p>
            </div>

            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
