import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/5e/76/c8/5e76c81b5689b7e2a065306ce86dac15.jpg"
          alt="Children smiling"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            A Life<span className="text-primary">  Lived For</span> Others Is A Life  Worthwhile
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-[700px] mx-auto">
            We are a group of passionate Kenyan youths dedicated to making a difference in our society through community
            service and outreach programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Join Our Cause
              </Button>
            </Link>
            <Link href="#about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/20 hover:text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

