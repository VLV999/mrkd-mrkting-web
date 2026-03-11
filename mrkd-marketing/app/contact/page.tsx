import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer/FooterLayout"

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen">

        {/* FORM SECTION */}
        <section className="bg-[#F3F2F2] py-32">
          <div className="max-w-[1630px] mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

              {/* LEFT SIDE */}
              <div>
                <h1 className="text-[42px] font-bold leading-tight">
                  Let’s explore how <span className="text-[#FA3607]">MRKD</span> can bring your vision to life.
                </h1>
                <p className="mt-6 font-semibold leading-relaxed max-w-[520px]">
                  We’ll start by understanding your goals, then show you what’s
                  possible through thoughtful design, seamless development,
                  and scalable digital experiences.
                </p>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="border-l border-zinc-400 pl-16">
                <form className="space-y-10">

                  {/* First + Last Name */}
                  <div className="grid grid-cols-2 gap-10">
                    <input
                      type="text"
                      placeholder="FIRST NAME"
                      className="border-b border-black bg-transparent focus:outline-none py-2 placeholder:text-xs tracking-wide"
                    />
                    <input
                      type="text"
                      placeholder="LAST NAME"
                      className="border-b border-black bg-transparent focus:outline-none py-2 placeholder:text-xs tracking-wide"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-10">
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="border-b border-black bg-transparent focus:outline-none py-2 placeholder:text-xs tracking-wide"
                    />
                    <input
                      type="text"
                      placeholder="PHONE NO."
                      className="border-b border-black bg-transparent focus:outline-none py-2 placeholder:text-xs tracking-wide"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="MESSAGE"
                      rows={4}
                      className="w-full border-b border-black bg-transparent focus:outline-none py-2 resize-none placeholder:text-xs tracking-wide"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 justify-center flex">
                    <Button variant="brand" className="w-[164px]" size="lg">
                      Submit
                    </Button>
                  </div>

                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}