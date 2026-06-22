export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="center">
          <p className="section-tag" style={{ color: "rgba(29,158,117,0.9)" }}>The Process</p>
          <h2 className="section-h">Simple. Fast. Spotless.</h2>
          <p className="section-sub">From booking to a sparkling clean bin — here&apos;s exactly what to expect.</p>
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-num">1</div>
            <h3>Book Online Instantly</h3>
            <p>
              Use our booking calendar to pick your date and time window. Windows run 7am–10am and 10am–1pm
              (Thursday &amp; Friday also 1pm–4pm; Saturday &amp; Sunday 9am–2pm). You&apos;ll see live availability
              and get confirmed immediately.
            </p>
            <div style={{ marginTop: 14, background: "rgba(29,158,117,0.1)", border: "1px solid rgba(29,158,117,0.2)", borderRadius: 8, padding: "10px 14px" }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>Note:</strong> We book in time windows, not exact
                arrival times. We&apos;ll be there within your chosen window and will reach out if anything needs to
                be adjusted.
              </p>
            </div>
          </div>
          <div className="how-step">
            <div className="how-num">2</div>
            <h3>We Arrive at Your Home</h3>
            <p>
              Our team shows up during your chosen window (Mon–Fri 7am–1pm, Thu–Fri until 4pm, Sat–Sun 9am–2pm). We
              connect to your outdoor water connection — no hassle on your end whatsoever.
            </p>
          </div>
          <div className="how-step">
            <div className="how-num">3</div>
            <h3>Sanitized &amp; Done</h3>
            <p>
              We pressure wash, sanitize, and deodorize your bins using eco-friendly products. Left sparkling clean
              and odor-free — ready for the next collection day.
            </p>
          </div>
        </div>
        <div className="how-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>
            <strong>Water connection:</strong> We connect directly to your outdoor water connection at no extra cost
            — no water truck, no tank, and no preparation needed on your end. Simply ensure your outdoor spigot is
            accessible before we arrive and we&apos;ll handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
