import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/backgrounds/hero.jpg')",
        }}
      />

      {/* Bottom fade (background only) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[25%] pointer-events-none bg-gradient-to-t from-white to-transparent" />

      {/* CONTENT */}
      <div className="relative z-20">
        {/* Headline */}
        <div className="absolute left-[165px] top-[180px] max-w-[520px]">
          <h1 className="text-4xl font-bold text-black leading-tight">
            Turn Ideas Into Scalable Experiences
          </h1>
        </div>

        {/* CTA Button */}
        <div className="relative z-40 absolute left-[165px] bottom-[-535px]">
          <Button variant="brand" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </main>
  )
}
