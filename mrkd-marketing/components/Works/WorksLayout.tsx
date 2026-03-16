import { WORKS_PROJECTS } from "./Works.constants"
import { cn } from "@/lib/utils"

export default function WorksGrid() {
  return (
    <div className="mt-20 grid justify-center gap-[33px] grid-cols-[388px_388px_388px] grid-rows-[388px_548px]">
      {WORKS_PROJECTS.map((project, index) => (
        <div
          key={index}
          className={cn(
            "bg-white flex items-center justify-center text-xl font-semibold text-zinc-800 shadow-sm bg-cover bg-center",
            project.className,
            project.radius
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          {project.title}
        </div>
      ))}
    </div>
  )
}