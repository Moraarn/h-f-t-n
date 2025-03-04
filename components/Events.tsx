import { Button } from "@/components/ui/button"
import { Clock, Calendar, MapPin } from "lucide-react"

const events = [
  {
    title: "Food Drive",
    description: "Join us as we collect and distribute food to various children's homes in Nairobi.",
    date: "June 15, 2023",
    location: "Nairobi, Kenya",
  },
  {
    title: "Fundraising Gala",
    description: "Annual fundraising event to support our initiatives for the coming year.",
    date: "July 22, 2023",
    location: "Sarova Stanley, Nairobi",
  },
  {
    title: "Back to School Drive",
    description: "Help us collect school supplies for children returning to school.",
    date: "August 10, 2023",
    location: "Various locations in Kenya",
  },
]

export function Events() {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us in our upcoming outreach programs and fundraising events.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
              </div>
              <Button variant="outline" className="mt-2">
                Register
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

