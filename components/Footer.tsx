import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex gap-2 items-center text-primary font-bold">
          <Heart className="h-5 w-5" />
          <span>Hungry for the Needy</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Hungry for the Needy. All rights reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
          "A life lived for others is a life worthwhile."
        </p>
      </div>
    </footer>
  )
}

