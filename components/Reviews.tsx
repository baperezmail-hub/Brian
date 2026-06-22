"use client";

import { useEffect, useState } from "react";
import { addReview, subscribeReviews, type Review } from "@/lib/reviews";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [hood, setHood] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [msg, setMsg] = useState<{ text: string; color: string } | null>(null);

  useEffect(() => subscribeReviews(setReviews), []);

  const avg = reviews.length ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1) : null;
  const avgRounded = avg ? Math.round(Number(avg)) : 0;

  const submit = async () => {
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedName) {
      setMsg({ text: "Please enter your name.", color: "#e74c3c" });
      return;
    }
    if (!stars) {
      setMsg({ text: "Please select a star rating.", color: "#e74c3c" });
      return;
    }
    if (!trimmedText) {
      setMsg({ text: "Please write a review.", color: "#e74c3c" });
      return;
    }
    await addReview({ name: trimmedName, stars, text: trimmedText, hood: hood.trim() });
    setName("");
    setText("");
    setHood("");
    setStars(0);
    setMsg({ text: "Thank you! Your review has been posted.", color: "var(--teal)" });
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <section className="section" id="reviews" style={{ background: "transparent" }}>
      <div className="container">
        <div className="center">
          <p className="section-tag">Reviews</p>
          <h2 className="section-h">What our customers say.</h2>
          <p className="section-sub">Real reviews from real Miami-Dade customers. No filters, no fakes.</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "36px 0 48px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1 }}>{avg ?? "–"}</div>
            <div style={{ color: "#F5A623", fontSize: "1.4rem", letterSpacing: 2, margin: "4px 0" }}>
              {avg ? "★".repeat(avgRounded) + "☆".repeat(5 - avgRounded) : "☆☆☆☆☆"}
            </div>
            <div style={{ fontSize: 13, color: "var(--g500)" }}>
              {reviews.length} review{reviews.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
          {reviews.length === 0 ? (
            <p style={{ color: "var(--g500)", fontSize: 14, textAlign: "center", gridColumn: "1 / -1" }}>
              No reviews yet — be the first!
            </p>
          ) : (
            reviews
              .slice()
              .reverse()
              .map((r, i) => (
                <div
                  key={i}
                  style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "var(--rl)", padding: "22px 24px" }}
                >
                  <div style={{ color: "#F5A623", fontSize: "1.1rem", letterSpacing: 1, marginBottom: 10 }}>
                    {"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.82)", lineHeight: 1.65, margin: "0 0 14px" }}>{r.text}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--teal)" }}>
                    {r.name}
                    {r.hood ? ` · ${r.hood}` : ""}
                  </div>
                </div>
              ))
          )}
        </div>

        <div style={{ maxWidth: 560, margin: "0 auto", background: "var(--off-white)", border: "1px solid var(--g200)", borderRadius: "var(--rl)", padding: 32 }}>
          <h3 style={{ fontFamily: "Inter,sans-serif", fontSize: "1.15rem", fontWeight: 800, color: "var(--navy)", margin: "0 0 6px" }}>
            Leave a Review
          </h3>
          <p style={{ fontSize: 13, color: "var(--g500)", margin: "0 0 24px" }}>Had a clean done? We&apos;d love to hear from you.</p>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Your Name *</label>
            <input
              type="text"
              placeholder="e.g. Maria R."
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--g200)", borderRadius: "var(--r)", fontSize: 14, fontFamily: "Inter,sans-serif", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 8 }}>Rating *</label>
            <div style={{ display: "flex", gap: 6, fontSize: "2rem", cursor: "pointer" }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} onClick={() => setStars(n)} style={{ color: n <= stars ? "#F5A623" : "#d1d5db", transition: "color .15s" }}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Neighborhood (optional)</label>
            <input
              type="text"
              placeholder="e.g. Kendall West"
              value={hood}
              onChange={(e) => setHood(e.target.value)}
              style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--g200)", borderRadius: "var(--r)", fontSize: 14, fontFamily: "Inter,sans-serif", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Your Review *</label>
            <textarea
              rows={4}
              placeholder="Tell others about your experience..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--g200)", borderRadius: "var(--r)", fontSize: 14, fontFamily: "Inter,sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }}
            />
          </div>

          <button
            onClick={submit}
            style={{ width: "100%", background: "var(--teal)", color: "#fff", border: "none", padding: 14, borderRadius: "var(--r)", fontSize: 15, fontWeight: 700, fontFamily: "Inter,sans-serif", cursor: "pointer" }}
          >
            Post Review
          </button>
          {msg && (
            <div style={{ marginTop: 14, fontSize: 13, textAlign: "center", color: msg.color }}>{msg.text}</div>
          )}
        </div>
      </div>
    </section>
  );
}
