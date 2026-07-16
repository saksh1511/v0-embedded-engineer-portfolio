"use client"

import { X, Download, FileText, Eye } from "lucide-react"
import { useEffect, useState } from "react"
import { CVContent } from "./cv-content"

interface CVViewerModalProps {
  isOpen: boolean
  onClose: () => void
  cvUrl: string
}

export function CVViewerModal({ isOpen, onClose, cvUrl }: CVViewerModalProps) {
  const [viewMode, setViewMode] = useState<"formatted" | "pdf">("formatted")

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl rounded-lg border border-border bg-background shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Sakshi Sharma - CV
            </h2>
            <div className="flex items-center gap-3">
              <a
                href={cvUrl}
                download="SakshiSharmaCV.docx"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <button
                onClick={onClose}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex border-b border-border bg-secondary/50 px-6">
            <button
              onClick={() => setViewMode("formatted")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                viewMode === "formatted"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-4 w-4" />
              Formatted View
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                viewMode === "pdf"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="h-4 w-4" />
              PDF View
            </button>
          </div>

          {/* Content */}
          <div className="overflow-hidden">
            {viewMode === "formatted" ? (
              <div className="max-h-[calc(100vh-200px)]">
                <CVContent />
              </div>
            ) : (
              <iframe
                src={`${cvUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-96 border-0"
                title="CV PDF Viewer"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
