"use client"

import { Button } from "@/components/ui/button"

export default function GetInTouch() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-[96px] font-bold tracking-tight">
          GET IN TOUCH.
        </h2>

        {/* Info Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Address */}
          <div className="text-center">
            <p className="text-[24px] tracking-wide font-bold uppercase text-zinc-900">
              Address
            </p>
            <p className="mt-2 text-[16px] text-zinc-600 leading-relaxed">
              25 Bojong Nilo, Brgy. Sto. Rosario St. San Jose,<br />
              Angeles City, Pampanga
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <p className="text-[24px] tracking-wide font-bold uppercase text-zinc-900">
              Email
            </p>
            <p className="mt-2 text-[16px] text-zinc-600">
              mrkd.marketing@gmail.com
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Button variant="brand" className="w-[180px]" size="lg">
            Get Started
          </Button>
        </div>

      </div>
    </section>
  )
}
