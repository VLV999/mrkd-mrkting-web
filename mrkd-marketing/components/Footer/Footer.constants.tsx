import { Facebook, Instagram, Linkedin } from "lucide-react"

export const FOOTER_LINKS = [
  "Home",
  "Works",
  "Techstacks",
  "Services",
  "Contact",
] as const

export const FOOTER_SOCIALS = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
] as const

export const FOOTER_LOGO = {
  src: "/brand/black-horizontal-logo.svg",
  alt: "MRKD Logo",
}
