import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import Image from "next/image"

import { MegaMenu } from "@/components/mega-menu"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between max-w-screen-xl mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://oneject.co.id/wp-content/uploads/2024/10/logo-OJI.png"
            alt="Oneject Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <MegaMenu />
        <MobileNav />
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-black font-medium border-[#5B5856]"
          >
            EN <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-black font-medium underline border-[#5B5856]"
          >
            ID
          </Button>
        </div>
      </div>
    </header>
  )
}

