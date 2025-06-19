"use client"

import Header from "@/components/header"
import CoherentHeroSection from "@/components/coherent-hero-section"
import StatsSection from "@/components/stats-section"
import AuthenticBestSellers from "@/components/authentic-best-sellers"
import ResponsiveLatestCollection from "@/components/responsive-latest-collection"
import UserFriendlySportsCategories from "@/components/user-friendly-sports-categories"
import NewArrivalsSection from "@/components/new-arrivals-section"
import TarajiIdentitySection from "@/components/taraji-identity-section"
import PremiumFeaturesSection from "@/components/premium-features-section"
import TestimonialsSection from "@/components/testimonials-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import FloatingCart from "@/components/floating-cart"

export default function TarajiStore() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <CoherentHeroSection />
      <StatsSection />
      <AuthenticBestSellers />
      <ResponsiveLatestCollection />
      <UserFriendlySportsCategories />
      <NewArrivalsSection />
      <TarajiIdentitySection />
      <PremiumFeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <FloatingCart />
    </div>
  )
}
