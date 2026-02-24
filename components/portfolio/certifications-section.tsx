import { SectionHeader } from "./section-header"
import { Award } from "lucide-react"

const certifications = [
  { name: "Embedded Systems and Robotics IoT", issuer: "IIT Mandi" },
  { name: "Microcontroller Embedded C Programming", issuer: "Udemy" },
  { name: "Computer Networking", issuer: "Centre of Professional Enhancement" },
  { name: "Database Management Systems", issuer: "NPTEL" },
  { name: "Programming in Java", issuer: "NPTEL" },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Certifications"
          subtitle="Professional development and learning"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <Award className="h-4 w-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <span className="block text-sm font-medium text-foreground">
                  {cert.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
