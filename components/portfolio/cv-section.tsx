"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { FileText, Download, Eye, X } from "lucide-react"

const CV_URL = "/documents/SakshiSharmaCV.pdf"
const CV_NAME = "SakshiSharmaCV.pdf"

export function CVSection() {
  const [viewing, setViewing] = useState(false)

  return (
    <>
      <section id="cv" className="scroll-mt-16 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Curriculum Vitae"
            subtitle="View or download my CV"
          />

          <div className="rounded-lg border border-border bg-card">
            {/* File info bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {CV_NAME}
                  </p>
                  <p className="text-xs text-muted-foreground">PDF Document</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewing(true)}
                  className="flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>View</span>
                </button>
                <a
                  href={CV_URL}
                  download={CV_NAME}
                  className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Inline preview */}
            <div className="p-4">
              <iframe
                src={CV_URL}
                title="CV Preview"
                className="h-[500px] w-full rounded-md border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen viewer modal */}
      {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col rounded-lg border border-border bg-card shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {CV_NAME}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={CV_URL}
                  download={CV_NAME}
                  className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
                <button
                  onClick={() => setViewing(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close viewer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <iframe
                src={CV_URL}
                title="CV Full View"
                className="h-full min-h-[70vh] w-full rounded-md border border-border"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
