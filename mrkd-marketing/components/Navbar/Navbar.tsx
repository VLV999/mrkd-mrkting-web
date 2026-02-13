"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/Navigation-menu"

import { NavbarLayout } from "./NavbarLayout"
import { NAV_ITEMS, NAVBAR_LOGO } from "./Navbar.const"

export default function Navbar() {
  return (
    <NavbarLayout>

      {/* Left: Logo */}
      <div className="flex justify-start">
        <Link href="/" className="flex items-center">
          <img
            src={NAVBAR_LOGO.src}
            alt={NAVBAR_LOGO.alt}
            width={NAVBAR_LOGO.width}
            height={NAVBAR_LOGO.height}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="text-[16px] font-medium text-black hover:text-zinc-600 transition"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right: Spacer */}
      <div />

    </NavbarLayout>
  )
}
