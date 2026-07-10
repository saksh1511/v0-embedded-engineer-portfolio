import { SectionHeader } from "./section-header"
import { Code2, Cpu, Wrench, Zap, Layers, Gauge } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
  description: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Embedded & systems programming",
    skills: ["C++", "C", "Java", "Embedded C", "MicroPython", "Assembly", "Verilog"],
  },
  {
    title: "Microcontrollers & Boards",
    icon: Cpu,
    description: "Hardware platforms for embedded systems",
    skills: ["STM32", "ESP32", "Arduino", "ARM Cortex-M", "RISC-V"],
  },
  {
    title: "Design & Simulation Tools",
    icon: Layers,
    description: "CAD and electronics simulation",
    skills: ["Proteus", "STM32CubeIDE", "Keil", "MATLAB", "PSpice", "Creo", "Fusion 360"],
  },
  {
    title: "Embedded Systems & IoT",
    icon: Zap,
    description: "Real-time and wireless systems",
    skills: ["Real-Time OS", "Free RTOS", "Sensor Integration", "Wireless Communication", "UART/SPI/I2C"],
  },
  {
    title: "Network & Communication",
    icon: Gauge,
    description: "Protocols and networking",
    skills: ["TCP/IP", "Cisco Packet Tracer", "Routing", "VLAN", "Wireless Networks"],
  },
  {
    title: "Professional Skills",
    icon: Wrench,
    description: "Engineering mindset & teamwork",
    skills: ["Problem-Solving", "Leadership", "Critical Thinking", "Project Management", "Adaptability"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Skills"
          subtitle="Technical expertise and tools"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="group rounded-lg border border-border bg-gradient-to-br from-card to-card/80 p-5 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/90 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
