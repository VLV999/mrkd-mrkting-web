import Footer from "@/components/Footer/FooterLayout"
import WorksGrid from "@/components/Works/WorksLayout"

export default function WorksPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-[1630px] mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-[600px] mx-auto">
            <h1 className="text-[40px] font-bold">
              Projects We’ve <span className="text-[#FA3607]">MRKD</span>
            </h1>
            <p className="mt-4 text-zinc-600 text-sm leading-relaxed">
              A showcase of websites, mobile applications, and digital
              platforms designed and developed by MRKD for startups, brands, and growing businesses.
            </p>
          </div>

          {/* GRID */}
          <WorksGrid />

        </div>
      </main>

      <Footer />
    </>
  )
}