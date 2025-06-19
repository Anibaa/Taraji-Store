// Système de design unifié pour la cohérence
export const designSystem = {
  colors: {
    primary: {
      red: "#DC2626",
      yellow: "#F59E0B",
      gold: "#D97706",
    },
    secondary: {
      black: "#1F2937",
      white: "#FFFFFF",
      gray: "#6B7280",
    },
    gradients: {
      primary: "from-red-600 via-yellow-500 to-red-600",
      hero: "from-red-900/90 via-red-600/70 to-yellow-600/80",
      card: "from-red-50 to-yellow-50",
    },
  },
  typography: {
    arabic: "system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
    latin: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  spacing: {
    section: "py-16 lg:py-24",
    container: "px-4 sm:px-6 lg:px-8",
    grid: "gap-6 lg:gap-8",
  },
  animations: {
    hover: "transform hover:scale-105 transition-all duration-300",
    fadeIn: "animate-fade-in-up",
    stagger: (index: number) => `animation-delay-${index * 200}`,
  },
}

// Textes authentiques en arabe
export const arabicTexts = {
  taraji: "الترجي الرياضي التونسي",
  weAreTaraji: "احنا الترجي",
  tarajiState: "ترجي دولة",
  since1919: "منذ ١٩١٩",
  champions: "الأبطال",
  pride: "فخر تونس",
  authentic: "أصيل",
  quality: "جودة عالية",
}

// Messages user-friendly
export const userMessages = {
  loading: "Chargement en cours...",
  addedToCart: "Produit ajouté au panier !",
  outOfStock: "Rupture de stock",
  freeShipping: "Livraison gratuite dès 100 DT",
  securePayment: "Paiement 100% sécurisé",
  satisfaction: "Satisfait ou remboursé",
}
