import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "A Day at Tumaini Children's Home",
    excerpt:
      "Our team spent a day with the children at Tumaini, organizing games, sharing meals, and distributing donations.",
    date: "April 10, 2023",
    image: "https://i.pinimg.com/736x/fa/70/3a/fa703a1238dce9efe60722c36036fc14.jpg",
  },
  {
    title: "The Impact of Clean Water",
    excerpt:
      "How our water purification project at Hope Center Orphanage is changing lives and improving health outcomes.",
    date: "May 5, 2023",
    image: "https://i.pinimg.com/736x/2c/f3/70/2cf370c62cf6a743a2628e7731918309.jpg",
  },
  {
    title: "Education: The Key to Breaking the Cycle",
    excerpt: "Our educational support programs are helping children dream bigger and work towards a brighter future.",
    date: "June 20, 2023",
    image: "https://i.pinimg.com/736x/89/1f/1d/891f1d31e68af33a280f7accc5acdfa1.jpg",
  },
]

export function Blog() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stories and updates from our outreach programs and community service.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="overflow-hidden rounded-lg w-full">
                <Image
                  src={post.image || "/placeholder.svg?height=200&width=400"}
                  width={400}
                  height={200}
                  alt={post.title}
                  className="aspect-video object-cover w-full"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <Button variant="link" className="p-0 h-auto">
                Read More
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-1">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

