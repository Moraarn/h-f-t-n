import { Button } from "@/components/ui/button"
import { Gift, Users, Award } from "lucide-react"

export function Support() {
  return (
    <section id="support" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support Our Cause</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              There are many ways you can contribute to our mission and help make a difference.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Gift className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Make a Donation</h3>
            <p className="text-sm text-muted-foreground">
              Your financial support helps us provide food, clothing, and educational materials to children in need.
            </p>
            <Button className="mt-2">Donate Now</Button>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Volunteer With Us</h3>
            <p className="text-sm text-muted-foreground">
              Join our team of dedicated volunteers and participate in our outreach programs and events.
            </p>
            <Button variant="outline" className="mt-2">
              Join as Volunteer
            </Button>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Corporate Partnerships</h3>
            <p className="text-sm text-muted-foreground">
              Partner with us as a corporate entity to support our initiatives and fulfill your CSR objectives.
            </p>
            <Button variant="outline" className="mt-2">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

