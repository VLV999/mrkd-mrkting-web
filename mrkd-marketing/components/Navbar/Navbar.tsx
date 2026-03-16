"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { NavbarLayout } from "./NavbarLayout"
import { NAV_ITEMS, NAVBAR_LOGO } from "./Navbar.const"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <NavbarLayout>
      {/* Logo */}
      <div className="flex justify-start">
        <Link href="/">
          <img
            src={NAVBAR_LOGO.src}
            alt={NAVBAR_LOGO.alt}
            width={NAVBAR_LOGO.width}
            height={NAVBAR_LOGO.height}
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex justify-center gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-[16px] font-medium transition ${
              pathname === item.href ? "text-black font-bold" : "text-zinc-600 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>


    </NavbarLayout>
  )
}