"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel"
import { Card, CardContent } from "@/components/ui/Card"

import { SOLUTIONS } from "./SolutionsCarousel.const"

export function SolutionsCarousel() {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="gap-6">
        {SOLUTIONS.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[388px] shrink-0"
          >
            <Card className="bg-[#FA3607] border-none rounded-2xl w-[388px] h-[522px]">
              <CardContent className="relative h-full text-white">
                <item.icon className="absolute left-[32px] top-[64px] w-[94px] h-[80px]" />

                <h3 className="absolute left-[32px] top-[214px] text-[28px] font-medium leading-tight max-w-[300px]">
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
  )
}
