// NavbarLayout.tsx
import { ReactNode } from "react"

type Props = { children: ReactNode }

export function NavbarLayout({ children }: Props) {
  return (
    <nav className="border-b sticky top-0 bg-white z-50">
      <div className="mx-auto max-w-screen-xl px-6 h-16 grid grid-cols-3 items-center">
        {children}
      </div>
    </nav>
  )
}