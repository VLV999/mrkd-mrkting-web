import { BRANDS } from "@/components/BrandRow/BrandRow.const"

export default function BrandRow() {
  return (
    <div className="mt-12 flex justify-center items-center gap-10 opacity-70">
      {BRANDS.map((brand) => (
        <img
          key={brand.alt}
          src={brand.src}
          alt={brand.alt}
          className="h-8"
        />
      ))}
    </div>
  )
}
