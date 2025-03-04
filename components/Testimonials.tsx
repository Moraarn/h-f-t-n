const testimonials = [
    {
      quote:
        "The dedication of these young people is truly inspiring. They've made a significant difference in the lives of our children.",
      name: "Mary Wanjiku",
      role: "Director, Tumaini Children's Home",
    },
    {
      quote: "Thanks to Hungry for the Needy, our children now have access to clean water and better facilities.",
      name: "John Omondi",
      role: "Manager, Hope Center Orphanage",
    },
    {
      quote: "The medical camp they organized was exactly what our children needed. We're grateful for their support.",
      name: "Sarah Achieng",
      role: "Nurse, Baraka Children's Home",
    },
  ]
  
  export function Testimonials() {
    return (
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those we've worked with and supported.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  