import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

export function HeroSection() {
  return (
    <header className="relative px-6 pt-6 pb-16 md:pb-20">
      {/* Top bar with theme toggle */}
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Portfolio
        </span>
        <ThemeToggle />
      </div>

      {/* Introduction */}
      <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-8 md:mt-16 md:flex-row md:items-start md:gap-12">
        {/* Profile photo */}
        <div className="shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-border md:h-44 md:w-44">
            <Image
              src="/images/profile.jpg"
              alt="Sakshi Sharma, Embedded Systems Engineer"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Sakshi Sharma
          </h1>
          <p className="mt-2 text-base font-medium text-primary">
            Embedded Systems Engineer
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Embedded systems engineer with hands-on experience in
            microcontroller programming, embedded C, sensor interfacing,
            IoT-based systems, secure communication, and networking
            fundamentals. Passionate about building reliable and secure
            hardware-software solutions for real-world problems.
          </p>
        </div>
      </div>
    </header>
  )
}
