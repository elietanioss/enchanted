'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
  // ─── GSAP hero text reveal — cinematic stagger ────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Skip animations — just show everything immediately
      const els = document.querySelectorAll(
        '.hero-eyebrow, .hero-title-main, .hero-title-accent, .hero-subtitle, .hero-cta'
      )
      els.forEach(el => (el as HTMLElement).style.opacity = '1')
      return
    }

    const tl = gsap.timeline({ delay: 0.3 })

    // Eyebrow line
    tl.from('.hero-eyebrow', {
      opacity: 0,
      y: 24,
      letterSpacing: '0.2em',
      duration: 0.9,
      ease: 'power3.out',
    })

    // "Enchanted" — large dramatic upward sweep
    .from('.hero-title-main', {
      opacity: 0,
      y: 70,
      skewX: 3,
      duration: 1.1,
      ease: 'power4.out',
    }, '-=0.4')

    // "Style" — italic gold word with scale punch
    .from('.hero-title-accent', {
      opacity: 0,
      y: 55,
      scale: 0.88,
      duration: 1.0,
      ease: 'power4.out',
    }, '-=0.7')

    // Subtitle
    .from('.hero-subtitle', {
      opacity: 0,
      y: 22,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.5')

    // CTA button
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      scale: 0.94,
      duration: 0.7,
      ease: 'back.out(1.4)',
    }, '-=0.4')
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #faf9f7 0%, #f5f2ee 50%, #faf9f7 100%)' }}
    >
      {/* ── Ambient breathing orbs ────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Large orb — top-right */}
        <div
          className="hero-orb absolute rounded-full"
          style={{
            width: 'clamp(300px, 50vw, 700px)',
            height: 'clamp(300px, 50vw, 700px)',
            top: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(240,208,96,0.04) 50%, transparent 75%)',
            animationName: 'orbBreath',
            animationDuration: '8s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '0s',
          }}
        />

        {/* Medium orb — bottom-left */}
        <div
          className="hero-orb absolute rounded-full"
          style={{
            width: 'clamp(200px, 35vw, 500px)',
            height: 'clamp(200px, 35vw, 500px)',
            bottom: '-5%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(245,230,208,0.45) 0%, rgba(201,168,76,0.06) 50%, transparent 70%)',
            animationName: 'orbBreath',
            animationDuration: '10s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '-3s',
          }}
        />

        {/* Small orb — centre-left */}
        <div
          className="hero-orb absolute rounded-full"
          style={{
            width: 'clamp(120px, 20vw, 300px)',
            height: 'clamp(120px, 20vw, 300px)',
            top: '35%',
            left: '8%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
            animationName: 'orbBreath',
            animationDuration: '12s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '-5s',
          }}
        />

        {/* Shimmer lines */}
        <div className="hero-shimmer-line absolute" style={{ top: '18%', animationDelay: '0s' }} />
        <div className="hero-shimmer-line absolute" style={{ top: '48%', animationDelay: '-4s' }} />
        <div className="hero-shimmer-line absolute" style={{ top: '72%', animationDelay: '-8s' }} />

        {/* Gold dust particles */}
        {[
          { left: '12%',  top: '20%', delay: '0s',   size: 3 },
          { left: '28%',  top: '65%', delay: '-2s',  size: 2 },
          { left: '45%',  top: '15%', delay: '-4s',  size: 4 },
          { left: '58%',  top: '72%', delay: '-1s',  size: 2 },
          { left: '70%',  top: '30%', delay: '-6s',  size: 3 },
          { left: '82%',  top: '55%', delay: '-3s',  size: 4 },
          { left: '90%',  top: '80%', delay: '-7s',  size: 2 },
          { left: '35%',  top: '88%', delay: '-5s',  size: 3 },
          { left: '8%',   top: '50%', delay: '-1.5s',size: 2 },
          { left: '62%',  top: '10%', delay: '-8s',  size: 3 },
          { left: '78%',  top: '18%', delay: '-2.5s',size: 2 },
          { left: '22%',  top: '42%', delay: '-9s',  size: 4 },
          { left: '50%',  top: '58%', delay: '-3.5s',size: 2 },
          { left: '88%',  top: '38%', delay: '-6.5s',size: 3 },
          { left: '16%',  top: '78%', delay: '-4.5s',size: 2 },
          { left: '40%',  top: '32%', delay: '-7.5s',size: 3 },
          { left: '67%',  top: '92%', delay: '-0.5s',size: 2 },
          { left: '95%',  top: '62%', delay: '-5.5s',size: 4 },
          { left: '3%',   top: '88%', delay: '-11s', size: 2 },
          { left: '55%',  top: '45%', delay: '-10s', size: 3 },
        ].map((p, i) => (
          <div
            key={i}
            className="hero-particle absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: `rgba(201, 168, 76, ${0.35 + (i % 3) * 0.15})`,
              animationName: 'particleDrift',
              animationDuration: `${12 + (i % 5) * 3}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Very subtle bottom gradient to blend into content below ─────── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(250,249,247,0.8))',
        }}
        aria-hidden="true"
      />

      {/* ── Hero content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto select-none pt-16 sm:pt-0">

        {/* Eyebrow */}
        <p className="hero-eyebrow inline-block text-[#c9a84c] text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.45em] uppercase mb-6 sm:mb-8 font-semibold">
          Lebanon&apos;s Premier Fashion Destination
        </p>

        {/* Main title */}
        <h1 className="font-display leading-[0.88] mb-6 sm:mb-8">
          <span className="hero-title-main block text-[clamp(3.5rem,12vw,10rem)] text-foreground">
            Enchanted
          </span>
          <span
            className="hero-title-accent block text-[clamp(3.5rem,12vw,10rem)] italic"
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #f0d060 40%, #c9a84c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 12px rgba(201,168,76,0.25))',
            }}
          >
            Style
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-muted text-base sm:text-lg lg:text-xl max-w-sm sm:max-w-md mx-auto mb-10 sm:mb-12 leading-relaxed font-light">
          Where glamour meets edge. Curated women&apos;s fashion crafted to make every moment unforgettable.
        </p>

        {/* CTA */}
        <a
          href="#catalog"
          data-hover
          className="hero-cta inline-flex items-center gap-3 text-black text-xs sm:text-sm uppercase tracking-[0.2em] font-bold px-10 sm:px-12 py-4 rounded-full transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #f0d060, #c9a84c)',
            backgroundSize: '200% 100%',
            boxShadow: '0 4px 20px rgba(201,168,76,0.3), 0 1px 4px rgba(201,168,76,0.2)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.boxShadow = '0 6px 30px rgba(201,168,76,0.45), 0 2px 8px rgba(201,168,76,0.25)'
            el.style.transform = 'scale(1.05) translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.boxShadow = '0 4px 20px rgba(201,168,76,0.3), 0 1px 4px rgba(201,168,76,0.2)'
            el.style.transform = 'scale(1) translateY(0)'
          }}
        >
          Explore Collection
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(107,107,107,0.5)' }}
        >
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative">
          <div
            className="absolute inset-x-0 top-0 h-full"
            style={{
              background: 'linear-gradient(to bottom, #c9a84c, transparent)',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
          />
        </div>

        <style>{`
          @keyframes scrollLine {
            0%   { transform: translateY(-100%); opacity: 1; }
            100% { transform: translateY(100%);  opacity: 0; }
          }
          @keyframes orbBreath {
            0%, 100% { transform: scale(1);    opacity: 1; }
            50%       { transform: scale(1.08); opacity: 0.75; }
          }
          @keyframes particleDrift {
            0%   { transform: translateY(0px)   translateX(0px);   opacity: 0; }
            10%  { opacity: 1; }
            85%  { opacity: 0.8; }
            100% { transform: translateY(-120px) translateX(20px); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-orb, .hero-shimmer-line, .hero-particle {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
