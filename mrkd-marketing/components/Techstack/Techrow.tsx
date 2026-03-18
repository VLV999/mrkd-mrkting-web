import { TECH_STACK } from "./Tech.constants"

type RowProps = {
  direction?: "left" | "right"
  speed?: number // seconds
}

export default function TechRow({
  direction = "left",
  speed = 25,
}: RowProps) {
  return (
    <div className="overflow-hidden">
      <div
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
        className={`flex gap-20 w-max ${
          direction === "right"
            ? "animate-marquee-reverse"
            : "animate-marquee"
        }`}
      >
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <div key={i} className="flex items-center min-w-fit">
            <img src={tech.logo} className="h-10 w-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}