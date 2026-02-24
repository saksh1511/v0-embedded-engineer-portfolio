import { SectionHeader } from "./technical-profile"

export function ExperienceSection() {
  const responsibilities = [
    "Routing and switching configuration",
    "VLAN segmentation and management",
    "TCP/IP protocol stack analysis",
    "OSPF, RIP, and EIGRP routing protocols",
    "Network simulation and troubleshooting",
  ]

  return (
    <section className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="03" title="INTERNSHIP_LOG" />

        <div className="mt-8">
          <div className="card-glow border border-border bg-card p-6">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Computer Networking Intern
              </h3>
              <span className="text-xs text-muted-foreground">
                July 2025
              </span>
            </div>
            <p className="mt-1 text-xs text-accent">
              Lovely Professional University
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
