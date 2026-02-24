import { SectionHeader } from "./section-header"
import { Briefcase } from "lucide-react"

const responsibilities = [
  "Routing and switching configuration",
  "VLAN implementation and network segmentation",
  "TCP/IP protocol understanding",
  "OSPF, RIP, EIGRP routing protocols",
  "Network simulation, testing, and troubleshooting",
]

export function ExperienceSection() {
  return (
    <section id="internship" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Internship"
          subtitle="Professional experience"
        />

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  Computer Networking Intern
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  July 2025
                </span>
              </div>
              <p className="mt-0.5 text-sm text-primary">
                Lovely Professional University
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-md border border-border bg-secondary/50 p-4">
                <h4 className="text-xs font-semibold tracking-wider text-foreground/70 uppercase">
                  Key Project
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Implemented Inter-VLAN Routing using Router-on-a-Stick to
                  enable secure communication between multiple departmental
                  networks over a single physical router interface (real-life
                  use: enterprise and campus network segmentation).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
