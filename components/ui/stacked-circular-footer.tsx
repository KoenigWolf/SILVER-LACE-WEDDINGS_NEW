import type { FC, HTMLAttributes } from "react"
import { Icons } from "./icons"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const buttonVariants = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

const StackedCircularFooter: FC<FooterProps> = () => {
  return (
    <footer className="py-12 bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center">
          <div className="p-8 mb-8 rounded-full bg-primary/10">
            <Icons.logo className="w-6 icon-class" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#hero" className="hover:text-primary">Home</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#portfolio" className="hover:text-primary">Portfolio</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <div className="flex mb-8 space-x-4">
            <button type="button" className={cn(buttonVariants, "rounded-full h-9 w-9 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground")}>
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Facebook</span>
            </button>
            <button type="button" className={cn(buttonVariants, "rounded-full h-9 w-9 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground")}>
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </button>
            <button type="button" className={cn(buttonVariants, "rounded-full h-9 w-9 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground")}>
              <Instagram className="w-4 h-4" />
              <span className="sr-only">Instagram</span>
            </button>
            <button type="button" className={cn(buttonVariants, "rounded-full h-9 w-9 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground")}>
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </button>
          </div>
          <div className="w-full max-w-md mb-8">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex w-full px-3 py-1 text-sm transition-colors bg-transparent border rounded-full shadow-sm h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                className={cn(buttonVariants, "rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90")}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
