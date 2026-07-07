import { SectionHeader } from "./section-header"
import { Code2, Cpu, Wrench } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "C", "Java", "Micro Python", "Embedded C"],
  },
  {
    title: "Boards & Platforms",
    icon: Cpu,
    skills: ["STM32", "ESP32", "Arduino", "Proteus", "STM32CubeIDE", "MATLAB", "Arduino IDE", "Cisco Packet Tracer", "VS Code"],
  },
  {
    title: "Soft Skills",
    icon: Wrench,
    skills: ["Problem-Solving", "Leadership", "Project Management", "Adaptability", "Critical Thinking"],
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
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
