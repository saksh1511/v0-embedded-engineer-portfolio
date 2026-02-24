import { SectionHeader } from "./technical-profile"

interface SkillCategory {
  category: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    items: ["C", "C++", "Embedded C", "Assembly", "MicroPython", "Python", "Verilog"],
  },
  {
    category: "Embedded & Hardware",
    items: [
      "Microcontrollers",
      "Arduino",
      "Sensors",
      "Motors",
      "GPS Modules",
      "RFID",
    ],
  },
  {
    category: "Tools & Simulation",
    items: [
      "Proteus",
      "Keil",
      "MATLAB",
      "PSpice",
      "Cisco Packet Tracer",
      "Creo",
      "Fusion 360",
    ],
  },
  {
    category: "Domains",
    items: [
      "Embedded Systems",
      "IoT",
      "Computer Networking",
      "Signal Processing",
      "Basic ML",
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="02" title="TECHNICAL_SKILLS" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="card-glow border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-xs font-semibold tracking-widest text-accent uppercase">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
