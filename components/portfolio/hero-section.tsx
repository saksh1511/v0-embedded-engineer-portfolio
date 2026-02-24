"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Camera } from "lucide-react"

export function HeroSection() {
  const [photoSrc, setPhotoSrc] = useState("/images/profile.jpg")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPhotoSrc(url)
  }

  return (
    <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Profile photo with upload */}
        <div className="group relative shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-sm md:h-44 md:w-44">
            <Image
              src={photoSrc}
              alt="Sakshi Sharma, Embedded Systems Engineer"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute right-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:text-foreground md:right-2 md:bottom-2"
            aria-label="Upload profile photo"
          >
            <Camera className="h-3.5 w-3.5" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
            aria-label="Upload profile photo"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
            Sakshi Sharma
          </h1>
          <p className="mt-2 text-base font-medium text-primary">
            Embedded Systems Engineer
          </p>
          <div className="mt-4 max-w-xl space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              As a proactive and detail-oriented Electronics and Communication
              Engineering student at Lovely Professional University, I am
              passionate about the intersection of hardware and software. My
              academic foundation is built on core ECE principles including
              Embedded Systems, Analog Circuits, and Computer Networking.
            </p>
            <p>
              I am proficient in C, C++, Java, Python, Embedded C, Assembly,
              MicroPython, and Verilog, with hands-on experience in
              microcontroller programming and system-level development. I have
              worked extensively with tools and platforms such as Proteus,
              MATLAB, Keil, PSpice, Cisco Packet Tracer, Creo, and Fusion for
              simulation, design, and testing.
            </p>
            <p>
              Beyond academics, I actively explore real-world engineering
              applications through practical projects in IoT, secure
              communication, and embedded system design. I bring strong
              problem-solving ability, critical thinking, leadership,
              adaptability, and project management skills to multidisciplinary
              engineering challenges.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
