import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-left opacity-50"
          style={{
            backgroundImage: "url('/backgrounds/hero.jpg')",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[25%] pointer-events-none bg-gradient-to-t from-white to-transparent" />

        {/* CONTENT */}
        <div className="relative z-20">
          {/* Headline */}
          <div className="absolute left-[165px] top-[80px] max-w-[520px]">
            <h1 className="text-4xl font-bold text-black leading-tight">
              Turn Ideas Into Scalable Experiences
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-base text-zinc-700 leading-relaxed">
              We design and develop modern digital products built for performance,
              clarity, and long-term growth.
            </p>

            {/* CTA Button — now correctly attached */}
            <div className="absolute left-[0px] top-[420] z-30">
              <Button variant="brand" size="lg">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BELOW GRADIENT */}
      <section className="bg-white py-24">
        <p className="text-[28px] font-bold text-black text-center">
          Trusted by startups, brands, and growing businesses.
        </p>
      </section>
    </main>
  )
}
