"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { navigationItems } from "@/lib/navigation-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <div className="flex h-16 items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <img src="/placeholder.svg" alt="Oneject Logo" className="h-6 w-6" />
              <span className="text-lg font-bold">oneject</span>
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(navigationItems).map(([key, value]) => (
              <AccordionItem key={key} value={key}>
                {value.items ? (
                  <>
                    <AccordionTrigger>{key}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {value.items.map((item, index) => (
                          <div key={index} className="space-y-4">
                            {item.items ? (
                              <>
                                <h3 className="font-semibold">{item.title}</h3>
                                <ul className="space-y-2 pl-4">
                                  {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-gray-600 hover:text-teal-600"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                className="block text-sm font-medium hover:text-teal-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </>
                ) : (
                  <Link
                    href={value.href}
                    className="block py-4 text-sm font-medium hover:text-teal-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {key}
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}

