export interface Product {
  id: number
  name: string
  sport: "football" | "volleyball" | "handball"
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string
  badge?: string
  rating: number
  reviews: number
  category: string
  description: string
  features: string[]
  colors: string[]
  sizes: string[]
  inStock: boolean
  stockCount: number
  isOfficial: boolean
  playerVersion?: boolean
  isNew?: boolean
  isBestSeller?: boolean
  isPromo?: boolean
  discount?: number
}

export interface SportCategory {
  id: string
  name: string
  nameArabic: string
  icon: string
  description: string
  image: string
  products: number
  bestseller: string
  color: string
  stats: {
    sales: string
    rating: number
    reviews: number
    titles: string
    players: string
    founded: string
    stadium: string
  }
  features: string[]
  achievements: string[]
}

export interface Store {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  type: string
  isOfficial: boolean
  rating: number
  reviews: number
  services: string[]
  coordinates: { lat: number; lng: number }
  manager: string
  region: string
}

export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  badge: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
  location: string
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  readTime: string
}

// Textes arabes authentiques
export const arabicTexts = {
  taraji: "الترجي الرياضي التونسي",
  weAreTaraji: "احنا الترجي",
  tarajiState: "ترجي دولة",
  since1919: "منذ ١٩١٩",
  champions: "الأبطال",
  pride: "فخر تونس",
  authentic: "أصيل",
  quality: "جودة عالية",
  football: "كرة القدم",
  volleyball: "الكرة الطائرة",
  handball: "كرة اليد",
}

// Messages utilisateur
export const userMessages = {
  freeShipping: "Livraison gratuite dès 100 DT",
  securePayment: "Paiement 100% sécurisé",
  fastDelivery: "Livraison express 24-48h",
  satisfaction: "Satisfaction garantie",
  authentic: "Produits 100% authentiques",
  support: "Support client 7j/7",
}

// Slides du hero
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: arabicTexts.weAreTaraji,
    subtitle: "Collection Officielle 2024/25",
    description: "Maillots authentiques • Qualité premium • Livraison rapide",
    image: "/hero1.jpg?height=800&width=1200",
    cta: "Découvrir la Collection",
    badge: "Nouveau",
  },
  {
    id: 2,
    title: arabicTexts.tarajiState,
    subtitle: "Édition Limitée Champions",
    description: "Célébrez nos victoires avec style • Matières premium",
    image: "/hero3.jpg?height=800&width=1200",
    cta: "Voir Édition Limitée",
    badge: "Exclusif",
  },
  {
    id: 3,
    title: arabicTexts.since1919,
    subtitle: "104 Ans de Fierté",
    description: "Plus qu'un club, une famille • Tradition et modernité",
    image: "/hero2.jpg?height=800&width=1200",
    cta: "Notre Histoire",
    badge: "Heritage",
  },
]

// Données des produits centralisées
export const products: Product[] = [
  // FOOTBALL PRODUCTS
  {
    id: 1,
    name: "Maillot Football Domicile 2024/25 'Taraji Dawla'",
    sport: "football",
    price: 89.99,
    originalPrice: 109.99,
    image: "/off foot.jpg?height=500&width=400",
    hoverImage: "/placeholder.svg?height=500&width=400",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 347,
    category: "maillots",
    description: "Le maillot officiel domicile 2024/25 avec l'inscription 'Taraji Dawla' brodée en fil d'or.",
    features: ["Technologie Dri-FIT", "Broderie 'Taraji Dawla' en or", "Coupe athlétique", "100% Polyester recyclé"],
    colors: ["Rouge/Jaune", "Rouge/Blanc"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 25,
    isOfficial: true,
    playerVersion: true,
    isNew: true,
    isBestSeller: true,
    discount: 18,
  },
  {
    id: 2,
    name: "Maillot Football Extérieur 'احنا الترجي'",
    sport: "football",
    price: 84.99,
    originalPrice: 99.99,
    image: "/ext.jpg?height=500&width=400",
    badge: "Nouveau",
    rating: 4.8,
    reviews: 289,
    category: "maillots",
    description: "Maillot extérieur avec calligraphie arabe authentique 'احنا الترجي'.",
    features: ["Calligraphie arabe authentique", "Matière respirante", "Design exclusif", "Logo brodé premium"],
    colors: ["Noir/Or", "Blanc/Rouge"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 18,
    isOfficial: true,
    playerVersion: true,
    isBestSeller: true,
    discount: 15,
  },
  {
    id: 4,
    name: "Short Football Officiel EST",
    sport: "football",
    price: 45.99,
    image: "/placeholder.svg?height=500&width=400",
    badge: "Officiel",
    rating: 4.7,
    reviews: 156,
    category: "shorts",
    description: "Short officiel assorti aux maillots, avec logo EST brodé.",
    features: ["Matière stretch", "Séchage rapide", "Poches zippées", "Bandes EST"],
    colors: ["Rouge", "Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 32,
    isOfficial: true,
  },

  // VOLLEYBALL PRODUCTS
  {
    id: 5,
    name: "Maillot Volleyball Officiel 'احنا الترجي'",
    sport: "volleyball",
    price: 69.99,
    originalPrice: 84.99,
    image: "/placeholder.svg?height=500&width=400",
    badge: "Nouveau",
    rating: 4.7,
    reviews: 156,
    category: "maillots",
    description: "Maillot volleyball officiel avec calligraphie arabe.",
    features: ["Tissu ultra-léger", "Évacuation humidité", "Coupe ergonomique", "Calligraphie arabe"],
    colors: ["Rouge/Jaune", "Blanc/Rouge"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockCount: 22,
    isOfficial: true,
    isNew: true,
    discount: 18,
  },
  {
    id: 6,
    name: "Maillot Volleyball Femme",
    sport: "volleyball",
    price: 69.99,
    originalPrice: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.9,
    reviews: 89,
    badge: "Nouveau",
    category: "maillots",
    description: "Maillot volleyball féminin haute performance",
    features: ["Coupe féminine", "Tissu respirant", "Design moderne"],
    colors: ["Rouge", "Jaune"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    stockCount: 20,
    isOfficial: true,
    isBestSeller: true,
    discount: 13,
  },

  // HANDBALL PRODUCTS
  {
    id: 7,
    name: "Maillot Handball Professionnel EST",
    sport: "handball",
    price: 74.99,
    originalPrice: 89.99,
    image: "/placeholder.svg?height=500&width=400",
    badge: "Pro",
    rating: 4.8,
    reviews: 178,
    category: "maillots",
    description: "Maillot handball professionnel résistant à l'abrasion.",
    features: ["Résistant à l'abrasion", "Séchage rapide", "Liberté mouvement", "Renforts aux points de stress"],
    colors: ["Rouge/Jaune", "Noir/Rouge"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 16,
    isOfficial: true,
    playerVersion: true,
    isNew: true,
    discount: 17,
  },
  {
    id: 8,
    name: "Maillot Handball Pro",
    sport: "handball",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.7,
    reviews: 156,
    badge: "Promo",
    category: "maillots",
    description: "Maillot handball professionnel avec technologie avancée",
    features: ["Anti-transpiration", "Résistant", "Coupe pro"],
    colors: ["Rouge", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    stockCount: 0,
    isOfficial: true,
    isBestSeller: true,
    discount: 20,
  },
]

// Catégories de sports
export const sportsCategories: SportCategory[] = [
  {
    id: "football",
    name: "Football",
    nameArabic: arabicTexts.football,
    icon: "⚽",
    description: "L'âme du Taraji depuis 1919",
    image: "/placeholder.svg?height=400&width=600",
    products: products.filter((p) => p.sport === "football").length,
    bestseller: "Maillot Domicile 'Taraji Dawla'",
    color: "from-red-600 to-red-700",
    stats: {
      sales: "2,847",
      rating: 4.9,
      reviews: 1234,
      titles: "30+ Titres",
      players: "25 Joueurs",
      founded: "1919",
      stadium: "Stade Olympique",
    },
    features: ["Technologie Dri-FIT", "Broderie Premium", "Coupe Athlétique", "Matière Respirante"],
    achievements: ["Champion de Tunisie 2023", "Ligue des Champions CAF", "Coupe de Tunisie"],
  },
  {
    id: "volleyball",
    name: "Volleyball",
    nameArabic: arabicTexts.volleyball,
    icon: "🏐",
    description: "Excellence et passion féminine",
    image: "/placeholder.svg?height=400&width=600",
    products: products.filter((p) => p.sport === "volleyball").length,
    bestseller: "Kit Volleyball Complet",
    color: "from-yellow-500 to-yellow-600",
    stats: {
      sales: "1,456",
      rating: 4.8,
      reviews: 567,
      titles: "15+ Titres",
      players: "12 Joueuses",
      founded: "1960",
      stadium: "Salle Omnisports",
    },
    features: ["Tissu Ultra-Léger", "Évacuation Humidité", "Coupe Ergonomique", "Liberté Mouvement"],
    achievements: ["Championnes d'Afrique 2023", "Championnes de Tunisie", "Coupe Arabe des Clubs"],
  },
  {
    id: "handball",
    name: "Handball",
    nameArabic: arabicTexts.handball,
    icon: "🤾",
    description: "Force et détermination",
    image: "/placeholder.svg?height=400&width=600",
    products: products.filter((p) => p.sport === "handball").length,
    bestseller: "Ensemble Handball Pro",
    color: "from-red-700 to-yellow-500",
    stats: {
      sales: "1,234",
      rating: 4.7,
      reviews: 423,
      titles: "20+ Titres",
      players: "16 Joueurs",
      founded: "1945",
      stadium: "Palais des Sports",
    },
    features: ["Résistant Abrasion", "Séchage Rapide", "Anti-Odeur", "Coupe Professionnelle"],
    achievements: ["Champions d'Afrique 2022", "Champions de Tunisie", "Coupe des Vainqueurs"],
  },
]

// Témoignages
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Ben Salem",
    role: "Supporter depuis 1995",
    content:
      "La qualité des maillots est exceptionnelle ! Je porte fièrement les couleurs du Taraji depuis des années.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Tunis",
  },
  {
    id: 2,
    name: "Fatma Trabelsi",
    role: "Joueuse de volleyball",
    content: "Les maillots volleyball sont parfaits pour la compétition. Confort et style réunis !",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Sfax",
  },
  {
    id: 3,
    name: "Mohamed Jebali",
    role: "Entraîneur handball",
    content: "Équipements de qualité professionnelle. Mes joueurs adorent porter ces maillots.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Sousse",
  },
]

// Actualités
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nouvelle Collection 2024/25 Disponible",
    excerpt: "Découvrez les nouveaux maillots officiels avec des designs exclusifs et des matières premium.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-15",
    category: "Collection",
    readTime: "3 min",
  },
  {
    id: 2,
    title: "Victoire Historique en Ligue des Champions",
    excerpt: "Le Taraji remporte sa 4ème Ligue des Champions CAF dans un match mémorable.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-10",
    category: "Sport",
    readTime: "5 min",
  },
  {
    id: 3,
    title: "Ouverture du Nouveau Flagship Store",
    excerpt: "Un nouveau magasin officiel ouvre ses portes au cœur de Tunis avec une expérience shopping unique.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-05",
    category: "Magasin",
    readTime: "2 min",
  },
]

// Magasins
export const stores: Store[] = [
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
    region: "tunis",
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
    region: "tunis",
  },
]

// Onglets pour les filtres
export const filterTabs = [
  { id: "all", label: "Tous", labelAr: "الكل" },
  { id: "football", label: "Football", labelAr: arabicTexts.football },
  { id: "volleyball", label: "Volleyball", labelAr: arabicTexts.volleyball },
  { id: "handball", label: "Handball", labelAr: arabicTexts.handball },
]

// Fonctions utilitaires
export const getProductsBySport = (sport: string) => {
  return products.filter((product) => product.sport === sport)
}

export const getNewProducts = () => {
  return products.filter((product) => product.isNew)
}

export const getBestSellers = () => {
  return products.filter((product) => product.isBestSeller)
}

export const getPromoProducts = () => {
  return products.filter((product) => product.isPromo || product.originalPrice)
}

export const getFeaturedProducts = () => {
  return products.filter((product) => product.isBestSeller || product.isNew).slice(0, 8)
}

export const getProductById = (id: number) => {
  return products.find((product) => product.id === id)
}

export const getSportCategory = (sportId: string) => {
  return sportsCategories.find((category) => category.id === sportId)
}

export const getStoresByRegion = (region: string) => {
  return stores.filter((store) => store.region === region)
}

// Stats du site
export const siteStats = {
  totalProducts: products.length,
  totalSports: sportsCategories.length,
  totalStores: stores.length,
  totalCustomers: "10,000+",
  yearsOfExperience: "104",
  satisfactionRate: "98%",
}
