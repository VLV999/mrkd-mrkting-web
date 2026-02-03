"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto h-16 max-w-screen-xl px-6 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center">
            <img
              src="/brand/black-horizontal-logo.svg"
              alt="Brand logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Navigation (TRUE CENTER) */}
        <div className="flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {["Home", "Works", "Techstacks", "Services", "Contact"].map(
                (item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-[16px] font-medium text-black hover:text-zinc-600 transition"
                      >
                        {item}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Spacer (balances logo) */}
        <div />
      </div>
    </nav>
  )
}
