import { Button } from "@/components/ui/Button"
import { SolutionsCarousel } from "@/components/SolutionsCarousel/SolutionsCarousel"
import { SolutionsLayout } from "@/components/SolutionsCarousel/SolutionsCarouselLayout"
import BrandRow from "@/components/BrandRow/BrandRow"


export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background image */}
          <img
            src="/backgrounds/hero.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left opacity-50 z-0 pointer-events-none"
          />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[25%] pointer-events-none bg-gradient-to-t from-white to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-20 flex justify-center">
          <div className="w-full max-w-[1240px] relative"> 
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
            <div className="flex absolute left-[165px] top-[470px] z-30">
              <Button variant="brand" className="w-[164px]" size="lg">
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

        {/* LOGO ROW */}
      <BrandRow />
      </section>
      <section>
        <p className="mt-20 text-base mx-auto text-[30px] font-bold text-black text-center">
          Solutions that {""}
          <span className="text-[#FA3607]"> MRKD </span>{""} your digital growth.
        </p>
      </section>

      <SolutionsCarousel />
      
        {/* READMORE Button */}
          <div className="mt-12 flex justify-center">
            <Button variant="brand" className="w-[229px]" size="lg">
              Read More
            </Button>
          </div>

          <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-6 space-y-32">

        {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <img
              src="/about/about-1.jpg"
              alt="Team working"
              className="w-full rounded-br-[50px] object-cover"
            />

        {/* Text */}
            <div>
              <p className="text-sm tracking-wide uppercase text-zinc-500">
                About Us
              </p>

              <h2 className="mt-3 text-[40px] font-bold leading-tight">
                Driven by innovation.
                <br />
                Focused on results.
              </h2>

              <p className="mt-6 text-[16px] text-zinc-600 leading-relaxed max-w-[520px]">
                MRKD Inc. focuses on web and mobile application design and development
                that is responsive to growth and performance. Whether it is the smooth
                shifts of a site or the strength of software platforms, we collaborate
                with our customers throughout the process of bringing in dreams with
                creative thinking and technical skills.
              </p>
            </div>
          </div>

        {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
          <div>
            <p className="text-sm tracking-wide uppercase text-zinc-500">
            Who Are We
            </p>

          <h2 className="mt-3 text-[40px] font-bold leading-tight">
            Innovators.
            <br />
            Creators.
            <br />
            Problem-solvers.
          </h2>

          <p className="mt-6 text-[16px] text-zinc-600 leading-relaxed max-w-[520px]">
            A team of innovators and creators shaping the digital world. We combine
            creativity, technology, and strategy in order to transform ideas into
            effective digital experiences.
          </p>
        </div>

        {/* Image */}
        <img
          src="/about/about-2.jpg"
          alt="Team meeting"
          className="w-full rounded-tl-[50px] object-cover"
        />
      </div>

    </div>
  </section>

    </main>
  )
}
