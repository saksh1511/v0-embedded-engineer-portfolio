"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

// ---------- Icon drawing functions ----------
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
    ctx.arc(x, y, s * 0.12, 0, Math.PI * 2)
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
  // Resistor zig-zag
  (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    const hw = s * 0.5
    ctx.beginPath()
    ctx.moveTo(x - hw, y)
    ctx.lineTo(x - hw * 0.6, y)
    const steps = 4
    const segW = (hw * 1.2) / steps
    for (let i = 0; i < steps; i++) {
      const sx = x - hw * 0.6 + i * segW
      const dir = i % 2 === 0 ? -1 : 1
      ctx.lineTo(sx + segW / 2, y + dir * s * 0.2)
      ctx.lineTo(sx + segW, y)
    }
    ctx.lineTo(x + hw, y)
    ctx.stroke()
  },
]

// ---------- Particle type ----------
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  iconIdx: number
  size: number
  baseOpacity: number
  // Each particle also gets a slight rotation for visual variety
  rotation: number
  rotationSpeed: number
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
      // Slightly more particles for richer feel
      const count = Math.max(20, Math.min(Math.floor(area / 28000), 60))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Slight diagonal drift (left-leaning) + downward
        vx: -0.08 + Math.random() * -0.12,
        vy: 0.18 + Math.random() * 0.32,
        iconIdx: Math.floor(Math.random() * ICONS.length),
        // Varied sizes for depth: 16px to 32px
        size: 16 + Math.random() * 16,
        // Higher base opacity range so the multiplier can make them clearly visible
        baseOpacity: 0.12 + Math.random() * 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = themeRef.current === "dark"

      // LIGHT MODE: dark graphite/steel-blue with high contrast
      // DARK MODE: soft muted cyan with gentler presence
      const color = isDark ? "140, 195, 210" : "55, 85, 105"
      // Light mode gets a BIG opacity boost so icons are clearly visible
      // Dark mode stays subtle
      const opacityMultiplier = isDark ? 1.0 : 2.5
      const lineW = isDark ? 1.2 : 1.8

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed

        // Wrap around edges
        if (p.y > canvas.height + p.size * 2) {
          p.y = -p.size * 2
          p.x = Math.random() * canvas.width
        }
        if (p.x < -p.size * 2) p.x = canvas.width + p.size
        if (p.x > canvas.width + p.size * 2) p.x = -p.size

        const finalOpacity = Math.min(p.baseOpacity * opacityMultiplier, 0.45)

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        // LIGHT MODE ONLY: add a subtle soft shadow behind each icon
        // This separates the icons from the white background
        if (!isDark) {
          ctx.shadowColor = "rgba(55, 85, 105, 0.15)"
          ctx.shadowBlur = 6
          ctx.shadowOffsetX = 1
          ctx.shadowOffsetY = 2
        }

        ctx.strokeStyle = `rgba(${color}, ${finalOpacity})`
        ctx.fillStyle = `rgba(${color}, ${finalOpacity})`
        ctx.lineWidth = lineW
        ICONS[p.iconIdx](ctx, 0, 0, p.size)
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

    // Re-init when page height changes (e.g. accordion expansion)
    const observer = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight
    })
    observer.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
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
