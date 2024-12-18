"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'

import { cn } from "@/lib/utils"
import { navigationItems } from "@/lib/navigation-data"

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [subMenuHeight, setSubMenuHeight] = useState<number>(0)
  const subMenuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (subMenuRef.current) {
      setSubMenuHeight(subMenuRef.current.scrollHeight)
    }
  }, [activeSubMenu])

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons]
    return IconComponent ? <IconComponent className="h-4 w-4 mr-2" /> : null
  }

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center space-x-8">
        {Object.entries(navigationItems).map(([key, value]) => (
          <li
            key={key}
            className="relative"
            onMouseEnter={() => setActiveMenu(key)}
            onMouseLeave={() => {
              setActiveMenu(null)
              setActiveSubMenu(null)
            }}
          >
            {value.href ? (
              <Link
                href={value.href}
                className="flex items-center space-x-1 text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]"
              >
                {renderIcon(value.icon)}
                <span>{key}</span>
              </Link>
            ) : (
              <button className="flex items-center space-x-1 text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]">
                {renderIcon(value.icon)}
                <span>{key}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            )}

            <AnimatePresence>
              {activeMenu === key && value.items && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full z-50 mt-2 w-screen max-w-screen-xl rounded-lg border bg-white p-6 shadow-lg"
                >
                  <div className="flex flex-wrap gap-6">
                    {key === "Product" ? (
                      <div className="grid w-full grid-cols-4 gap-x-8 gap-y-4">
                        {value.items.map((item, index) => (
                          <div 
                            key={index} 
                            className="relative"
                            onMouseEnter={() => setActiveSubMenu(item.title)}
                            onMouseLeave={() => setActiveSubMenu(null)}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center justify-between text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81] mb-2"
                            >
                              {renderIcon(item.icon)}
                              {item.title}
                              {item.items && <ChevronRight className="h-4 w-4 ml-2" />}
                            </Link>
                            <AnimatePresence>
                              {item.items && activeSubMenu === item.title && (
                                <motion.ul
                                  ref={subMenuRef}
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: subMenuHeight }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden rounded-lg border bg-white p-2 shadow-lg"
                                >
                                  {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} className="py-1">
                                      <Link
                                        href={subItem.href}
                                        className="flex items-center text-sm text-[#3F8F81] hover:text-[#6DC5EE]"
                                      >
                                        {renderIcon(subItem.icon)}
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    ) : key === "About Us" ? (
                      <div className="grid w-full grid-cols-3 gap-8">
                        {value.items.map((column, index) => (
                          <div key={index} className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#6DC5EE] flex items-center">
                              {renderIcon(column.icon)}
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center text-sm font-medium text-[#3F8F81] hover:text-[#6DC5EE]"
                                  >
                                    {renderIcon(item.icon)}
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : key === "Career" ? (
                      <div className="w-full">
                        <ul className="space-y-2">
                          {value.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className="flex items-center text-sm font-medium text-[#3F8F81] hover:text-[#6DC5EE]"
                              >
                                {renderIcon(item.icon)}
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      value.items.map((item, index) => (
                        <div key={index} className="w-1/4 space-y-4">
                          {item.items ? (
                            <>
                              <h3 className="text-sm font-semibold text-[#6DC5EE] flex items-center">
                                {renderIcon(item.icon)}
                                {item.title}
                              </h3>
                              <ul className="space-y-2">
                                {item.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center text-sm text-[#3F8F81] hover:text-[#6DC5EE]"
                                    >
                                      {renderIcon(subItem.icon)}
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className="flex items-center text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]"
                            >
                              {renderIcon(item.icon)}
                              {item.title}
                            </Link>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  )
}

