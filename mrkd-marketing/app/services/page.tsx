import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer/FooterLayout"
import { SolutionsCarousel } from "@/components/SolutionsCarousel/SolutionsCarousel"

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen">

        {/* HERO SECTION */}
        <section className="bg-[#F3F2F2] py-28">
          <div className="max-w-[1630px] mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* LEFT SIDE */}
              <div>
                <h1 className="text-[42px] font-bold leading-tight">
                  Solutions that <span className="text-[#FA3607]">MRKD</span> your digital growth
                </h1>
                <p className="mt-6 text-zinc-700 max-w-[520px] leading-relaxed">
                  We design, build, and optimize digital products that help
                  businesses scale with confidence.
                </p>

                <div className="flex gap-6 mt-10">
                  <Link href="/contact">
                    <Button variant="brand" size="lg">Contact us</Button>
                  </Link>
                  <Link href="/works">
                    <Button variant="outlineBlack" size="lg">View Our Work</Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div>
                <img
                  src="/services/services.jpg"
                  alt="Services"
                  className="w-full rounded-tl-2xl object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* CAROUSEL SECTION */}
        <section className="py-28 bg-white">
          <div className="max-w-[1630px] mx-auto px-6">
            <SolutionsCarousel />
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}