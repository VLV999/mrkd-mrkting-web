import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function NavbarLayout({ children }: Props) {
  return (
    <nav className="border-b">
      <div className="mx-auto h-16 max-w-screen-xl px-6 grid grid-cols-3 items-center">
        {children}
      </div>
    </nav>
  )
}
