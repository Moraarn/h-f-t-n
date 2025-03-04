import Image from "next/image"
import { Users, Heart, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hungry for the Needy is a youth-led organization based in Kenya, committed to addressing social challenges
              and improving the lives of vulnerable communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/pic5.jpg"
            width={400}
            height={400}
            alt="Hungry for the Needy team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower and uplift vulnerable communities through sustainable initiatives, focusing on children's
                    homes, education support, and community development.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Our Values
                  </h3>
                  <p className="text-muted-foreground">
                    Compassion, integrity, dedication, and community-centered approaches guide all our work and
                    interactions.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Our History
                  </h3>
                  <p className="text-muted-foreground">
                    Founded by a group of university students in 2018, we've grown into a recognized organization making
                    meaningful impact across Kenya.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

