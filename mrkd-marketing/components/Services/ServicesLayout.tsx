"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SERVICES } from "./Services.constants"

export default function ServicesLayout() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div
      className="mt-20 flex gap-6 overflow-x-auto pb-4"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {SERVICES.map((item, index) => {
        const isActive = index === activeIndex

        const Icon = item.icon // ✅ IMPORTANT

        return (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setActiveIndex(index)}
            animate={{
              width: isActive ? 520 : 388,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative shrink-0 rounded-2xl bg-[#FA3607] h-[522px] text-white overflow-hidden cursor-pointer"
          >
            {/* ✅ ICON (correct way) */}
            <Icon className="absolute left-[32px] top-[64px] w-[94px] h-[80px]" />

            {/* TITLE */}
            <h3 className="absolute left-[32px] top-[214px] text-[28px] font-medium leading-tight max-w-[300px]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-[32px] top-[280px] text-[18px] leading-relaxed opacity-90 max-w-[300px]"
            >
              {item.description}
            </motion.p>
          </motion.div>
        )
      })}
    </div>
  )
}