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
      ctx.beginPath()
      ctx.moveTo(x + offset, y - s / 2)
      ctx.lineTo(x + offset, y - s / 2 - pinLen)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x + offset, y + s / 2)
      ctx.lineTo(x + offset, y + s / 2 + pinLen)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x - s / 2, y + offset)
      ctx.lineTo(x - s / 2 - pinLen, y + offset)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x + s / 2, y + offset)
      ctx.lineTo(x + s / 2 + pinLen, y + offset)
      ctx.stroke()
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
    ctx.beginPath()
    ctx.arc(x, y, s / 2, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x, y, s * 0.1, 0, Math.PI * 2)
    ctx.fill()
  },
  // Network node
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath()
    ctx.arc(x, y, s * 0.15, 0, Math.PI * 2)
    ctx.fill()
    const arms = 4
    for (let i = 0; i < arms; i++) {
      const angle = (i / arms) * Math.PI * 2
      const ex = x + Math.cos(angle) * s * 0.5
      const ey = y + Math.sin(angle) * s * 0.5
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(ex, ey)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(ex, ey, s * 0.08, 0, Math.PI * 2)
      ctx.fill()
    }
  },
  // PCB trace
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath()
    ctx.moveTo(x - s / 2, y)
    ctx.lineTo(x - s * 0.15, y)
    ctx.lineTo(x, y - s * 0.35)
    ctx.lineTo(x + s * 0.15, y)
    ctx.lineTo(x + s / 2, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x - s / 2, y, s * 0.06, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x + s / 2, y, s * 0.06, 0, Math.PI * 2)
    ctx.fill()
  },
  // Antenna / wireless
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    ctx.beginPath()
    ctx.moveTo(x, y + s / 2)
    ctx.lineTo(x, y - s * 0.1)
    ctx.stroke()
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
  vx: number
  vy: number
  iconIdx: number
  size: number
  opacity: number
}

export function FloatingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const initParticles = () => {
      const area = canvas.width * canvas.height
      const count = Math.max(15, Math.min(Math.floor(area / 35000), 50))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.6) * 0.12,
        vy: 0.2 + Math.random() * 0.35,
        iconIdx: Math.floor(Math.random() * ICONS.length),
        size: 14 + Math.random() * 12,
        opacity: 0.06 + Math.random() * 0.08,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = themeRef.current === "dark"
      // Light mode: darker steel-blue icons with higher opacity
      // Dark mode: lighter soft cyan icons with reduced opacity
      const color = isDark ? "140, 200, 215" : "60, 95, 115"
      const opacityMultiplier = isDark ? 0.85 : 1.4

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.y > canvas.height + p.size * 2) {
          p.y = -p.size * 2
          p.x = Math.random() * canvas.width
        }
        if (p.x < -p.size * 2) p.x = canvas.width + p.size
        if (p.x > canvas.width + p.size * 2) p.x = -p.size

        const finalOpacity = p.opacity * opacityMultiplier
        ctx.save()
        ctx.strokeStyle = `rgba(${color}, ${finalOpacity})`
        ctx.fillStyle = `rgba(${color}, ${finalOpacity})`
        ctx.lineWidth = 1
        ICONS[p.iconIdx](ctx, p.x, p.y, p.size)
        ctx.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const handleResize = () => {
      resize()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
