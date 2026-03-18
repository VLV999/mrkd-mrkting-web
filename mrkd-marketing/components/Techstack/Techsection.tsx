import TechRow from "./Techrow"

export default function TechSection() {
  return (
    <section className="py-24 space-y-10">

        <TechRow direction="right" speed={30} />  {/* slower */}
        <TechRow direction="left" speed={20} />   {/* faster */}
        <TechRow direction="right" speed={35} /> {/* slowest */}

    </section>
  )
}