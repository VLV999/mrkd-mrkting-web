import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SolutionsLayout({ children }: Props) {
  return (
    <section className="mt-16 flex justify-center">
      <div className="w-full max-w-[1240px]">
        {children}
      </div>
    </section>
  )
}
