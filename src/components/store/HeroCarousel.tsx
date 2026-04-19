"use client";
/**
 * HeroCarousel — interactive product showcase for the 3 hero phone models.
 * White + indigo aesthetic. Swipe / click arrows / dot nav.
 * No primary CTA — pure visual showcase.
 */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    tagline: "Titanium. Powerful. Beautiful.",
    detail: "A18 Pro chip · 48MP Fusion Camera · ProMotion 120Hz",
    price: "KES 199,999",
    color: "#1e2340",
    accent: "#4f52e8",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=90&fit=crop",
    badge: "NEW",
    bgGradient: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #c7d2fe 100%)",
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    tagline: "Intelligence meets artistry.",
    detail: "S Pen · 200MP Camera · Galaxy AI · 5000mAh",
    price: "KES 179,999",
    color: "#1e2340",
    accent: "#4f52e8",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=90&fit=crop",
    badge: "HOT",
    bgGradient: "linear-gradient(135deg, #f0f4ff 0%, #dde5ff 40%, #b8c5fc 100%)",
  },
  {
    id: 3,
    brand: "Google",
    name: "Pixel 9 Pro",
    tagline: "Pure Google. Pure magic.",
    detail: "Tensor G4 · Magic Eraser · 7yr AI updates · 50MP",
    price: "KES 139,999",
    color: "#1e2340",
    accent: "#4f52e8",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=90&fit=crop",
    badge: "EDITOR'S PICK",
    bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #c4b5fd 100%)",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setTransitioning(false), 500);
  }, [transitioning]);

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 5000);
  };

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px", background: slide.bgGradient, transition: "background 0.6s ease" }}
      aria-label="Product showcase carousel"
    >
      {/* Subtle indigo mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative geometric lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4f52e8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating accent circles */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)" }} />

      {/* Main content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 items-center">

          {/* Left — text copy */}
          <div
            key={`text-${current}`}
            className="text-center lg:text-left pt-20 lg:pt-0 order-2 lg:order-1"
            style={{ animation: "fade-slide-in 0.5s ease both" }}
          >
            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "#4f52e8", color: "#fff", letterSpacing: "0.12em" }}
              >
                {slide.badge}
              </span>
              <span className="text-sm font-medium" style={{ color: "#6b75a8" }}>
                {slide.brand}
              </span>
            </div>

            <h1
              className="leading-none mb-3"
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                color: "#0d0f2e",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              {slide.name}
            </h1>

            <p
              className="mb-3 text-lg font-light italic"
              style={{ fontFamily: "DM Serif Display, serif", color: "#4a527a" }}
            >
              {slide.tagline}
            </p>

            <p className="text-sm mb-6" style={{ color: "#6b75a8" }}>{slide.detail}</p>

            <div
              className="inline-block text-2xl font-bold mb-8"
              style={{ color: "#4f52e8", fontFamily: "Sora, sans-serif" }}
            >
              {slide.price}
            </div>

            {/* Slide counter */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? "active" : ""}`}
                  onClick={() => { goTo(i); resetAuto(); }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="ml-2 text-xs font-medium" style={{ color: "#9da6c8" }}>
                {current + 1} / {SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right — phone image */}
          <div
            key={`img-${current}`}
            className="relative flex items-center justify-center order-1 lg:order-2"
            style={{ animation: "img-float-in 0.55s cubic-bezier(0.34,1.56,0.64,1) both" }}
            onMouseDown={(e) => setDragStart(e.clientX)}
            onMouseUp={(e) => {
              if (dragStart !== null) {
                const diff = dragStart - e.clientX;
                if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
                setDragStart(null);
              }
            }}
            onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (dragStart !== null) {
                const diff = dragStart - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
                setDragStart(null);
              }
            }}
          >
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Phone image */}
            <div
              className="relative"
              style={{
                height: "clamp(300px, 55vh, 520px)",
                aspectRatio: "9/19",
                filter: "drop-shadow(0 32px 64px rgba(30,35,64,0.22)) drop-shadow(0 8px 24px rgba(79,82,232,0.18))",
              }}
            >
              <img
                src={slide.imageUrl}
                alt={slide.name}
                className="w-full h-full object-cover rounded-[2.5rem]"
                style={{ userSelect: "none", WebkitUserDrag: "none" } as React.CSSProperties}
                draggable={false}
              />
              {/* Phone frame overlay */}
              <div
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  boxShadow: "inset 0 0 0 1px rgba(79,82,232,0.1)",
                }}
              />
            </div>

            {/* Floating spec chip */}
            <div
              className="absolute bottom-8 left-4 rounded-xl px-3 py-2 hidden sm:block"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 4px 20px rgba(30,35,64,0.1)",
              }}
            >
              <p className="text-xs font-semibold" style={{ color: "#4f52e8" }}>Starting from</p>
              <p className="text-sm font-bold" style={{ color: "#0d0f2e" }}>{slide.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => { prev(); resetAuto(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(99,102,241,0.2)",
          boxShadow: "0 2px 12px rgba(30,35,64,0.1)",
          color: "#4f52e8",
        }}
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => { next(); resetAuto(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(99,102,241,0.2)",
          boxShadow: "0 2px 12px rgba(30,35,64,0.1)",
          color: "#4f52e8",
        }}
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))" }}
      />

      <style>{`
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes img-float-in {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
