"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";
import { subscribeReviews, type Review } from "@/lib/reviews";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => subscribeReviews(setReviews), []);

  const avg = reviews.length ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1) : "5";

  return (
    <>
      <a href={BOOKING_URL} className="float-book">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book Now — Instant
      </a>
      <div
        id="floatReviewWrap"
        onClick={() => document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 72,
          right: 24,
          zIndex: 9998,
          background: "var(--navy)",
          border: "1px solid rgba(255,255,255,.15)",
          color: "#F5A623",
          padding: "8px 14px",
          borderRadius: 50,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,.25)",
          opacity: visible ? 1 : 0,
          transition: "opacity .3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: "Inter,sans-serif" }}>
          <span style={{ fontSize: 15 }}>★</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginLeft: 2 }}>{avg}</span>
        </div>
      </div>
    </>
  );
}
