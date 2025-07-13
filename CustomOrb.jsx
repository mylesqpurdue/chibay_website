import { useEffect, useRef } from 'react'

const CustomOrb = ({ className, style }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const animate = () => {
      const time = Date.now() * 0.001
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create gradient
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      )
      
      // Animated colors
      const hue1 = (time * 20) % 360
      const hue2 = (time * 30 + 120) % 360
      const hue3 = (time * 25 + 240) % 360

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, 0.8)`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 70%, 50%, 0.6)`)
      gradient.addColorStop(1, `hsla(${hue3}, 70%, 40%, 0.4)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Add floating orbs
      for (let i = 0; i < 5; i++) {
        const x = width / 2 + Math.sin(time + i) * (width / 4)
        const y = height / 2 + Math.cos(time * 0.7 + i) * (height / 4)
        const radius = 20 + Math.sin(time * 2 + i) * 10

        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        orbGradient.addColorStop(0, `hsla(${(hue1 + i * 60) % 360}, 80%, 70%, 0.6)`)
        orbGradient.addColorStop(1, `hsla(${(hue1 + i * 60) % 360}, 80%, 70%, 0)`)

        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        ...style
      }}
    />
  )
}

export default CustomOrb

