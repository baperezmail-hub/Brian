const AREAS = [
  "Dadeland",
  "Doral",
  "The Hammocks",
  "Kendale Lakes",
  "Kendall",
  "Kendall West ⭐",
  "South Miami",
  "Sunset / Bird Road",
  "Sweetwater",
  "Tamiami",
  "West Kendall",
  "Westchester",
];

export default function ServiceArea() {
  return (
    <section className="section" id="service-area" style={{ background: "var(--off-white)" }}>
      <div className="container">
        <div className="center">
          <p className="section-tag">Service Area</p>
          <h2 className="section-h">We come to your neighborhood.</h2>
          <p className="section-sub">
            Prestige Bin Services operates exclusively within Southwest Miami-Dade County. Check below to confirm we
            serve your area before booking.
          </p>
        </div>
        <div style={{ maxWidth: 600, margin: "48px auto 0", background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "var(--rl)", overflow: "hidden", boxShadow: "var(--shl)" }}>
          <div style={{ background: "var(--navy)", padding: "14px 28px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Neighborhoods & Areas We Serve
            </span>
          </div>
          {AREAS.map((area, i) => (
            <div className={`sa-row ${i % 2 === 1 ? "sa-alt" : ""}`} key={area}>
              <span className="sa-area">{area}</span>
            </div>
          ))}
          <div style={{ padding: "16px 28px", background: "var(--teal-light)", borderTop: "1px solid rgba(29,158,117,0.2)", display: "flex", alignItems: "flex-start", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.72)", lineHeight: 1.65, margin: 0 }}>
              ⭐ Our home base. Don&apos;t see your area? Text us at <strong>305-775-5434</strong> and we&apos;ll let you know if we can accommodate you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
