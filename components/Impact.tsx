export function Impact() {
    return (
      <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The numbers that showcase our commitment to making a difference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                25+
              </div>
              <h3 className="text-xl font-bold">Children's Homes</h3>
              <p className="text-sm text-muted-foreground">Visited and supported across Kenya</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                500+
              </div>
              <h3 className="text-xl font-bold">Children</h3>
              <p className="text-sm text-muted-foreground">Directly impacted by our programs</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                50+
              </div>
              <h3 className="text-xl font-bold">Volunteers</h3>
              <p className="text-sm text-muted-foreground">Dedicated young Kenyans making a difference</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Years</h3>
              <p className="text-sm text-muted-foreground">Of continuous community service</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  