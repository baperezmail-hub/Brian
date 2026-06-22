"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Icon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

export default function Services() {
  const [plan, setPlan] = useState<"onetime" | "monthly">("onetime");

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="center">
          <p className="section-tag">Pricing</p>
          <h2 className="section-h">Simple. Transparent. Fair.</h2>
          <p className="section-sub">
            One-time or monthly — full pressure wash, sanitization, and deodorizing at your door. No cancellation
            fees, no fine print.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 36px" }}>
          <div style={{ background: "var(--off-white)", border: "1px solid var(--g200)", borderRadius: 50, padding: 4, display: "flex", gap: 4 }}>
            <button
              onClick={() => setPlan("onetime")}
              style={{
                padding: "10px 28px", borderRadius: 50, border: "none", fontFamily: "Inter,sans-serif",
                fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .25s",
                background: plan === "onetime" ? "var(--navy)" : "transparent",
                color: plan === "onetime" ? "#fff" : "var(--g500)",
              }}
            >
              One-Time
            </button>
            <button
              onClick={() => setPlan("monthly")}
              style={{
                padding: "10px 28px", borderRadius: 50, border: "none", fontFamily: "Inter,sans-serif",
                fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .25s",
                background: plan === "monthly" ? "var(--navy)" : "transparent",
                color: plan === "monthly" ? "#fff" : "var(--g500)",
              }}
            >
              Monthly Plan
            </button>
          </div>
        </div>

        {plan === "onetime" && (
          <div id="panelOnetime">
            <div className="services-grid">
              <div className="svc-card plain">
                <div className="svc-icon"><Icon /></div>
                <h3>1 Bin</h3>
                <div className="svc-price"><sup>$</sup>25<sub>/visit</sub></div>
                <p className="svc-tag">One-time clean · No subscription</p>
                <div className="svc-divider"></div>
                <ul className="svc-features">
                  <li><Check />Full high-pressure wash</li>
                  <li><Check />Deep sanitization</li>
                  <li><Check />Odor elimination</li>
                  <li><Check />Eco-friendly products</li>
                </ul>
                <a href={BOOKING_URL} className="btn btn-teal" style={{ width: "100%" }}>Book Now — $25</a>
              </div>
              <div className="svc-card featured">
                <div className="svc-badge">Best Value</div>
                <div className="svc-icon"><Icon /></div>
                <h3 style={{ color: "#fff" }}>2 Bins</h3>
                <div className="svc-price"><sup>$</sup>40<sub>/visit</sub></div>
                <p className="svc-tag">One-time clean · <strong style={{ color: "var(--teal)" }}>Save $10</strong></p>
                <div className="svc-divider"></div>
                <ul className="svc-features">
                  <li><Check />Both bins fully cleaned in one visit</li>
                  <li><Check />Full high-pressure wash on each</li>
                  <li><Check />Deep sanitization</li>
                  <li><Check />Odor elimination</li>
                  <li><Check />Eco-friendly, pet-safe products</li>
                </ul>
                <a href={BOOKING_URL} className="btn btn-teal" style={{ width: "100%" }}>Book Now — $40</a>
              </div>
            </div>
          </div>
        )}

        {plan === "monthly" && (
          <div id="panelMonthly">
            <div className="services-grid">
              <div className="svc-card plain">
                <div className="svc-icon"><Icon /></div>
                <h3>1 Bin</h3>
                <div className="svc-price"><sup>$</sup>25<sub>/mo</sub></div>
                <p className="svc-tag">1 clean per month</p>
                <div className="svc-divider"></div>
                <ul className="svc-features">
                  <li><Check />Monthly scheduled clean</li>
                  <li><Check />Full high-pressure wash</li>
                  <li><Check />Deep sanitization</li>
                  <li><Check />Odor elimination</li>
                  <li><Check />Eco-friendly, pet-safe products</li>
                </ul>
                <a href={BOOKING_URL} className="btn btn-teal" style={{ width: "100%" }}>Subscribe — $25/mo</a>
              </div>
              <div className="svc-card featured">
                <div className="svc-badge">Most Popular</div>
                <div className="svc-icon"><Icon /></div>
                <h3 style={{ color: "#fff" }}>2 Bins</h3>
                <div className="svc-price"><sup>$</sup>40<sub>/mo</sub></div>
                <p className="svc-tag">1 clean per month · <strong style={{ color: "var(--teal)" }}>Save $10/mo</strong></p>
                <div className="svc-divider"></div>
                <ul className="svc-features">
                  <li><Check />Both bins cleaned monthly</li>
                  <li><Check />Scent pod left in each bin after every clean</li>
                  <li><Check />Full high-pressure wash on each</li>
                  <li><Check />Deep sanitization</li>
                  <li><Check />Odor elimination</li>
                  <li><Check />Eco-friendly, pet-safe products</li>
                </ul>
                <a href={BOOKING_URL} className="btn btn-teal" style={{ width: "100%" }}>Subscribe — $40/mo</a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 13, color: "var(--g500)", marginTop: 20 }}>
              Cancel anytime · No cancellation fees · No fine print
            </p>
          </div>
        )}

        <div className="water-callout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>
            <strong>Water connection included.</strong> We come fully equipped and connect directly to your outdoor
            water connection — no water truck, no tank, nothing extra needed from you. Simply ensure your outdoor
            spigot is accessible on the day of your appointment and our team handles everything else.
          </p>
        </div>
      </div>
    </section>
  );
}
