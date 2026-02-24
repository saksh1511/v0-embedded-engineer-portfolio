import { SectionHeader } from "./section-header"

interface Project {
  title: string
  description: string
  problem: string
  approach: string
  hardware: string[]
  software: string[]
  outcome: string
}

const projects: Project[] = [
  {
    title: "Lost and Found Tracking System",
    description:
      "Real-time IoT-based tracking system using GPS and RFID to monitor individuals in large or remote areas, enabling efficient identification and recovery.",
    problem:
      "Tracking and locating individuals in large-scale environments such as campuses and remote areas lacked an automated, real-time solution.",
    approach:
      "Designed an IoT-based system combining GPS for continuous location tracking and RFID for identification. Data is pushed to a cloud dashboard for real-time monitoring and alerts.",
    hardware: ["GPS Module", "RFID Reader/Tags", "ESP32", "Buzzer", "LEDs"],
    software: ["Arduino IDE", "Embedded C", "IoT Cloud Platform"],
    outcome:
      "Functional prototype enabling real-time location monitoring and rapid identification in large-area scenarios.",
  },
  {
    title: "Secure Chat Application Using TCP & AES Encryption",
    description:
      "Java-based client-server chat application using TCP/IP for reliable real-time communication with AES encryption for secure data exchange.",
    problem:
      "Standard messaging systems lack end-to-end encryption at the transport layer, exposing data to interception during transit.",
    approach:
      "Developed a client-server architecture using TCP/IP sockets with AES encryption applied to all messages before transmission. Tested across multiple network simulation scenarios.",
    hardware: [],
    software: ["Java", "TCP/IP", "AES Encryption", "Socket Programming"],
    outcome:
      "Validated secure real-time communication with encrypted message exchange under multiple simulated network conditions.",
  },
  {
    title: "AgriSense: Intelligent Crop Monitoring & Management Bot",
    description:
      "IoT-enabled agribot to monitor soil nutrients, moisture levels, and pest activity in real time with smart alerts and precision agriculture insights.",
    problem:
      "Traditional farming lacks real-time data on soil health, moisture, and pest activity, leading to inefficient resource usage and reduced crop yield.",
    approach:
      "Built a sensor-equipped agribot integrating soil nutrient, moisture, and pest detection sensors. Data-driven alerts trigger precision irrigation and fertilization recommendations.",
    hardware: ["Arduino Uno", "IoT Sensors", "Motor Drivers", "Chassis"],
    software: ["Arduino IDE", "Embedded Systems", "AI/ML Concepts"],
    outcome:
      "Demonstrated improved crop monitoring accuracy and data-driven precision in irrigation and fertilization timing.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Projects"
          subtitle="Engineering projects with real-world applications"
        />

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-base font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-1 text-xs font-semibold tracking-wider text-primary uppercase">
            Problem Statement
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="mb-1 text-xs font-semibold tracking-wider text-primary uppercase">
            Engineering Approach
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.approach}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {project.hardware.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-foreground/70 uppercase">
              Hardware
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.hardware.map((hw) => (
                <span
                  key={hw}
                  className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                >
                  {hw}
                </span>
              ))}
            </div>
          </div>
        )}
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-wider text-foreground/70 uppercase">
            Software / Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.software.map((sw) => (
              <span
                key={sw}
                className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <h4 className="mb-1 text-xs font-semibold tracking-wider text-primary uppercase">
          Outcome
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.outcome}
        </p>
      </div>
    </article>
  )
}
