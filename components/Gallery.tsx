"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  "/gallery/photo-1.jpg",
  "/gallery/photo-2.jpg",
  "/gallery/photo-3.jpg",
  "/gallery/photo-4.jpg",
  "/gallery/photo-5.jpg",
  "/gallery/photo-6.jpg",
  "/gallery/photo-7.jpg",
];

export default function Gallery() {
  const [cur, setCur] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const total = PHOTOS.length;

  const go = (n: number) => setCur(((n % total) + total) % total);

  useEffect(() => {
    let timer = setInterval(() => setCur((c) => (c + 1) % total), 5000);
    const wrap = wrapRef.current;
    const pause = () => clearInterval(timer);
    const resume = () => {
      timer = setInterval(() => setCur((c) => (c + 1) % total), 5000);
    };
    wrap?.addEventListener("mouseenter", pause);
    wrap?.addEventListener("mouseleave", resume);
    return () => {
      clearInterval(timer);
      wrap?.removeEventListener("mouseenter", pause);
      wrap?.removeEventListener("mouseleave", resume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
  };

  return (
    <section className="section gallery" id="gallery" style={{ background: "transparent" }}>
      <div className="container">
        <div className="center">
          <p className="section-tag">Before &amp; After</p>
          <h2 className="section-h">The Prestige clean.</h2>
          <p className="section-sub">
            Miami&apos;s heat turns neglected bins into health hazards. See what a professional cleaning actually
            looks like.
          </p>
        </div>
        <div style={{ position: "relative", maxWidth: 860, margin: "48px auto 0" }}>
          <div
            id="gWrap"
            ref={wrapRef}
            style={{ overflow: "hidden", borderRadius: 18, boxShadow: "0 8px 48px rgba(10,22,40,.15)" }}
          >
            <div
              id="gTrack"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{
                display: "flex",
                transition: "transform .42s cubic-bezier(.4,0,.2,1)",
                transform: `translateX(-${cur * 100}%)`,
              }}
            >
              {PHOTOS.map((src, i) => (
                <div style={{ flex: "0 0 100%", width: "100%", position: "relative" }} key={src}>
                  <Image
                    src={src}
                    alt={`Before and after bin clean ${i + 1}`}
                    width={860}
                    height={640}
                    style={{ width: "100%", display: "block", maxHeight: 640, objectFit: "cover" }}
                    priority={i === 0}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(10,22,40,.82))", padding: "28px 24px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 3px" }}>Real Job — Prestige Clean</p>
                      <span style={{ color: "rgba(255,255,255,.6)", fontSize: 13 }}>Sanitized · Deodorized · Done</span>
                    </div>
                    <span style={{ color: "rgba(255,255,255,.5)", fontSize: 13, fontWeight: 700, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", padding: "5px 14px", borderRadius: 50 }}>
                      {i + 1} / {total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => go(cur - 1)}
            aria-label="Previous"
            style={{ position: "absolute", left: -22, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(10,22,40,.85)", border: "1px solid rgba(255,255,255,.15)", color: "#fff", fontSize: 24, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, lineHeight: 1 }}
          >
            ‹
          </button>
          <button
            onClick={() => go(cur + 1)}
            aria-label="Next"
            style={{ position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(10,22,40,.85)", border: "1px solid rgba(255,255,255,.15)", color: "#fff", fontSize: 24, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, lineHeight: 1 }}
          >
            ›
          </button>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20, alignItems: "center" }}>
            {PHOTOS.map((_, i) => (
              <div
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === cur ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === cur ? "#1D9E75" : "#d1d5db",
                  cursor: "pointer",
                  transition: "all .3s ease",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
