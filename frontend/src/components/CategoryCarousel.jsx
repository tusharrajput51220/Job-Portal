import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

function CategoryCarousel() {
    const category=[
        "Frontend Developer",
        "Backend Developer",
        "Data Science",
        "Draphic Designer",
        "FullStack Developer",
    ]
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
                {category?.map((cat, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Button className="rounded-full" variant="outline">{cat}</Button>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CategoryCarousel