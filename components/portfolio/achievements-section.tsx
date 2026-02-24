import { SectionHeader } from "./section-header"
import { Trophy, Star } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "National Rank 21 in Java Quiz",
    description:
      "Secured All-India Rank 21 in a competitive Java programming quiz among 2,000+ participants nationwide.",
  },
  {
    icon: Star,
    title: "Letter of Appreciation - Defence Minister of India",
    description:
      "Received a letter of appreciation from the Defence Minister of India.",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Achievements"
          subtitle="Recognition and accomplishments"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
