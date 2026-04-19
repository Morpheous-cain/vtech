"use client"

/**
 * VisionTech Homepage — White + Indigo redesign.
 * Hero: interactive carousel (3 phone models, no CTA).
 * Expanded product catalog with multiple price tiers.
 */
import React, { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Shield, Truck, Headphones, CreditCard, Star, Zap, Award } from "lucide-react";
import { ProductCard } from "@/components/store/ProductCard";
import type { Product } from "@/lib/types";

const HeroCarousel = dynamic(() => import("@/components/store/HeroCarousel"), {
  loading: () => (
    <div
      className="w-full"
      style={{ height: "100svh", minHeight: "600px", background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)" }}
    />
  ),
});

type ProductWithImage = Product & { imageUrl?: string };

// ── Expanded product catalog ──────────────────────────────────────────────────
const ALL_PRODUCTS: ProductWithImage[] = [
  // ── Premium tier ──
  {
    id: "1", name: "iPhone 16 Pro Max", slug: "iphone-16-pro-max",
    description: "A18 Pro chip, titanium design, 48MP Fusion Camera.",
    category: "Phones", brand: "Apple", price: 199999, compare_price: 220000,
    stock: 12, images: [], specs: { Storage: "256GB", RAM: "8GB" },
    is_featured: true, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=85&fit=crop",
  },
  {
    id: "2", name: "Samsung Galaxy S25 Ultra", slug: "samsung-galaxy-s25-ultra",
    description: "S Pen, 200MP camera, and Galaxy AI features.",
    category: "Phones", brand: "Samsung", price: 179999, compare_price: 195000,
    stock: 8, images: [], specs: { Storage: "512GB", RAM: "12GB" },
    is_featured: true, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop",
  },
  {
    id: "3", name: "MacBook Pro 14\" M4", slug: "macbook-pro-14-m4",
    description: "M4 chip, Liquid Retina XDR display, 18hr battery.",
    category: "Laptops", brand: "Apple", price: 249999, compare_price: 275000,
    stock: 5, images: [], specs: { Processor: "Apple M4", RAM: "16GB" },
    is_featured: true, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=85&fit=crop",
  },
  // ── Mid tier ──
  {
    id: "4", name: "Google Pixel 9 Pro", slug: "pixel-9-pro",
    description: "Magic Eraser, 50MP camera, 7 years of AI updates.",
    category: "Phones", brand: "Google", price: 139999, compare_price: 155000,
    stock: 7, images: [], specs: { Storage: "256GB", RAM: "12GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=85&fit=crop",
  },
  {
    id: "5", name: "Samsung Galaxy A55", slug: "samsung-galaxy-a55",
    description: "120Hz AMOLED, 50MP OIS camera, 5000mAh battery.",
    category: "Phones", brand: "Samsung", price: 64999, compare_price: 72000,
    stock: 18, images: [], specs: { Storage: "128GB", RAM: "8GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=85&fit=crop",
  },
  {
    id: "6", name: "Dell XPS 15 OLED", slug: "dell-xps-15",
    description: "OLED display, Intel Core Ultra 7, 64GB RAM.",
    category: "Laptops", brand: "Dell", price: 189999, compare_price: undefined,
    stock: 3, images: [], specs: { Processor: "Intel Core Ultra 7", RAM: "64GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=85&fit=crop",
  },
  // ── Entry tier ──
  {
    id: "7", name: "iPhone 15", slug: "iphone-15",
    description: "USB-C, Dynamic Island, 48MP main camera.",
    category: "Phones", brand: "Apple", price: 129999, compare_price: 145000,
    stock: 15, images: [], specs: { Storage: "128GB", RAM: "6GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1697543603910-d6d5af5e7af2?w=600&q=85&fit=crop",
  },
  {
    id: "8", name: "Tecno Spark 30 Pro", slug: "tecno-spark-30-pro",
    description: "6.78\" 120Hz display, 64MP camera, 5000mAh.",
    category: "Phones", brand: "Tecno", price: 18999, compare_price: 22000,
    stock: 30, images: [], specs: { Storage: "256GB", RAM: "8GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=85&fit=crop",
  },
  {
    id: "9", name: "AirPods Pro 2nd Gen", slug: "airpods-pro-2",
    description: "Active noise cancellation, USB-C, 30hr battery.",
    category: "Accessories", brand: "Apple", price: 34999, compare_price: 39999,
    stock: 20, images: [], specs: { "Battery Life": "30hrs (case)" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=600&q=85&fit=crop",
  },
  {
    id: "10", name: "Samsung Galaxy Buds3 Pro", slug: "galaxy-buds3-pro",
    description: "360 Audio, ANC, 30hr total playback.",
    category: "Accessories", brand: "Samsung", price: 24999, compare_price: 29999,
    stock: 14, images: [], specs: { "Battery Life": "30hrs (case)" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=85&fit=crop",
  },
  {
    id: "11", name: "Lenovo IdeaPad Slim 5", slug: "lenovo-ideapad-slim5",
    description: "AMD Ryzen 7, 16GB RAM, 15.6\" FHD IPS.",
    category: "Laptops", brand: "Lenovo", price: 79999, compare_price: 92000,
    stock: 9, images: [], specs: { Processor: "AMD Ryzen 7", RAM: "16GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=85&fit=crop",
  },
  {
    id: "12", name: "Xiaomi 14 Ultra", slug: "xiaomi-14-ultra",
    description: "Leica optics, 1\" sensor, Snapdragon 8 Gen 3.",
    category: "Phones", brand: "Xiaomi", price: 119999, compare_price: 135000,
    stock: 6, images: [], specs: { Storage: "512GB", RAM: "16GB" },
    is_featured: false, is_active: true, created_at: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=85&fit=crop",
  },
];

const CATEGORIES = [
  {
    name: "Phones", icon: "📱", href: "/phones", count: "120+ models",
    desc: "From flagship to budget",
    bg: "linear-gradient(135deg, #eef2ff, #c7d2fe)",
  },
  {
    name: "Laptops", icon: "💻", href: "/laptops", count: "80+ models",
    desc: "Work, create, game",
    bg: "linear-gradient(135deg, #f0f9ff, #bae6fd)",
  },
  {
    name: "Accessories", icon: "🎧", href: "/accessories", count: "200+ items",
    desc: "Earbuds, cases & more",
    bg: "linear-gradient(135deg, #fdf4ff, #e9d5ff)",
  },
];

const WHY_US = [
  { icon: <CreditCard size={22} />, title: "M-Pesa & Card", desc: "Pay instantly with M-Pesa STK Push or Visa/Mastercard" },
  { icon: <Truck size={22} />, title: "Fast Delivery", desc: "Same-day delivery across Nairobi CBD and suburbs" },
  { icon: <Shield size={22} />, title: "Genuine Products", desc: "100% authentic products with manufacturer warranty" },
  { icon: <Headphones size={22} />, title: "Expert Support", desc: "Dedicated support team available 7 days a week" },
];

const PRICE_TIERS = [
  { label: "Under KES 30K", range: "Budget", icon: <Zap size={18} />, href: "/phones?max=30000", color: "#10b981" },
  { label: "KES 30K–100K", range: "Mid-range", icon: <Star size={18} />, href: "/phones?min=30000&max=100000", color: "#4f52e8" },
  { label: "KES 100K+", range: "Premium", icon: <Award size={18} />, href: "/phones?min=100000", color: "#f59e0b" },
];

export default function HomePage() {
  const featured = ALL_PRODUCTS.filter((p) => p.is_featured);
  const phones = ALL_PRODUCTS.filter((p) => p.category === "Phones").slice(0, 4);
  const laptops = ALL_PRODUCTS.filter((p) => p.category === "Laptops");
  const accessories = ALL_PRODUCTS.filter((p) => p.category === "Accessories");

  return (
    <div style={{ background: "#fff" }}>

      {/* ── Hero Carousel ──────────────────────────────────────────────── */}
      <Suspense fallback={
        <div style={{ height: "100svh", minHeight: "600px", background: "linear-gradient(135deg, #eef2ff, #e0e7ff)" }} />
      }>
        <HeroCarousel />
      </Suspense>

      {/* ── Price Tier Shortcuts ───────────────────────────────────────── */}
      <section className="py-8" style={{ background: "#f8f9fc", borderBottom: "1px solid #e0e7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium" style={{ color: "#6b75a8" }}>Shop by budget:</p>
            <div className="flex flex-wrap gap-3">
              {PRICE_TIERS.map((tier) => (
                <Link key={tier.label} href={tier.href}>
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200"
                    style={{
                      border: "1.5px solid #e0e7ff",
                      background: "#fff",
                      color: "#1e2340",
                      cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#4f52e8";
                      (e.currentTarget as HTMLElement).style.background = "#eef2ff";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#e0e7ff";
                      (e.currentTarget as HTMLElement).style.background = "#fff";
                    }}
                  >
                    <span style={{ color: tier.color }}>{tier.icon}</span>
                    <div>
                      <p className="text-xs font-bold leading-none" style={{ color: "#1e2340" }}>{tier.range}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#6b75a8" }}>{tier.label}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            Browse
          </p>
          <h2
            style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#0d0f2e", letterSpacing: "-0.01em" }}
          >
            Shop by Category
          </h2>
          <p className="mt-2 text-sm" style={{ color: "#6b75a8" }}>Find exactly what you&apos;re looking for</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div
                className="rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 cursor-pointer group"
                style={{ background: cat.bg, border: "1px solid rgba(99,102,241,0.12)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(79,82,232,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  {cat.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: "Sora, sans-serif", color: "#0d0f2e" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs mb-1" style={{ color: "#4a527a" }}>{cat.desc}</p>
                  <p className="text-xs font-semibold" style={{ color: "#4f52e8" }}>{cat.count}</p>
                </div>
                <ArrowRight size={18} color="#4f52e8" className="shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6366f1" }}>
                Hand-picked
              </p>
              <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0d0f2e", letterSpacing: "-0.01em" }}>
                Featured Products
              </h2>
            </div>
            <Link
              href="/phones"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors shrink-0 ml-4"
              style={{ color: "#4f52e8" }}
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Phones Grid ───────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6366f1" }}>All Brands</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0d0f2e" }}>
              Phones — Every Budget
            </h2>
          </div>
          <Link href="/phones" className="flex items-center gap-1.5 text-sm font-medium shrink-0 ml-4" style={{ color: "#4f52e8" }}>
            All phones <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phones.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Deal Banner ───────────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1c5e 0%, #2d30a0 50%, #4f52e8 100%)", padding: "2.5rem 2rem" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#a5b4fc" }}>
                Limited Time
              </p>
              <h2
                className="mb-2 leading-tight"
                style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "#fff" }}
              >
                Up to 20% off Laptops
              </h2>
              <p className="text-sm mb-0" style={{ color: "#c7d2fe" }}>
                MacBook Pro, Dell XPS, Lenovo — premium machines at Nairobi prices.
              </p>
            </div>
            <Link href="/laptops">
              <button
                className="whitespace-nowrap px-8 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "#fff", color: "#4f52e8" }}
              >
                Shop Laptops →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Laptops ───────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6366f1" }}>Work & Create</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0d0f2e" }}>
              Laptops
            </h2>
          </div>
          <Link href="/laptops" className="flex items-center gap-1.5 text-sm font-medium shrink-0 ml-4" style={{ color: "#4f52e8" }}>
            All laptops <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {laptops.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Accessories ───────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6366f1" }}>Complete Your Setup</p>
              <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0d0f2e" }}>
                Accessories
              </h2>
            </div>
            <Link href="/accessories" className="flex items-center gap-1.5 text-sm font-medium shrink-0 ml-4" style={{ color: "#4f52e8" }}>
              All accessories <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {accessories.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Why VisionTech ────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#0d0f2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>Our Promise</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#ffffff" }}>
              Why Shop at VisionTech?
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#6b75a8" }}>Nairobi&apos;s most trusted electronics retailer</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "Sora, sans-serif", color: "#e0e7ff" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed hidden sm:block" style={{ color: "#6b75a8" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
