"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";

const CATEGORIES = ["Phones", "Laptops", "Accessories"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #e0e7ff" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(79,82,232,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #4f52e8, #818cf8)" }}
            >
              <span style={{ color: "#fff", fontFamily: "DM Serif Display, serif", fontWeight: 700, fontSize: "1rem" }}>V</span>
            </div>
            <span style={{ fontFamily: "DM Serif Display, serif", fontWeight: 400, fontSize: "1.1rem", color: "#1e2340", letterSpacing: "-0.01em" }}>
              VisionTech
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/${cat.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#4a527a" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4f52e8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4a527a")}
              >
                {cat}
              </Link>
            ))}
            <Link
              href="/compare"
              className="text-sm font-medium transition-colors"
              style={{ color: "#4a527a" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4f52e8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a527a")}
            >
              Compare
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#4a527a" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eef2ff"; (e.currentTarget as HTMLElement).style.color = "#4f52e8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#4a527a"; }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link
              href="/cart"
              className="p-2 rounded-lg transition-colors relative"
              style={{ color: "#4a527a" }}
            >
              <ShoppingCart size={18} />
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 text-white text-xs font-bold rounded-full flex items-center justify-center"
                style={{ background: "#4f52e8", fontSize: "0.6rem" }}
              >
                0
              </span>
            </Link>

            <Link
              href="/auth"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ml-2"
              style={{ background: "#4f52e8", color: "#fff" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#3d40c8"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#4f52e8"}
            >
              <User size={14} /> Sign In
            </Link>

            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#4a527a" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3 animate-slide-up">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search phones, laptops, accessories..."
                className="flex-1 px-4 py-2 rounded-lg border text-sm outline-none"
                style={{ border: "1.5px solid #c7d2fe", background: "#f8f9fc", color: "#1e2340" }}
              />
              <button type="submit" className="btn-indigo">Search</button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t pb-4 pt-3 space-y-1 animate-slide-up" style={{ borderColor: "#e0e7ff" }}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/${cat.toLowerCase()}`}
                className="block px-2 py-2.5 text-sm font-medium rounded-lg"
                style={{ color: "#343a60" }}
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </Link>
            ))}
            <Link href="/compare" className="block px-2 py-2.5 text-sm font-medium" style={{ color: "#343a60" }} onClick={() => setMobileOpen(false)}>
              Compare
            </Link>
            <Link href="/auth" className="block px-2 py-2.5 text-sm font-semibold" style={{ color: "#4f52e8" }} onClick={() => setMobileOpen(false)}>
              Sign In / Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
