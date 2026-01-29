import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-no-repeat bg-left"
      style={{
        backgroundImage: "url('/backgrounds/hero.jpg')",
      }}
    >
      <div className="absolute left-[165px] top-[235px] z-10">
        <h1 className="text-4xl font-bold text-black">
          Turn Ideas Into Scalable Experiences
        </h1>
      </div>

      <div className="absolute left-[165px] bottom-[35px] z-10">
        <Button size="lg">Contact us</Button>
      </div>
    </main>
  )
}
