import { SectionHeader } from "./section-header"

interface Project {
  title: string
  summary: string
  highlights: string[]
  techStack: string[]
}

const projects: Project[] = [
  {
    title: "Multitask Dashboard using Free RTOS and STM32",
    summary:
      "Developed a Free RTOS-based multitasking system on STM32 NUCLEO-F446RE with LED, UART, Counter, and DHT22 sensor.",
    highlights: [
      "Implemented real-time temperature and humidity monitoring using DHT22 and transmitted live sensor data via UART",
      "Demonstrated RTOS concepts with task scheduling, priority management, and concurrent execution of multiple tasks",
    ],
    techStack: ["STM32 NUCLEO-F446RE", "Free RTOS", "STM32CubeIDE", "UART", "PuTTY"],
  },
  {
    title: "Smart Helmet with Accident Detection System",
    summary:
      "Designed an IoT-based smart helmet capable of detecting accidents using accelerometer and gyroscope sensors.",
    highlights: [
      "Integrated real-time GPS tracking and automated SMS alerts to emergency contacts using GSM module",
      "Created an embedded system for rider safety monitoring, detection and emergency response mechanism",
    ],
    techStack: ["ESP32", "MPU6050", "GSM Module (SIM800L)", "GPS Module (NEO-6M)", "Buzzer"],
  },
  {
    title: "Tourist Tracking and Rescuing System",
    summary:
      "Developed an IoT-based real-time tourist tracking in crowded and remote locations via wearable devices.",
    highlights: [
      "Implemented RFID checkpoints and location monitoring to identify missing individuals and support rescue operations",
      "Deployed a centralized dashboard with automated alerts and status updates for faster emergency response",
    ],
    techStack: ["IoT Devices", "ESP32", "RFID", "Wireless Communication", "Real time monitoring"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Projects"
          subtitle="Engineering projects with real-world applications"
        />

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {project.summary}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-border pt-3">
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-foreground/70 uppercase">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
