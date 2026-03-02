'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll(
        '.hero-eyebrow, .hero-title-main, .hero-title-accent, .hero-subtitle, .hero-cta'
      ).forEach(el => ((el as HTMLElement).style.opacity = '1'))
      return
    }

    const tl = gsap.timeline({ delay: 0.2 })
    tl.from('.hero-eyebrow', { opacity: 0, y: 24, letterSpacing: '0.2em', duration: 0.9, ease: 'power3.out' })
      .from('.hero-title-main', { opacity: 0, y: 70, skewX: 3, duration: 1.1, ease: 'power4.out' }, '-=0.4')
      .from('.hero-title-accent', { opacity: 0, y: 55, scale: 0.88, duration: 1.0, ease: 'power4.out' }, '-=0.7')
      .from('.hero-subtitle', { opacity: 0, y: 22, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .from('.hero-cta', { opacity: 0, y: 20, scale: 0.94, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.4')
  }, [])

  const diamonds = [
    { left: '8%',  top: '18%', size: 10, delay: '0s',    dur: '4s'  },
    { left: '18%', top: '72%', size: 7,  delay: '-1.5s',  dur: '5s'  },
    { left: '32%', top: '12%', size: 12, delay: '-3s',   dur: '6s'  },
    { left: '48%', top: '82%', size: 8,  delay: '-0.8s',  dur: '4.5s'},
    { left: '62%', top: '22%', size: 10, delay: '-4s',   dur: '5.5s'},
    { left: '72%', top: '65%', size: 7,  delay: '-2s',   dur: '4s'  },
    { left: '85%', top: '30%', size: 12, delay: '-5s',   dur: '6s'  },
    { left: '92%', top: '75%', size: 8,  delay: '-1s',   dur: '5s'  },
    { left: '25%', top: '45%', size: 6,  delay: '-6s',   dur: '4s'  },
    { left: '55%', top: '50%', size: 9,  delay: '-3.5s', dur: '5.5s'},
    { left: '78%', top: '48%', size: 6,  delay: '-2.5s', dur: '4.5s'},
    { left: '42%', top: '35%', size: 11, delay: '-7s',   dur: '6s'  },
  ]

  const particles = [
    { left: '10%', top: '25%', delay: '0s',    size: 5 },
    { left: '22%', top: '60%', delay: '-2s',   size: 4 },
    { left: '38%', top: '15%', delay: '-4s',   size: 6 },
    { left: '52%', top: '70%', delay: '-1s',   size: 4 },
    { left: '65%', top: '28%', delay: '-6s',   size: 5 },
    { left: '80%', top: '55%', delay: '-3s',   size: 6 },
    { left: '90%', top: '20%', delay: '-5s',   size: 4 },
    { left: '15%', top: '85%', delay: '-7s',   size: 5 },
    { left: '70%', top: '85%', delay: '-8s',   size: 4 },
    { left: '45%', top: '42%', delay: '-9s',   size: 6 },
    { left: '5%',  top: '50%', delay: '-1.5s', size: 5 },
    { left: '58%', top: '8%',  delay: '-3.5s', size: 4 },
  ]

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #faf9f7 0%, #f5f2ee 45%, #fdefd8 80%, #faf9f7 100%)' }}
    >
      {/* ── Brand ambient layer ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ overflow: 'hidden' }}>

        {/* Orb 1 — top-right warm gold */}
        <div className="hero-orb absolute rounded-full" style={{
          width: 'clamp(380px, 55vw, 780px)',
          height: 'clamp(380px, 55vw, 780px)',
          top: '-20%', right: '-12%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(240,208,96,0.10) 45%, transparent 72%)',
          filter: 'blur(40px)',
          animationName: 'orbBreath',
          animationDuration: '8s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '0s',
        }} />

        {/* Orb 2 — bottom-left warm rose-gold */}
        <div className="hero-orb absolute rounded-full" style={{
          width: 'clamp(280px, 40vw, 560px)',
          height: 'clamp(280px, 40vw, 560px)',
          bottom: '-8%', left: '-10%',
          background: 'radial-gradient(circle, rgba(245,210,170,0.35) 0%, rgba(201,168,76,0.14) 50%, transparent 72%)',
          filter: 'blur(50px)',
          animationName: 'orbBreath',
          animationDuration: '11s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '-4s',
        }} />

        {/* Orb 3 — centre accent */}
        <div className="hero-orb absolute rounded-full" style={{
          width: 'clamp(160px, 24vw, 360px)',
          height: 'clamp(160px, 24vw, 360px)',
          top: '30%', left: '5%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.16) 0%, transparent 68%)',
          filter: 'blur(30px)',
          animationName: 'orbBreath',
          animationDuration: '13s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '-6s',
        }} />

        {/* Diagonal silk light sweeps */}
        <div className="hero-silk-sweep absolute" style={{ top: '-10%', animationDelay: '0s' }} />
        <div className="hero-silk-sweep absolute" style={{ top: '35%',  animationDelay: '-8s' }} />
        <div className="hero-silk-sweep absolute" style={{ top: '70%',  animationDelay: '-16s' }} />

        {/* Diamond sparkles */}
        {diamonds.map((d, i) => (
          <div
            key={i}
            className="hero-diamond absolute"
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              animationName: 'diamondSparkle',
              animationDuration: d.dur,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: d.delay,
            }}
          />
        ))}

        {/* Gold dust particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="hero-particle absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: `rgba(201,168,76,${0.55 + (i % 3) * 0.15})`,
              boxShadow: `0 0 ${p.size * 2}px rgba(201,168,76,0.4)`,
              animationName: 'particleDrift',
              animationDuration: `${11 + (i % 5) * 3}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${-i * 0.9}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,249,247,0.9))' }}
        aria-hidden="true"
      />

      {/* ── Hero content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto select-none pt-16 sm:pt-0">

        {/* Eyebrow */}
        <p className="hero-eyebrow inline-flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.45em] uppercase mb-6 sm:mb-8 font-semibold"
          style={{ color: '#c9a84c' }}>
          <span className="w-6 h-px bg-gold/60" />
          Lebanon&apos;s Premier Fashion Destination
          <span className="w-6 h-px bg-gold/60" />
        </p>

        {/* Main title */}
        <h1 className="font-display leading-[0.9] mb-6 sm:mb-8">
          <span className="hero-title-main block text-[clamp(3.5rem,12vw,10rem)] text-foreground">
            Enchanted
          </span>
          {/* paddingBottom fixes the italic "y" descender clipping with gradient text */}
          <span
            className="hero-title-accent block text-[clamp(3.5rem,12vw,10rem)] italic"
            style={{
              paddingBottom: '0.15em',
              background: 'linear-gradient(135deg, #9a7a35 0%, #c9a84c 30%, #f0d060 55%, #c9a84c 80%, #9a7a35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 16px rgba(201,168,76,0.35))',
              display: 'block',
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
          className="hero-cta inline-flex items-center gap-3 text-black text-xs sm:text-sm uppercase tracking-[0.22em] font-bold px-10 sm:px-14 py-4 rounded-full transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #c9a84c 0%, #f0d060 50%, #c9a84c 100%)',
            backgroundSize: '200% 100%',
            boxShadow: '0 4px 24px rgba(201,168,76,0.35), 0 1px 4px rgba(201,168,76,0.2)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.boxShadow = '0 8px 36px rgba(201,168,76,0.5), 0 2px 8px rgba(201,168,76,0.3)'
            el.style.transform = 'scale(1.05) translateY(-2px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.boxShadow = '0 4px 24px rgba(201,168,76,0.35), 0 1px 4px rgba(201,168,76,0.2)'
            el.style.transform = 'scale(1) translateY(0)'
          }}
        >
          Explore Collection
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(107,107,107,0.6)' }}>
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
      </div>

      {/* ── Keyframes ────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
        @keyframes silkSweep {
          0%   { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 0.7; }
          100% { transform: translateX(110vw) skewX(-12deg); opacity: 0; }
        }
        .hero-silk-sweep {
          left: 0;
          width: 120px;
          height: 100vh;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(201,168,76,0.07) 30%,
            rgba(240,208,96,0.18) 50%,
            rgba(201,168,76,0.07) 70%,
            transparent 100%
          );
          animation: silkSweep 18s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes diamondSparkle {
          0%, 100% { transform: rotate(45deg) scale(0);   opacity: 0; }
          20%       { transform: rotate(45deg) scale(1.2); opacity: 0.9; }
          40%       { transform: rotate(45deg) scale(0.8); opacity: 0.6; }
          60%       { transform: rotate(45deg) scale(1);   opacity: 0.8; }
          80%       { transform: rotate(45deg) scale(0.3); opacity: 0.2; }
        }
        .hero-diamond {
          background: linear-gradient(135deg, #f0d060, #c9a84c);
          box-shadow: 0 0 8px rgba(201,168,76,0.6), 0 0 20px rgba(201,168,76,0.25);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-orb, .hero-silk-sweep, .hero-diamond, .hero-particle {
            animation: none !important;
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
