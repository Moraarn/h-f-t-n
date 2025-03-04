"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header"

import { Contact } from "lucide-react"
import { About } from "@/components/About"
import { Achievements } from "@/components/Achievements"
import { Blog } from "@/components/Blog"
import { Events } from "@/components/Events"
import { Footer } from "@/components/Footer"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Impact } from "@/components/Impact"
import { Support } from "@/components/Support"
import { Team } from "@/components/Team"
import { Testimonials } from "@/components/Testimonials"


export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Achievements />
        <Impact />
        <Gallery />
        <Events />
        <Support />
        <Team />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

