"use client"

import { useState, useRef } from "react"
import { SectionHeader } from "./section-header"
import { Award, Eye, Upload, X, FileText } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  allowUpload?: boolean
}

const certifications: Certification[] = [
  { name: "Embedded System and Robotics IoT", issuer: "IIT Mandi", allowUpload: true },
  { name: "Microcontroller Embedded C Programming", issuer: "Udemy", allowUpload: true },
  { name: "Computer Networking", issuer: "Centre of Professional Enhancement", allowUpload: true },
  { name: "Database Management System", issuer: "NPTEL", allowUpload: true },
  { name: "AI Tools & ChatGPT Workshop", issuer: "be10x" },
  { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", allowUpload: true },
]

interface CertFile {
  name: string
  url: string
  type: string
}

export function CertificationsSection() {
  const [certFiles, setCertFiles] = useState<Record<string, CertFile>>({})
  const [viewingCert, setViewingCert] = useState<CertFile | null>(null)
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({})

  const handleUpload = (certName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setCertFiles((prev) => ({
      ...prev,
      [certName]: { name: file.name, url, type: file.type },
    }))
  }

  return (
    <>
      <section id="certifications" className="scroll-mt-16 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Certifications"
            subtitle="Professional development and learning"
          />

          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <Award className="h-4 w-4 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">
                    {cert.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </span>
                </div>

                {cert.allowUpload !== false && cert.allowUpload && (
                  <div className="flex shrink-0 items-center gap-1.5">
                    {certFiles[cert.name] ? (
                      <button
                        onClick={() => setViewingCert(certFiles[cert.name])}
                        className="flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        <Eye className="h-3 w-3" />
                        <span className="hidden sm:inline">View Certificate</span>
                        <span className="sm:hidden">View</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => fileInputRefs.current[cert.name]?.click()}
                        className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        <Upload className="h-3 w-3" />
                        <span className="hidden sm:inline">Attach</span>
                      </button>
                    )}
                    <input
                      ref={(el) => { fileInputRefs.current[cert.name] = el }}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleUpload(cert.name, e)}
                      className="hidden"
                      aria-label={`Upload certificate for ${cert.name}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate viewer modal */}
      {viewingCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setViewingCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <div
            className="relative w-full max-w-3xl rounded-lg border border-border bg-card shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate text-sm font-medium text-foreground">
                  {viewingCert.name}
                </span>
              </div>
              <button
                onClick={() => setViewingCert(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close certificate viewer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-center p-4" style={{ maxHeight: "80vh" }}>
              {viewingCert.type === "application/pdf" ? (
                <iframe
                  src={viewingCert.url}
                  title="Certificate PDF"
                  className="h-[70vh] w-full rounded-md border-0"
                />
              ) : (
                <img
                  src={viewingCert.url}
                  alt="Certificate"
                  className="max-h-[70vh] w-auto rounded-md object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
