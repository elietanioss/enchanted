'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current!

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    // Gold material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a84c,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1,
    })
    const darkGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0x9a7a35,
      metalness: 0.95,
      roughness: 0.05,
    })

    // Create floating shapes
    const shapes: THREE.Mesh[] = []
    const geometries = [
      new THREE.OctahedronGeometry(0.25),
      new THREE.IcosahedronGeometry(0.2),
      new THREE.TetrahedronGeometry(0.22),
    ]

    for (let i = 0; i < 14; i++) {
      const geo = geometries[i % 3]
      const mat = i % 3 === 0 ? goldMaterial : darkGoldMaterial
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 1
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      scene.add(mesh)
      shapes.push(mesh)
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xc9a84c, 0.3)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xf0d060, 2)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    const pointLight1 = new THREE.PointLight(0xc9a84c, 3, 20)
    pointLight1.position.set(-5, 3, 2)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 15)
    pointLight2.position.set(5, -3, 2)
    scene.add(pointLight2)

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.003 + i * 0.0002
        shape.rotation.y += 0.004 + i * 0.0001
        shape.position.y += Math.sin(elapsed * 0.5 + i) * 0.001
      })

      // Smooth camera movement toward mouse
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseRef.current.y * 0.3 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  // GSAP hero text reveal
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' })
      .from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.3')
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]/80 z-[1]" />

      {/* Hero content */}
      <div className="relative z-[2] text-center px-4 max-w-4xl mx-auto">
        <p className="hero-eyebrow text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
          Lebanon&apos;s Premier Fashion Destination
        </p>
        <h1 className="hero-title font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] mb-6">
          Enchanted
          <span className="block text-gold-gradient italic">Style</span>
        </h1>
        <p className="hero-subtitle text-white/60 text-lg lg:text-xl max-w-md mx-auto mb-10 leading-relaxed">
          Where glamour meets edge. Curated women&apos;s fashion crafted to make every moment unforgettable.
        </p>
        <a
          href="#catalog"
          data-hover
          className="hero-cta inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#f0d060] text-black text-sm uppercase tracking-[0.2em] font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
        >
          Explore Collection
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-[#c9a84c]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
