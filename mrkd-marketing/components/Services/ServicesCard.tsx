"use client"

import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
  icon: string
  isActive: boolean
  onHover: () => void
}

export default function ServicesCard({
  title,
  description,
  icon,
  isActive,
  onHover,
}: Props) {
  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      className={`
        relative rounded-2xl p-6 cursor-pointer
        bg-gradient-to-br from-orange-500 to-orange-600
        text-white overflow-hidden
        flex flex-col justify-between
        transition-all duration-300
        ${isActive ? "col-span-2 row-span-2" : ""}
      `}
    >
      {/* ICON */}
      <img src={icon} className="w-10 h-10 mb-4" />

      {/* TITLE */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
        className="text-sm text-white/80 mt-3"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}