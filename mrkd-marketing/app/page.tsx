import { Button } from "@/components/ui/button"
import { SolutionsCarousel } from "@/components/layout/SolutionsCarousel"

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

        {/* HERO CONTENT */}
        <div className="relative z-20"> 
          {/* Headline + Subtext */}
          <div className="absolute left-[165px] top-[100px] max-w-[520px]">
            <h1 className="text-4xl font-bold text-black leading-tight">
              Turn Ideas Into Scalable Experiences
            </h1>

            <p className="mt-4 text-base text-zinc-700 leading-relaxed">
              We design and develop modern digital products built for performance,
              clarity, and long-term growth.
            </p>
          </div>

          {/* CTA Button */}
          <div className="absolute left-[165px] top-[470px] z-30">
            <Button variant="brand" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION BELOW GRADIENT */}
      <section className="bg-white py-24">
        <p className="text-[28px] font-bold text-black text-center">
          Trusted by startups, brands, and growing businesses.
        </p>

        {/* LOGO ROW */}
        <div className="mt-12 flex justify-center items-center gap-10 opacity-70">
          <img src="/brand/twitch.svg" alt="Twitch" className="h-8" />
          <img src="/brand/facebook.svg" alt="Facebook" className="h-8" />
          <img src="/brand/google.svg" alt="Google" className="h-8" />
          <img src="/brand/youtube.svg" alt="YouTube" className="h-8" />
          <img src="/brand/pinterest.svg" alt="Pinterest" className="h-8" />
        </div>
      </section>
      <section>
        <p className="mt-20 text-base mx-auto text-[30px] font-bold text-black text-center">
          Solutions that {""}
          <span className="text-[#FA3607]"> MRKD </span>{""} your digital growth.
        </p>
      </section>
      <SolutionsCarousel />
    </main>
  )
}
