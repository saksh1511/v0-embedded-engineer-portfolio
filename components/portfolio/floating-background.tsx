"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const ICONS = [
  // Microchip
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.strokeRect(x - s / 2, y - s / 2, s, s)
    const pinLen = s * 0.3
    for (let i = 0; i < 3; i++) {
      const offset = (i - 1) * (s * 0.3)
      ctx.beginPath(); ctx.moveTo(x + offset, y - s / 2); ctx.lineTo(x + offset, y - s / 2 - pinLen); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x + offset, y + s / 2); ctx.lineTo(x + offset, y + s / 2 + pinLen); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x - s / 2, y + offset); ctx.lineTo(x - s / 2 - pinLen, y + offset); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x + s / 2, y + offset); ctx.lineTo(x + s / 2 + pinLen, y + offset); ctx.stroke()
    }
  },
  // Signal wave
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath()
    for (let i = 0; i <= s; i++) {
      const px = x - s / 2 + i
      const py = y + Math.sin((i / s) * Math.PI * 3) * s * 0.3
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()
  },
  // Sensor / circle with dot
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath(); ctx.arc(x, y, s / 2, 0, Math.PI * 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(x, y, s * 0.1, 0, Math.PI * 2); ctx.fill()
  },
  // PCB trace node
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath(); ctx.moveTo(x - s / 2, y); ctx.lineTo(x, y); ctx.lineTo(x, y - s / 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(x, y, s * 0.12, 0, Math.PI * 2); ctx.fill()
  },
  // Antenna / wireless
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath(); ctx.moveTo(x, y + s / 2); ctx.lineTo(x, y - s * 0.1); ctx.stroke()
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath()
      ctx.arc(x, y - s * 0.1, i * s * 0.15, -Math.PI * 0.8, -Math.PI * 0.2)
      ctx.stroke()
    }
  },
]

interface Particle {
  x: number
  y: number
  vy: number
  iconIdx: number
  size: number
  opacity: number
}

export function FloatingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 50000)
      particles = Array.from({ length: Math.min(count, 30) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: -(0.15 + Math.random() * 0.25),
        iconIdx: Math.floor(Math.random() * ICONS.length),
        size: 12 + Math.random() * 10,
        opacity: 0.04 + Math.random() * 0.06,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = resolvedTheme === "dark"
      const color = isDark ? "rgba(109, 179, 196," : "rgba(74, 124, 138,"

      for (const p of particles) {
        p.y += p.vy
        if (p.y < -p.size * 2) {
          p.y = canvas.height + p.size * 2
          p.x = Math.random() * canvas.width
        }

        ctx.save()
        ctx.strokeStyle = `${color} ${p.opacity})`
        ctx.fillStyle = `${color} ${p.opacity})`
        ctx.lineWidth = 1
        ICONS[p.iconIdx](ctx, p.x, p.y, p.size)
        ctx.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
