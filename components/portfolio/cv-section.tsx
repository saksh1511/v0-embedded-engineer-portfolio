"use client"

import { useState, useRef } from "react"
import { SectionHeader } from "./section-header"
import { FileText, Upload, Download, Eye, X, Trash2 } from "lucide-react"

interface CVFile {
  name: string
  url: string
  type: string
  size: string
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function CVSection() {
  const [cvFile, setCvFile] = useState<CVFile | null>(null)
  const [viewing, setViewing] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFile = (file: File) => {
    const validTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/webp",
    ]
    if (!validTypes.includes(file.type)) return
    if (file.size > 10 * 1024 * 1024) return // 10MB max

    const url = URL.createObjectURL(file)
    setCvFile({
      name: file.name,
      url,
      type: file.type,
      size: formatSize(file.size),
    })
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ""
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleRemove = () => {
    if (cvFile) URL.revokeObjectURL(cvFile.url)
    setCvFile(null)
  }

  return (
    <>
      <section id="cv" className="scroll-mt-16 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Curriculum Vitae"
            subtitle="View or download my CV"
          />

          {!cvFile ? (
            <div
              onDragOver={(e) => {
                e.preventDefault()
                setDragActive(true)
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Upload your CV
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, PNG, JPG or WebP (max 10 MB)
                </p>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                Choose File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/png,image/jpeg,image/webp"
                onChange={handleUpload}
                className="hidden"
                aria-label="Upload CV file"
              />
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card">
              {/* File info bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {cvFile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cvFile.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewing(true)}
                    className="flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">View</span>
                  </button>
                  <a
                    href={cvFile.url}
                    download={cvFile.name}
                    className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={handleRemove}
                    className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                    aria-label="Remove CV"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Inline preview */}
              <div className="p-4">
                {cvFile.type === "application/pdf" ? (
                  <iframe
                    src={cvFile.url}
                    title="CV Preview"
                    className="h-[500px] w-full rounded-md border border-border"
                  />
                ) : (
                  <img
                    src={cvFile.url}
                    alt="CV Preview"
                    className="mx-auto max-h-[500px] rounded-md object-contain"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Full-screen viewer modal */}
      {viewing && cvFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col rounded-lg border border-border bg-card shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {cvFile.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cvFile.url}
                  download={cvFile.name}
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
              {cvFile.type === "application/pdf" ? (
                <iframe
                  src={cvFile.url}
                  title="CV Full View"
                  className="h-full min-h-[70vh] w-full rounded-md border border-border"
                />
              ) : (
                <img
                  src={cvFile.url}
                  alt="CV Full View"
                  className="mx-auto max-h-full rounded-md object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
