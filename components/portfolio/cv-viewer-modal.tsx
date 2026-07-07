"use client"

import { X, Download } from "lucide-react"
import { useEffect } from "react"

interface CVViewerModalProps {
  isOpen: boolean
  onClose: () => void
  cvUrl: string
}

export function CVViewerModal({ isOpen, onClose, cvUrl }: CVViewerModalProps) {
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
        <div className="relative h-[90vh] w-full max-w-4xl rounded-lg border border-border bg-background shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Sakshi Sharma - CV
            </h2>
            <div className="flex items-center gap-3">
              <a
                href={cvUrl}
                download="SakshiSharmaCV.pdf"
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

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`${cvUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="h-full w-full border-0"
              title="CV Viewer"
            />
          </div>
        </div>
      </div>
    </>
  )
}
