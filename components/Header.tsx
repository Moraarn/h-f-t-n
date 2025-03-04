import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  scrolled: boolean
}

export function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-background border-b" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-primary font-bold text-xl">
          <Heart className="h-6 w-6" />
          <span className="text-primary px-6">HFTN</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
          <Link
            href="#about"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            About Us
          </Link>
          <Link
            href="#achievements"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Achievements
          </Link>
          <Link
            href="#gallery"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Gallery
          </Link>
          <Link
            href="#events"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Events
          </Link>
          <Link
            href="#team"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Our Team
          </Link>
          <Link
            href="#blog"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>Donate Now</Button>
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-16 w-64 shadow-lg">
          <nav className={`px-4 pt-2 pb-4 space-y-2 ${scrolled ? "bg-background" : "bg-black/90"}`}>
            <Link
              href="#about"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#achievements"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="#gallery"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#events"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#team"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="#blog"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className={`block py-2 px-4 text-sm transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

