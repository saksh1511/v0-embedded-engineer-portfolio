import Image from "next/image"

export function HeroSection() {
  return (
    <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Profile photo */}
        <div className="shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-sm md:h-44 md:w-44">
            <Image
              src="/images/sakshi-profile.png"
              alt="Sakshi Sharma, Embedded System Engineer"
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
            Embedded System Engineer
          </p>
          <div className="mt-4 max-w-xl space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              I&apos;m an Electronics and Communication Engineering undergraduate at Lovely Professional University with a strong interest in embedded systems, firmware development, and IoT solutions. I enjoy designing intelligent embedded systems by combining hardware and software engineering, with extensive hands-on experience in STM32, ESP32, Arduino, and FreeRTOS-based real-time systems.
            </p>
            <p>
              Proficient in C, C++, Java, Embedded C, Python, and MicroPython, I have developed diverse projects involving real-time embedded systems, sensor interfacing, communication protocols, wireless IoT applications, and robotics. I leverage advanced design and simulation tools including Proteus, STM32CubeIDE, MATLAB, Keil, PSpice, and CAD software for comprehensive system validation and prototyping.
            </p>
            <p>
              I am passionate about solving real-world engineering challenges through innovative, reliable, and efficient technology solutions. My approach combines strong problem-solving and critical thinking with hands-on technical expertise in hardware-software co-design and embedded systems architecture. Continuously expanding my technical depth, I&apos;m committed to developing next-generation embedded solutions that drive technological innovation.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
