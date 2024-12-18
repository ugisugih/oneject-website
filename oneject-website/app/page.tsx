"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <LoadingAnimation />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <SiteFooter />
    </div>
  )
}

