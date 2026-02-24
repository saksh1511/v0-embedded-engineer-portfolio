export function TechnicalProfile() {
  const focusAreas = [
    "Embedded C and low-level programming",
    "Microcontrollers and peripherals",
    "Sensors, actuators, and motor control",
    "IoT and wireless communication",
    "MATLAB-based signal processing",
  ]

  return (
    <section className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="01" title="TECHNICAL_PROFILE" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Background */}
          <div className="card-glow border border-border bg-card p-6">
            <h3 className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
              Background
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Electronics and Communication Engineering undergraduate with a
              career objective focused on embedded firmware development and R&D
              roles in the embedded systems domain.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="card-glow border border-border bg-card p-6">
            <h3 className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
              Focus Areas
            </h3>
            <ul className="flex flex-col gap-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
}: {
  label: string
  title: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-primary">{`[${label}]`}</span>
      <h2 className="glow-green text-lg font-bold tracking-widest text-primary md:text-xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
