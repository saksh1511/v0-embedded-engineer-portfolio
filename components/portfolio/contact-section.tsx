import { Github, Linkedin, Mail } from "lucide-react"
import { SectionHeader } from "./technical-profile"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sakshi.sharma@email.com",
    href: "mailto:sakshi.sharma@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sakshi-sharma",
    href: "https://linkedin.com/in/sakshi-sharma",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sakshi-sharma",
    href: "https://github.com/sakshi-sharma",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="pcb-trace px-6 pt-16 pb-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="07" title="CONTACT" />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center gap-4 border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/30 bg-accent/5">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="truncate text-sm text-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
