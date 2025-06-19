"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Navigation, Star, Store, Crown, Users, Filter } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PointsVentePage() {
  const [selectedRegion, setSelectedRegion] = useState("tunis")
  const [selectedStore, setSelectedStore] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [storeTypeFilter, setStoreTypeFilter] = useState("all")

  const stores = {
    tunis: [
      {
        id: 1,
        name: "Taraji Store Flagship - Avenue Habib Bourguiba",
        address: "15 Avenue Habib Bourguiba, Tunis 1000",
        phone: "+216 71 123 456",
        hours: "9h00 - 20h00",
        type: "Flagship Store",
        isOfficial: true,
        rating: 4.9,
        reviews: 456,
        services: ["Personnalisation", "Click & Collect", "Retours", "VIP Service"],
        coordinates: { lat: 36.8008, lng: 10.1817 },
        manager: "Ahmed Ben Salem",
      },
      {
        id: 2,
        name: "Taraji Store Officiel - Centre Commercial Carrefour",
        address: "Centre Commercial Carrefour, Ariana 2080",
        phone: "+216 71 234 567",
        hours: "10h00 - 22h00",
        type: "Official Store",
        isOfficial: true,
        rating: 4.8,
        reviews: 298,
        services: ["Personnalisation", "Click & Collect", "Retours"],
        coordinates: { lat: 36.8625, lng: 10.1956 },
        manager: "Fatma Trabelsi",
      },
      {
        id: 3,
        name: "Taraji Store Officiel - La Marsa",
        address: "Rue Mongi Slim, La Marsa 2078",
        phone: "+216 71 345 678",
        hours: "9h30 - 19h30",
        type: "Official Store",
        isOfficial: true,
        rating: 4.7,
        reviews: 234,
        services: ["Personnalisation", "Click & Collect", "Retours"],
        coordinates: { lat: 36.8781, lng: 10.3247 },
        manager: "Mohamed Khelifi",
      },
      {
        id: 4,
        name: "Taraji Store Officiel - Menzah 6",
        address: "Centre Commercial Menzah 6, Tunis",
        phone: "+216 71 456 789",
        hours: "10h00 - 21h00",
        type: "Official Store",
        isOfficial: true,
        rating: 4.6,
        reviews: 189,
        services: ["Click & Collect", "Retours", "Personnalisation"],
        coordinates: { lat: 36.8506, lng: 10.1833 },
        manager: "Leila Mansouri",
      },
      {
        id: 5,
        name: "Taraji Store Officiel - Bardo",
        address: "Avenue de la République, Le Bardo 2000",
        phone: "+216 71 567 890",
        hours: "9h00 - 19h00",
        type: "Official Store",
        isOfficial: true,
        rating: 4.5,
        reviews: 167,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 36.8108, lng: 10.1372 },
        manager: "Karim Bouazizi",
      },
      {
        id: 6,
        name: "Taraji Corner - Mall of Tunisia",
        address: "Mall of Tunisia, Berges du Lac",
        phone: "+216 71 678 901",
        hours: "10h00 - 22h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.4,
        reviews: 134,
        services: ["Click & Collect"],
        coordinates: { lat: 36.8342, lng: 10.2394 },
        manager: "Sami Gharbi",
      },
      {
        id: 7,
        name: "Taraji Corner - Tunisia Mall",
        address: "Tunisia Mall, Berges du Lac 2",
        phone: "+216 71 789 012",
        hours: "10h00 - 22h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.3,
        reviews: 98,
        services: ["Click & Collect"],
        coordinates: { lat: 36.8419, lng: 10.2275 },
        manager: "Nadia Hamdi",
      },
    ],
    sfax: [
      {
        id: 8,
        name: "Taraji Store - Centre Ville Sfax",
        address: "Avenue Hedi Chaker, Sfax 3000",
        phone: "+216 74 123 456",
        hours: "9h00 - 19h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.6,
        reviews: 156,
        services: ["Click & Collect", "Retours", "Personnalisation"],
        coordinates: { lat: 34.7406, lng: 10.7603 },
        manager: "Hichem Jebali",
      },
      {
        id: 9,
        name: "Taraji Corner - Mall of Sfax",
        address: "Mall of Sfax, Route de Tunis",
        phone: "+216 74 234 567",
        hours: "10h00 - 22h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.4,
        reviews: 89,
        services: ["Click & Collect"],
        coordinates: { lat: 34.7631, lng: 10.7411 },
        manager: "Amira Sassi",
      },
      {
        id: 10,
        name: "Taraji Point - Sfax Medina",
        address: "Rue de la République, Médina Sfax",
        phone: "+216 74 345 678",
        hours: "9h30 - 18h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.2,
        reviews: 67,
        services: ["Retours"],
        coordinates: { lat: 34.7394, lng: 10.7608 },
        manager: "Tarek Mejri",
      },
    ],
    sousse: [
      {
        id: 11,
        name: "Taraji Store - Port El Kantaoui",
        address: "Port El Kantaoui, Sousse 4089",
        phone: "+216 73 123 456",
        hours: "10h00 - 20h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.7,
        reviews: 198,
        services: ["Personnalisation", "Click & Collect", "Retours"],
        coordinates: { lat: 35.8883, lng: 10.5953 },
        manager: "Youssef Karray",
      },
      {
        id: 12,
        name: "Taraji Corner - Sousse Centre",
        address: "Avenue Habib Bourguiba, Sousse 4000",
        phone: "+216 73 234 567",
        hours: "9h00 - 19h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.3,
        reviews: 123,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 35.8256, lng: 10.6369 },
        manager: "Rim Chaabane",
      },
      {
        id: 13,
        name: "Taraji Point - Hammam Sousse",
        address: "Zone Touristique, Hammam Sousse",
        phone: "+216 73 345 678",
        hours: "10h00 - 21h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.1,
        reviews: 87,
        services: ["Click & Collect"],
        coordinates: { lat: 35.8608, lng: 10.5975 },
        manager: "Mehdi Bouzid",
      },
    ],
    bizerte: [
      {
        id: 14,
        name: "Taraji Store - Bizerte Centre",
        address: "Avenue de la République, Bizerte 7000",
        phone: "+216 72 123 456",
        hours: "9h00 - 18h30",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.4,
        reviews: 134,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 37.2744, lng: 9.8739 },
        manager: "Salim Ouali",
      },
      {
        id: 15,
        name: "Taraji Corner - Menzel Bourguiba",
        address: "Centre Ville, Menzel Bourguiba",
        phone: "+216 72 234 567",
        hours: "9h30 - 18h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.0,
        reviews: 56,
        services: ["Click & Collect"],
        coordinates: { lat: 37.1544, lng: 9.7847 },
        manager: "Ines Belhadj",
      },
    ],
    gabes: [
      {
        id: 16,
        name: "Taraji Store - Gabès Centre",
        address: "Avenue Farhat Hached, Gabès 6000",
        phone: "+216 75 123 456",
        hours: "9h00 - 19h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.3,
        reviews: 98,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 33.8815, lng: 10.0982 },
        manager: "Farid Zouari",
      },
      {
        id: 17,
        name: "Taraji Point - Mareth",
        address: "Centre Ville, Mareth",
        phone: "+216 75 234 567",
        hours: "9h00 - 18h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.1,
        reviews: 43,
        services: ["Click & Collect"],
        coordinates: { lat: 33.6406, lng: 10.2719 },
        manager: "Monia Rekik",
      },
    ],
    kairouan: [
      {
        id: 18,
        name: "Taraji Store - Kairouan",
        address: "Avenue de la République, Kairouan 3100",
        phone: "+216 77 123 456",
        hours: "9h00 - 18h30",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.5,
        reviews: 112,
        services: ["Click & Collect", "Retours", "Personnalisation"],
        coordinates: { lat: 35.6781, lng: 10.0963 },
        manager: "Chokri Hammami",
      },
      {
        id: 19,
        name: "Taraji Corner - Sbeitla",
        address: "Centre Ville, Sbeitla",
        phone: "+216 77 234 567",
        hours: "9h30 - 17h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.0,
        reviews: 34,
        services: ["Click & Collect"],
        coordinates: { lat: 35.2369, lng: 9.1181 },
        manager: "Lobna Ferchichi",
      },
    ],
    monastir: [
      {
        id: 20,
        name: "Taraji Store - Monastir",
        address: "Avenue Habib Bourguiba, Monastir 5000",
        phone: "+216 73 456 789",
        hours: "9h00 - 19h30",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.6,
        reviews: 145,
        services: ["Click & Collect", "Retours", "Personnalisation"],
        coordinates: { lat: 35.7643, lng: 10.8113 },
        manager: "Wael Agrebi",
      },
      {
        id: 21,
        name: "Taraji Corner - Mahdia",
        address: "Centre Ville, Mahdia 5100",
        phone: "+216 73 567 890",
        hours: "9h30 - 18h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.2,
        reviews: 78,
        services: ["Click & Collect"],
        coordinates: { lat: 35.5047, lng: 11.0622 },
        manager: "Sonia Dridi",
      },
    ],
    nabeul: [
      {
        id: 22,
        name: "Taraji Store - Nabeul",
        address: "Avenue Taïeb Mehiri, Nabeul 8000",
        phone: "+216 72 345 678",
        hours: "9h00 - 19h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.4,
        reviews: 167,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 36.4561, lng: 10.7376 },
        manager: "Hatem Bouslama",
      },
      {
        id: 23,
        name: "Taraji Corner - Hammamet",
        address: "Zone Touristique, Hammamet",
        phone: "+216 72 456 789",
        hours: "10h00 - 21h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.3,
        reviews: 134,
        services: ["Click & Collect"],
        coordinates: { lat: 36.4, lng: 10.6167 },
        manager: "Emna Jlassi",
      },
    ],
    autres: [
      {
        id: 24,
        name: "Taraji Store - Gafsa",
        address: "Avenue Habib Bourguiba, Gafsa 2100",
        phone: "+216 76 123 456",
        hours: "9h00 - 18h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.2,
        reviews: 89,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 34.425, lng: 8.7842 },
        manager: "Nizar Ayari",
      },
      {
        id: 25,
        name: "Taraji Corner - Tozeur",
        address: "Centre Ville, Tozeur 2200",
        phone: "+216 76 234 567",
        hours: "9h30 - 17h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.0,
        reviews: 45,
        services: ["Click & Collect"],
        coordinates: { lat: 33.9197, lng: 8.1342 },
        manager: "Aicha Kammoun",
      },
      {
        id: 26,
        name: "Taraji Store - Kasserine",
        address: "Avenue de l'Indépendance, Kasserine 1200",
        phone: "+216 77 345 678",
        hours: "9h00 - 18h30",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.1,
        reviews: 67,
        services: ["Click & Collect"],
        coordinates: { lat: 35.1675, lng: 8.8361 },
        manager: "Bilel Chaouachi",
      },
      {
        id: 27,
        name: "Taraji Corner - Sidi Bouzid",
        address: "Centre Ville, Sidi Bouzid 9100",
        phone: "+216 76 456 789",
        hours: "9h00 - 17h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 3.9,
        reviews: 38,
        services: ["Click & Collect"],
        coordinates: { lat: 35.0381, lng: 9.4839 },
        manager: "Mariem Tlili",
      },
      {
        id: 28,
        name: "Taraji Store - Médenine",
        address: "Avenue Habib Bourguiba, Médenine 4100",
        phone: "+216 75 567 890",
        hours: "9h00 - 18h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.3,
        reviews: 76,
        services: ["Click & Collect", "Retours"],
        coordinates: { lat: 33.3544, lng: 10.5053 },
        manager: "Riadh Baccouche",
      },
      {
        id: 29,
        name: "Taraji Corner - Tataouine",
        address: "Centre Ville, Tataouine 3200",
        phone: "+216 75 678 901",
        hours: "9h30 - 17h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.0,
        reviews: 29,
        services: ["Click & Collect"],
        coordinates: { lat: 32.9297, lng: 10.4517 },
        manager: "Khaled Jomaa",
      },
      {
        id: 30,
        name: "Taraji Store - Jendouba",
        address: "Avenue de la République, Jendouba 8100",
        phone: "+216 78 123 456",
        hours: "9h00 - 18h30",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.2,
        reviews: 54,
        services: ["Click & Collect"],
        coordinates: { lat: 36.5011, lng: 8.7803 },
        manager: "Sarra Mbarek",
      },
      {
        id: 31,
        name: "Taraji Corner - Kef",
        address: "Centre Ville, Le Kef 7100",
        phone: "+216 78 234 567",
        hours: "9h00 - 17h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 3.8,
        reviews: 31,
        services: ["Click & Collect"],
        coordinates: { lat: 36.1742, lng: 8.705 },
        manager: "Fathi Ghanmi",
      },
      {
        id: 32,
        name: "Taraji Store - Siliana",
        address: "Avenue Habib Bourguiba, Siliana 6000",
        phone: "+216 78 345 678",
        hours: "9h00 - 18h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.1,
        reviews: 42,
        services: ["Click & Collect"],
        coordinates: { lat: 36.0836, lng: 9.3714 },
        manager: "Dorra Sellami",
      },
      {
        id: 33,
        name: "Taraji Corner - Zaghouan",
        address: "Centre Ville, Zaghouan 1100",
        phone: "+216 72 567 890",
        hours: "9h30 - 17h00",
        type: "Partner Store",
        isOfficial: false,
        rating: 3.9,
        reviews: 26,
        services: ["Click & Collect"],
        coordinates: { lat: 36.4028, lng: 10.1425 },
        manager: "Hedi Brahem",
      },
      {
        id: 34,
        name: "Taraji Store - Béja",
        address: "Avenue de l'Indépendance, Béja 9000",
        phone: "+216 78 456 789",
        hours: "9h00 - 18h00",
        type: "Regional Store",
        isOfficial: false,
        rating: 4.0,
        reviews: 48,
        services: ["Click & Collect"],
        coordinates: { lat: 36.7256, lng: 9.1817 },
        manager: "Nejib Oueslati",
      },
      {
        id: 35,
        name: "Taraji Corner - Manouba",
        address: "Centre Ville, Manouba 2010",
        phone: "+216 71 890 123",
        hours: "9h30 - 18h30",
        type: "Partner Store",
        isOfficial: false,
        rating: 4.2,
        reviews: 63,
        services: ["Click & Collect"],
        coordinates: { lat: 36.8092, lng: 10.0975 },
        manager: "Samia Khelil",
      },
    ],
  }

  const regions = [
    { id: "tunis", name: "Grand Tunis", count: stores.tunis.length, color: "bg-red-600" },
    { id: "sfax", name: "Sfax", count: stores.sfax.length, color: "bg-blue-600" },
    { id: "sousse", name: "Sousse", count: stores.sousse.length, color: "bg-green-600" },
    { id: "bizerte", name: "Bizerte", count: stores.bizerte.length, color: "bg-purple-600" },
    { id: "gabes", name: "Gabès", count: stores.gabes.length, color: "bg-orange-600" },
    { id: "kairouan", name: "Kairouan", count: stores.kairouan.length, color: "bg-yellow-600" },
    { id: "monastir", name: "Monastir", count: stores.monastir.length, color: "bg-pink-600" },
    { id: "nabeul", name: "Nabeul", count: stores.nabeul.length, color: "bg-teal-600" },
    { id: "autres", name: "Autres Régions", count: stores.autres.length, color: "bg-gray-600" },
  ]

  const currentStores = stores[selectedRegion as keyof typeof stores] || []
  const totalStores = Object.values(stores).flat().length
  const officialStores = Object.values(stores)
    .flat()
    .filter((store) => store.isOfficial).length

  const filteredStores = currentStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType =
      storeTypeFilter === "all" ||
      (storeTypeFilter === "official" && store.isOfficial) ||
      (storeTypeFilter === "partner" && !store.isOfficial)
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-800 to-amber-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/70 via-transparent to-yellow-500/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/35"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-500/25 to-red-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600/20 to-amber-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center mb-6">
              <Store className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Points de{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Vente
              </span>
            </h1>
            <p className="text-2xl mb-4 opacity-90">احنا الترجي - Taraji Dawla</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Trouvez le magasin Taraji Store le plus proche parmi nos {totalStores} points de vente à travers la
              Tunisie
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{totalStores}</div>
                <div className="text-sm opacity-80">Points de Vente</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">{officialStores}</div>
                <div className="text-sm opacity-80">Boutiques Officielles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">24</div>
                <div className="text-sm opacity-80">Gouvernorats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Rechercher un magasin ou une ville..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-4">
              <Select value={storeTypeFilter} onValueChange={setStoreTypeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Type de magasin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les magasins</SelectItem>
                  <SelectItem value="official">Boutiques officielles</SelectItem>
                  <SelectItem value="partner">Points de vente partenaires</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Stores Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enhanced Tunisia Map */}
            <div className="lg:col-span-2">
              <Card className="h-[700px] overflow-hidden shadow-2xl">
                <div className="relative h-full bg-gradient-to-br from-blue-50 to-green-50">
                  {/* Detailed Tunisia Map SVG */}
                  <svg viewBox="0 0 500 700" className="w-full h-full">
                    {/* Tunisia detailed outline */}
                    <path
                      d="M250 50 
                         L280 60 L320 80 L360 100 L390 130 L410 160 L420 190 L425 220 L430 250 L435 280 L440 310 L445 340 L450 370 L445 400 L440 430 L430 460 L420 490 L400 520 L380 540 L360 560 L340 580 L320 590 L300 600 L280 610 L260 615 L240 620 L220 615 L200 610 L180 600 L160 590 L140 580 L120 560 L100 540 L80 520 L60 490 L50 460 L40 430 L35 400 L40 370 L45 340 L50 310 L55 280 L60 250 L65 220 L70 190 L80 160 L100 130 L130 100 L170 80 L210 60 Z"
                      fill="rgba(239, 68, 68, 0.1)"
                      stroke="rgba(239, 68, 68, 0.4)"
                      strokeWidth="2"
                      className="drop-shadow-lg"
                    />

                    {/* Regional boundaries */}
                    <g stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" fill="none">
                      {/* Tunis region */}
                      <circle cx="250" cy="150" r="40" fill="rgba(239, 68, 68, 0.05)" />
                      {/* Sfax region */}
                      <circle cx="280" cy="350" r="35" fill="rgba(37, 99, 235, 0.05)" />
                      {/* Sousse region */}
                      <circle cx="270" cy="250" r="30" fill="rgba(34, 197, 94, 0.05)" />
                      {/* Other regions */}
                      <circle cx="200" cy="120" r="25" fill="rgba(147, 51, 234, 0.05)" />
                      <circle cx="320" cy="450" r="30" fill="rgba(249, 115, 22, 0.05)" />
                    </g>

                    {/* Store locations with different icons */}
                    {regions.map((region) => {
                      const regionStores = stores[region.id as keyof typeof stores] || []
                      return regionStores.map((store, index) => {
                        const baseX =
                          region.id === "tunis"
                            ? 250
                            : region.id === "sfax"
                              ? 280
                              : region.id === "sousse"
                                ? 270
                                : region.id === "bizerte"
                                  ? 200
                                  : region.id === "gabes"
                                    ? 320
                                    : region.id === "kairouan"
                                      ? 230
                                      : region.id === "monastir"
                                        ? 290
                                        : region.id === "nabeul"
                                          ? 280
                                          : 180

                        const baseY =
                          region.id === "tunis"
                            ? 150
                            : region.id === "sfax"
                              ? 350
                              : region.id === "sousse"
                                ? 250
                                : region.id === "bizerte"
                                  ? 120
                                  : region.id === "gabes"
                                    ? 450
                                    : region.id === "kairouan"
                                      ? 200
                                      : region.id === "monastir"
                                        ? 280
                                        : region.id === "nabeul"
                                          ? 180
                                          : 300 + index * 40

                        const x = baseX + ((index % 3) - 1) * 15
                        const y = baseY + Math.floor(index / 3) * 15

                        return (
                          <g key={store.id}>
                            {store.isOfficial ? (
                              // Official store - crown icon
                              <>
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="12"
                                  fill="#dc2626"
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                  className="cursor-pointer hover:fill-yellow-500 transition-colors duration-300 drop-shadow-lg"
                                  onClick={() => setSelectedStore(store.id)}
                                />
                                <path
                                  d={`M${x - 6} ${y - 2} L${x - 3} ${y - 5} L${x} ${y - 2} L${x + 3} ${y - 5} L${x + 6} ${y - 2} L${x + 4} ${y + 3} L${x - 4} ${y + 3} Z`}
                                  fill="white"
                                  className="pointer-events-none"
                                />
                              </>
                            ) : (
                              // Partner store - regular dot
                              <circle
                                cx={x}
                                cy={y}
                                r="8"
                                fill="#6b7280"
                                stroke="#ffffff"
                                strokeWidth="2"
                                className="cursor-pointer hover:fill-blue-500 transition-colors duration-300 drop-shadow-md"
                                onClick={() => setSelectedStore(store.id)}
                              />
                            )}

                            {selectedStore === store.id && (
                              <circle
                                cx={x}
                                cy={y}
                                r="20"
                                fill="none"
                                stroke="#dc2626"
                                strokeWidth="3"
                                className="animate-pulse"
                              />
                            )}
                          </g>
                        )
                      })
                    })}

                    {/* City labels */}
                    <g className="text-xs font-semibold fill-gray-700">
                      <text x="250" y="140" textAnchor="middle">
                        TUNIS
                      </text>
                      <text x="280" y="340" textAnchor="middle">
                        SFAX
                      </text>
                      <text x="270" y="240" textAnchor="middle">
                        SOUSSE
                      </text>
                      <text x="200" y="110" textAnchor="middle">
                        BIZERTE
                      </text>
                      <text x="320" y="440" textAnchor="middle">
                        GABÈS
                      </text>
                      <text x="230" y="190" textAnchor="middle">
                        KAIROUAN
                      </text>
                      <text x="290" y="270" textAnchor="middle">
                        MONASTIR
                      </text>
                      <text x="280" y="170" textAnchor="middle">
                        NABEUL
                      </text>
                    </g>
                  </svg>

                  {/* Enhanced Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-xs">
                    <h4 className="font-bold mb-4 text-gray-900">Légende</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
                          <Crown className="absolute inset-0 w-3 h-3 text-white m-auto" />
                        </div>
                        <span className="text-sm font-medium">Boutique Officielle ({officialStores})</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-white shadow-md"></div>
                        <span className="text-sm font-medium">
                          Point de Vente Partenaire ({totalStores - officialStores})
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="text-xs text-gray-600">
                          Total: <span className="font-semibold text-red-600">{totalStores} magasins</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Region selector */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <h4 className="font-bold mb-3 text-gray-900">Régions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {regions.slice(0, 8).map((region) => (
                        <button
                          key={region.id}
                          onClick={() => setSelectedRegion(region.id)}
                          className={`text-xs px-2 py-1 rounded-md transition-colors duration-200 ${
                            selectedRegion === region.id
                              ? "bg-red-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {region.name} ({region.count})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stores List */}
            <div className="space-y-6">
              {/* Region Tabs */}
              <Tabs value={selectedRegion} onValueChange={setSelectedRegion}>
                <TabsList className="grid grid-cols-2 w-full mb-4">
                  {regions.slice(0, 4).map((region) => (
                    <TabsTrigger
                      key={region.id}
                      value={region.id}
                      className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs"
                    >
                      {region.name} ({region.count})
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mb-4">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionner une région" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.id} value={region.id}>
                          {region.name} ({region.count} magasins)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {regions.map((region) => (
                  <TabsContent key={region.id} value={region.id} className="space-y-4 max-h-[600px] overflow-y-auto">
                    <div className="text-sm text-gray-600 mb-4">
                      {filteredStores.length} magasin{filteredStores.length > 1 ? "s" : ""} trouvé
                      {filteredStores.length > 1 ? "s" : ""}
                    </div>

                    {filteredStores.map((store) => (
                      <Card
                        key={store.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedStore === store.id ? "ring-2 ring-red-600 shadow-lg" : ""
                        }`}
                        onClick={() => setSelectedStore(store.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-gray-900">{store.name}</h3>
                                {store.isOfficial && <Crown className="h-4 w-4 text-yellow-500" />}
                              </div>
                              <Badge
                                className={
                                  store.type === "Flagship Store"
                                    ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white"
                                    : store.type === "Official Store"
                                      ? "bg-red-600 text-white"
                                      : store.type === "Regional Store"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-500 text-white"
                                }
                              >
                                {store.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{store.rating}</span>
                              <span className="text-xs text-gray-500">({store.reviews})</span>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-red-600 flex-shrink-0" />
                              <span>{store.address}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-red-600 flex-shrink-0" />
                              <span>{store.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-red-600 flex-shrink-0" />
                              <span>{store.hours}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-red-600 flex-shrink-0" />
                              <span>Manager: {store.manager}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="text-xs text-gray-500 mb-2">Services disponibles:</div>
                            <div className="flex flex-wrap gap-1">
                              {store.services.map((service) => (
                                <Badge key={service} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700 flex-1">
                              <Navigation className="h-4 w-4 mr-1" />
                              Itinéraire
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Phone className="h-4 w-4 mr-1" />
                              Appeler
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services <span className="text-red-600">Disponibles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profitez de nos services exclusifs dans nos magasins Taraji Store à travers la Tunisie
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personnalisation</h3>
              <p className="text-gray-600 text-sm">Flocage nom et numéro sur vos maillots</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Click & Collect</h3>
              <p className="text-gray-600 text-sm">Commandez en ligne, retirez en magasin</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support Client</h3>
              <p className="text-gray-600 text-sm">Assistance et conseils personnalisés</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">VIP Service</h3>
              <p className="text-gray-600 text-sm">Service premium dans nos boutiques officielles</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visitez Nos Magasins</h2>
          <p className="text-xl mb-8 opacity-90">احنا الترجي - Découvrez l'expérience Taraji Store près de chez vous</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Trouver le Magasin le Plus Proche
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <Crown className="h-5 w-5 mr-2" />
              Boutiques Officielles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
