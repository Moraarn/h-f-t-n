import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const achievements = [
  {
    title: "Tumaini Children's Home",
    description: "Provided food, clothing, and educational materials to 50 children.",
    location: "Nairobi, Kenya",
    date: "January 2023",
  },
  {
    title: "Hope Center Orphanage",
    description: "Renovated facilities and installed a water purification system.",
    location: "Mombasa, Kenya",
    date: "March 2023",
  },
  {
    title: "Baraka Children's Home",
    description: "Organized a medical camp providing check-ups for 75 children.",
    location: "Kisumu, Kenya",
    date: "May 2023",
  },
  {
    title: "Upendo Children's Center",
    description: "Donated books and established a small library for the children.",
    location: "Nakuru, Kenya",
    date: "July 2023",
  },
  {
    title: "Neema Orphanage",
    description: "Provided three months' worth of food supplies and hygiene products.",
    location: "Eldoret, Kenya",
    date: "September 2023",
  },
  {
    title: "Imani Children's Home",
    description: "Organized a career day and mentorship program for teenagers.",
    location: "Nairobi, Kenya",
    date: "November 2023",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Over the years, we've made significant impact through our outreach programs and initiatives.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              <p className="text-sm font-medium">{achievement.location}</p>
              <p className="text-sm text-muted-foreground">{achievement.date}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-1">
            View All Achievements
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

