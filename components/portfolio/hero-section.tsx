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
              I&apos;m an Electronics and Communication Engineering undergraduate at Lovely Professional University with a deep passion for embedded systems, firmware development, and IoT applications. I thrive at the intersection of hardware and software, designing intelligent embedded solutions that solve real-world engineering challenges through innovative, reliable, and efficient technology.
            </p>
            <p>
              With hands-on expertise in STM32, ESP32, Arduino, and FreeRTOS, I specialize in developing real-time embedded systems, sensor interfacing, communication protocols, and IoT applications. I&apos;m proficient in C, C++, Java, Embedded C, MicroPython, and Verilog, leveraging advanced tools like Proteus, STM32CubeIDE, MATLAB, Keil, PSpice, and CAD software for both design and validation.
            </p>
            <p>
              I excel at translating complex engineering concepts into practical applications, combining strong problem-solving abilities with critical thinking and technical depth. My projects demonstrate expertise in hardware-software co-design, embedded systems architecture, and end-to-end solution development. Continuously expanding my technical expertise, I&apos;m committed to pushing the boundaries of what embedded systems can achieve.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
