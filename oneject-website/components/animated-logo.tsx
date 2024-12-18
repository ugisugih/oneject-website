"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative h-10 w-auto"
    >
      <Image
        src="/Logogram Oneject New.png"
        alt="Oneject Logo"
        width={40}
        height={40}
        className="h-full w-auto"
        priority
      />
    </motion.div>
  )
}

