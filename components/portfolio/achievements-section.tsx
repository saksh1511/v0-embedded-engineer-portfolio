import { Award, Trophy } from "lucide-react"
import { SectionHeader } from "./technical-profile"

const achievements = [
  {
    icon: Trophy,
    title: "National Rank 21 in Java Quiz",
    description:
      "Secured All-India Rank 21 in a competitive Java programming quiz with over 2,000 participants nationwide.",
  },
  {
    icon: Award,
    title: "Letter of Appreciation - Defence Minister of India",
    description:
      "Received a letter of appreciation from the Defence Minister of India in recognition of outstanding contribution.",
  },
]

export function AchievementsSection() {
  return (
    <section className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="06" title="ACHIEVEMENTS" />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card-glow flex gap-4 border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
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
