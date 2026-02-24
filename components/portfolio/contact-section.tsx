import { SectionHeader } from "./section-header"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6307973797",
    href: "tel:+916307973797",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shsaksh1415@gmail.com",
    href: "mailto:shsaksh1415@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saksh1511",
    href: "https://github.com/saksh1511",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sakshi-sharma-a88231234",
    href: "https://www.linkedin.com/in/sakshi-sharma-a88231234",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title="Contact" subtitle="Get in touch" />

        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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
