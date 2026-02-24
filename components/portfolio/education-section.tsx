import { SectionHeader } from "./section-header"
import { GraduationCap } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  score: string
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology - Electronics and Communication Engineering",
    institution: "Lovely Professional University",
    score: "CGPA: 7.77",
  },
  {
    degree: "Intermediate",
    institution: "Senior Secondary",
    score: "88.8%",
  },
  {
    degree: "Matriculation",
    institution: "Secondary Education",
    score: "92.4%",
  },
]

export function EducationSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Education"
          subtitle="Academic background"
        />

        <div className="flex flex-col gap-3">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
                <span className="mt-1 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:mt-0">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
