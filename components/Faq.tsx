"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "How does the booking work?",
    a: "Click \"Book Now\" to open our Square booking calendar. You'll see real-time available slots — pick your date and time and you're confirmed instantly. No phone calls, no waiting, no back-and-forth. Square sends you an email and text confirmation immediately.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Not at all. You just need to ensure your outdoor water connection (spigot) is accessible before we arrive. We handle everything else. Many customers aren't home during their service.",
  },
  {
    q: "Do you bring your own water?",
    a: "We connect directly to your outdoor water connection — no water truck or tank needed. Just make sure your outdoor spigot is accessible and operational on the day of service. We bring all other equipment.",
  },
  {
    q: "What hours do you operate?",
    a: "We operate Monday–Friday 7:00am–1:00pm, with extended hours Thursday & Friday until 4:00pm, plus Saturday & Sunday 9:00am–2:00pm. You can see exact available slots when you open the booking calendar.",
  },
  {
    q: "Are your cleaning products safe for kids and pets?",
    a: "Absolutely. We exclusively use 100% biodegradable, non-toxic cleaning solutions that are safe for children, pets, and Miami's environment. All gray water is handled responsibly in compliance with Miami-Dade guidelines.",
  },
  {
    q: "Do you require a subscription or commitment?",
    a: "Never. We offer one-time cleanings with zero commitments, zero subscriptions, and zero hidden fees. Book when you need us. We earn your repeat business through the quality of our work.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="center">
          <p className="section-tag">FAQ</p>
          <h2 className="section-h">Common questions.</h2>
          <p className="section-sub">Everything you need to know before booking your first clean.</p>
        </div>
        <div className="faq-grid">
          {ITEMS.map((item, i) => (
            <div className={`faq-item ${openIdx === i ? "open" : ""}`} key={i}>
              <div className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {item.q}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
