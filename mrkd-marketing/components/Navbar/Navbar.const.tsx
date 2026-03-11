// Navbar.const.ts
export const NAVBAR_LOGO = {
  src: "/brand/black-horizontal-logo.svg",
  alt: "MRKD Logo",
  width: 130,
  height: 40,
}

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const