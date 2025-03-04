import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/pic10.jpg",
    alt: "Volunteers distributing food at Tumaini Children's Home",
  },
  {
    src: "/pic2.jpg",
    alt: "Children receiving educational materials",
  },
  {
    src: "/pic4.jpg",
    alt: "Team building water purification system at Hope Center",
  },
  {
    src: "/pic3.jpg",
    alt: "Medical camp at Baraka Children's Home",
  },
  {
    src: "/pic5.jpg",
    alt: "Library setup at Upendo Children's Center",
  },
  {
    src: "/pic12.jpg",
    alt: "Career day at Imani Children's Home",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Moments captured during our outreach programs and community service.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                width={400}
                height={300}
                alt={image.alt}
                className="aspect-video object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-1">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

