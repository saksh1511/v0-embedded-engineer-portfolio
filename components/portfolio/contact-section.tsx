import { SectionHeader } from "./section-header"
import { Github, Linkedin, Mail } from "lucide-react"

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
    <section id="contact" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Contact"
          subtitle="Get in touch"
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="truncate text-sm font-medium text-foreground">
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
