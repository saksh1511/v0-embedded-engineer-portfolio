import { ChevronDown, FileDown, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      {/* Terminal-style status line */}
      <div className="mb-8 flex items-center gap-2 text-muted-foreground text-xs">
        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
        <span>{"SYS_STATUS: ONLINE"}</span>
        <span className="text-border">{"///"}</span>
        <span>{"MODE: PORTFOLIO_v1.0"}</span>
      </div>

      <h1 className="glow-green text-4xl font-bold tracking-tight text-primary md:text-6xl">
        Sakshi Sharma
      </h1>

      <p className="mt-4 text-lg tracking-widest text-accent uppercase md:text-xl">
        Embedded Systems Engineer
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed text-sm md:text-base">
        Embedded systems engineer with hands-on experience in microcontroller
        programming, embedded C, sensor interfacing, IoT systems, and networking
        fundamentals.
      </p>

      <nav className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          <ChevronDown className="h-4 w-4" />
          View Projects
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <FileDown className="h-4 w-4" />
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </nav>

      {/* Blinking cursor decoration */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground text-xs">
        <span>{"SCROLL_TO_CONTINUE"}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </header>
  )
}
