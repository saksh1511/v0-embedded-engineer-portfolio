import { SectionHeader } from "./section-header"

interface Project {
  title: string
  summary: string
  highlights: string[]
  techStack: string[]
}

const projects: Project[] = [
  {
    title: "Lost and Found Tracking System (GPS + RFID + IoT)",
    summary:
      "IoT-based system for real-time location tracking of individuals in large or remote areas using GPS and RFID.",
    highlights: [
      "Enabled real-time location tracking of individuals in large or remote areas",
      "Achieved efficient monitoring and recovery using wearable devices and checkpoints",
    ],
    techStack: ["IoT Devices", "GPS", "RFID", "Wireless Communication"],
  },
  {
    title: "Secure Chat Application Using TCP & AES Encryption",
    summary:
      "Java-based client-server application providing encrypted real-time messaging over TCP/IP.",
    highlights: [
      "Java-based client-server application using TCP/IP",
      "AES encryption for secure and confidential communication",
      "Tested under multiple network scenarios",
    ],
    techStack: ["Java", "TCP/IP", "AES Encryption", "Socket Programming"],
  },
  {
    title: "AgriSense: Intelligent Crop Monitoring & Management Bot",
    summary:
      "IoT-enabled agribot for monitoring soil nutrients, moisture, and pest activity with smart alerts.",
    highlights: [
      "IoT-enabled agribot for monitoring soil nutrients, moisture, and pest activity",
      "Smart alerts and precision irrigation using data-driven insights",
    ],
    techStack: [
      "Arduino Uno",
      "IoT Sensors",
      "Embedded System",
      "AI/ML Concepts",
    ],
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
