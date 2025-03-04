import Image from "next/image"

const team = [
  {
    name: "Evans Okoth",
    role: "Founder & Director",
    bio: "Passionate about community service and youth empowerment.",
    image: "/pic11.jpg",
  },
  {
    name: "Nelius",
    role: "Programs Coordinator",
    bio: "Dedicated to creating impactful outreach programs.",
    image: "/pic2.jpg",
  },
  {
    name: "Charles Wangare",
    role: "Treasurer",
    bio: "Manages our financial resources and ensures transparency.",
    image: "/pic.jpg",
  },
  {
    name: "Bryan Anyika",
    role: "Communications Officer",
    bio: "Shares our stories and impact with the world.",
    image: "/pic10.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the passionate individuals behind Hungry for the Needy.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center">
              <div className="overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg?height=150&width=150"}
                  width={150}
                  height={150}
                  alt={member.name}
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

