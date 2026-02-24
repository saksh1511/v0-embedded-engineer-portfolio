import { SectionHeader } from "./technical-profile"

interface Project {
  title: string
  problem: string
  solution: string
  hardware: string[]
  software: string[]
}

const projects: Project[] = [
  {
    title: "Lost and Found Tracking System",
    problem:
      "Tracking and recovering lost personal belongings in large campus environments with no automated system in place.",
    solution:
      "Developed an IoT-based tracking system combining GPS for location logging and RFID for item identification, with real-time data pushed to a cloud dashboard.",
    hardware: ["GPS Module", "RFID Reader/Tags", "ESP32", "Buzzer", "LEDs"],
    software: ["Arduino IDE", "Embedded C", "IoT Cloud Platform"],
  },
  {
    title: "Automatic CPR Device",
    problem:
      "Delayed or inconsistent chest compressions during cardiac emergencies due to lack of trained personnel or fatigue.",
    solution:
      "Built an Arduino-controlled mechanical compression device that delivers consistent, timed compressions following AHA guidelines for hands-free CPR assistance.",
    hardware: [
      "Arduino Uno",
      "Linear Actuator",
      "Motor Driver",
      "Pressure Sensor",
      "12V Power Supply",
    ],
    software: ["Arduino IDE", "Embedded C", "Proteus Simulation"],
  },
  {
    title: "Gender Recognition from Singer's Voice",
    problem:
      "Classifying a singer's gender from audio recordings for music metadata automation and signal processing research.",
    solution:
      "Implemented MATLAB-based feature extraction (pitch, MFCC, spectral features) with a classification model to distinguish male and female singing voices.",
    hardware: ["Microphone Input", "Audio Interface"],
    software: ["MATLAB", "Signal Processing Toolbox", "Machine Learning Toolbox"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="04" title="EMBEDDED_PROJECTS" />

        <div className="mt-8 flex flex-col gap-6">
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
    <article className="card-glow border border-border bg-card p-6">
      <h3 className="text-base font-bold text-foreground">{project.title}</h3>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-1 text-xs font-semibold tracking-widest text-accent uppercase">
            Problem
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="mb-1 text-xs font-semibold tracking-widest text-accent uppercase">
            Embedded Solution
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
            Hardware
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.hardware.map((hw) => (
              <span
                key={hw}
                className="border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs text-primary"
              >
                {hw}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-widest text-accent uppercase">
            Software / Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.software.map((sw) => (
              <span
                key={sw}
                className="border border-accent/30 bg-accent/5 px-2.5 py-0.5 text-xs text-accent"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
