import Image from "next/image"

export function HeroSection() {
  return (
    <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Profile photo */}
        <div className="shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-sm md:h-44 md:w-44">
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
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
            Sakshi Sharma
          </h1>
          <p className="mt-2 text-base font-medium text-primary">
            Embedded Systems Engineer
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            As a proactive and detail-oriented Electronics and Communication
            Engineering student at Lovely Professional University, I am
            passionate about the intersection of hardware and software. My
            academic foundation is built on core ECE principles including
            Embedded Systems, Analog Circuits, and Computer Networking. I am
            proficient in C, C++, Python, and Java, with hands-on experience
            in microcontroller programming, Embedded C, and design tools such
            as Proteus. Beyond academics, I actively explore real-world
            engineering applications through practical projects in IoT, secure
            communication, and system-level problem solving.
          </p>
        </div>
      </div>
    </header>
  )
}
