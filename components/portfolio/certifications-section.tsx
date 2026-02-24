import { SectionHeader } from "./section-header"
import { Award } from "lucide-react"

const certifications = [
  "Embedded Systems and Robotics IoT - IIT Mandi",
  "Microcontroller Embedded C Programming",
  "Computer Networking - LPU",
  "NPTEL Database Management Systems",
  "Generative AI",
  "Data Science Bootcamp",
]

export function CertificationsSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Certifications"
          subtitle="Professional development and learning"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <Award className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
