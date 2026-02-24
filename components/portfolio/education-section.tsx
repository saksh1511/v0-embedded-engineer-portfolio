import { SectionHeader } from "./technical-profile"

interface EducationItem {
  degree: string
  institution: string
  score: string
}

const education: EducationItem[] = [
  {
    degree: "B.Tech - Electronics and Communication Engineering",
    institution: "Lovely Professional University",
    score: "CGPA: 7.77",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Senior Secondary",
    score: "88.8%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "Secondary Education",
    score: "92.4%",
  },
]

export function EducationSection() {
  return (
    <section className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="05" title="EDUCATION_LOG" />

        <div className="mt-8 flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="card-glow flex flex-col gap-1 border border-border bg-card p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.institution}
                </p>
              </div>
              <span className="mt-2 inline-block border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary md:mt-0">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
