"use client"

import Link from "next/link"
import { FOOTER_LINKS, FOOTER_SOCIALS, FOOTER_LOGO } from "./Footer.constants"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-[1240px] mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src={FOOTER_LOGO.src}
              alt={FOOTER_LOGO.alt}
              className="h-8 object-contain"
            />
            <p className="text-sm text-zinc-500">Make your mark.</p>
          </div>

          {/* Center */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {FOOTER_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-600 hover:text-black transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="flex justify-center md:justify-end gap-4">
            {FOOTER_SOCIALS.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="text-zinc-600 hover:text-black transition"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs text-zinc-400">
          Copyright © MRKD Inc. {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  )
}
