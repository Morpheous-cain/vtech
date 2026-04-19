"use client"

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#0d0f2e", borderTop: "1px solid rgba(99,102,241,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4f52e8, #818cf8)" }}
              >
                <span style={{ color: "#fff", fontFamily: "DM Serif Display, serif", fontWeight: 700, fontSize: "1rem" }}>V</span>
              </div>
              <span style={{ fontFamily: "DM Serif Display, serif", fontWeight: 400, fontSize: "1.15rem", color: "#e0e7ff" }}>
                VisionTech
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b75a8" }}>
              Nairobi&apos;s premier electronics destination. Shop the latest phones, laptops, and accessories with confidence.
            </p>
            <div className="space-y-2 text-sm" style={{ color: "#6b75a8" }}>
              <div className="flex items-center gap-2"><MapPin size={14} color="#818cf8" /> Nairobi, Kenya</div>
              <div className="flex items-center gap-2"><Phone size={14} color="#818cf8" /> +254 700 000 000</div>
              <div className="flex items-center gap-2"><Mail size={14} color="#818cf8" /> hello@visiontech.co.ke</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#a5b4fc" }}>
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "#6b75a8" }}>
              {["Phones", "Laptops", "Accessories", "New Arrivals", "Deals"].map((l) => (
                <li key={l}>
                  <Link href={`/${l.toLowerCase().replace(" ", "-")}`}
                    style={{ color: "#6b75a8" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a5b4fc")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b75a8")}
                    className="transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#a5b4fc" }}>
              Account
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[["My Account", "/account"], ["Orders", "/orders"], ["Wishlist", "/wishlist"], ["Track Order", "/orders"]].map(([l, href]) => (
                <li key={l}>
                  <Link href={href}
                    style={{ color: "#6b75a8" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a5b4fc")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b75a8")}
                    className="transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(99,102,241,0.15)" }}
        >
          <p className="text-xs" style={{ color: "#4a527a" }}>
            © {new Date().getFullYear()} VisionTech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/200px-M-PESA_LOGO-01.svg.png" alt="M-Pesa" className="h-5 opacity-50 hover:opacity-80 transition-opacity" />
            <div className="flex gap-1">
              {["VISA", "MC"].map((c) => (
                <span key={c} className="text-xs px-2 py-0.5 rounded" style={{ border: "1px solid rgba(99,102,241,0.3)", color: "#6b75a8" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
