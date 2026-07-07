import { SectionHeader } from "./section-header"
import { GraduationCap } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  location: string
  score: string
  period: string
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology - Electronics and Communication Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    score: "CGPA: 7.87",
    period: "Since August 2023",
  },
  {
    degree: "Intermediate",
    institution: "City Montessori School, Rajendra Nagar",
    location: "Lucknow",
    score: "88.8%",
    period: "July 2022",
  },
  {
    degree: "Matriculation",
    institution: "City Montessori School, Rajendra Nagar",
    location: "Lucknow",
    score: "92.4%",
    period: "July 2020",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-16 px-6 py-12">
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
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.institution}, {item.location}
                    </p>
                  </div>
                  <span className="mt-1 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:mt-0 shrink-0">
                    {item.score}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/70">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
