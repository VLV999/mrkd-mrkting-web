import { Facebook, Instagram, Linkedin } from "lucide-react"

export const FOOTER_LINKS = [
  "Home",
  "Works",
  "Services",
  "Contact",
] as const

export const FOOTER_SOCIALS = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
] as const

export const FOOTER_LOGO = {
  src: "/brand/Black - Horizontal Logo.svg",
  alt: "MRKD Logo",
  width: 130,
  height: 40,
}
