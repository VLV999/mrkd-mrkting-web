"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {
  Laptop,
  Smartphone,
  Monitor,
  Settings,
  Cpu,
} from "lucide-react"

const solutions = [
  {
    icon: Laptop,
    title: "Web Development",
    description:
      "Responsive, high-performance websites built for seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive mobile apps for iOS and Android, optimized for engagement.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "User-centered designs that are simple, attractive, and easy to navigate.",
  },
  {
    icon: Settings,
    title: "Software & Platform Development",
    description:
      "Scalable, secure software and platforms tailored to your needs.",
  },
  {
    icon: Cpu,
    title: "Prototyping",
    description:
      "Interactive prototypes to visualize and test ideas quickly.",
  },
]

export function SolutionsCarousel() {
  return (
    <div className="mt-16">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-[1px]">
          {solutions.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 pl-[1px]">
            <Card className="bg-[#FA3607] border-none rounded-2xl w-[388px] h-[522px]">
                <CardContent className="relative h-full text-white">
                    <item.icon className="absolute left-[32px] top-[64px] w-[94px] h-[80px]" />
                    <h3 className="absolute left-[32px] top-[214px] text-[28px] font-medium leading-tight max-w-[388px]">
                    {item.title}
                    </h3>
                    <p className="absolute left-[32px] top-[280px] text-[18px] leading-relaxed opacity-90 max-w-[300px]">
                    {item.description}
                    </p>
                </CardContent>
            </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
