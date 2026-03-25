"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SERVICES } from "./Services.constants"
import ServicesCard from "./ServicesCard"

export default function ServicesLayout() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.div
      layout
      onMouseLeave={() => setActiveIndex(null)}
      className="mt-20 grid grid-cols-5 auto-rows-[180px] gap-6"
    >
      {SERVICES.map((service, index) => (
        <ServicesCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          isActive={activeIndex === index}
          onHover={() => setActiveIndex(index)}
        />
      ))}
    </motion.div>
  )
}