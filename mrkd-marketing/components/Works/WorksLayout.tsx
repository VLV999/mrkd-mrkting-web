import { WORKS_PROJECTS } from "./Works.constants"
import { cn } from "@/lib/utils"

export default function WorksGrid() {
  return (
    <div className="mt-20 grid justify-center gap-[33px] grid-cols-[388px_388px_388px] grid-rows-[388px_548px]">
      {WORKS_PROJECTS.map((project, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden bg-cover bg-center text-white shadow-sm transition-all duration-500",
            project.className,
            project.radius
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500" />

          {/* CONTENT */}
          <div className="relative z-10 h-full w-full p-6 flex flex-col justify-between">

            {/* CENTER → TOP TRANSITION */}
            <div className="flex items-center justify-center h-full group-hover:items-start group-hover:justify-start transition-all duration-500">

              <div>
                {/* TITLE */}
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.description}
                </p>
              </div>
            </div>

            {/* TECH STACK (BOTTOM) */}
            <div className="flex gap-4 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              {project.tech.map((item, i) => (
                <span key={i}>• {item}</span>
              ))}
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}