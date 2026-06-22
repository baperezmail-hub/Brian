import { BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" id="heroBg">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow1"></div>
        <div className="hero-glow2"></div>
        <div className="hero-vignette"></div>
      </div>
      <div className="hero-content" id="heroContent">
        <div className="hero-pill">
          <span className="hero-pill-dot"></span>
          <span>Miami&apos;s Premier Bin Cleaning Service</span>
          <span className="hero-pill-dot"></span>
        </div>
        <h1>
          <span style={{ whiteSpace: "nowrap" }}>
            Prestige <span className="accent">Bin</span>
          </span>
          <br />
          Services
        </h1>
        <p className="hero-tagline">Sanitized. Deodorized. Done.</p>
        <p className="hero-sub">
          Miami&apos;s heat turns your trash bins into bacteria factories. We pressure wash, sanitize, and deodorize
          them right at your home — starting at just $25. No cancellation fees, no hassle. Book your spot instantly
          online.
        </p>
        <div className="hero-ctas">
          <a href={BOOKING_URL} className="btn btn-teal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Your Appointment
          </a>
          <a href="#services" className="btn btn-outline">View Pricing</a>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Professionally Operated
          </div>
          <div className="hero-trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            No cancellation fees
          </div>
          <div className="hero-trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            EN / ES / IT
          </div>
          <div className="hero-trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Mon–Fri 7am–1pm · Thu–Fri til 4pm · Sat–Sun 9am–2pm
          </div>
        </div>
      </div>
      <div className="scroll-ind">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
