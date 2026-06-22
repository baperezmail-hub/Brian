import { BOOKING_URL } from "@/lib/constants";

export default function BookingCta() {
  return (
    <section className="section book-cta" id="book">
      <div className="container">
        <div className="book-cta-inner">
          <p className="section-tag" style={{ color: "rgba(29,158,117,0.9)" }}>Online Booking</p>
          <h2>Pick your time.<br /><span>We&apos;ll be there.</span></h2>
          <p>
            Book instantly through our online calendar — see real-time availability, choose your slot, and get a
            confirmation immediately. No waiting, no back-and-forth.
          </p>
          <div className="book-cta-steps">
            <div className="book-step">
              <div className="book-step-num">1</div>
              <div className="book-step-text"><strong>Choose a service</strong>1 bin or 2 bins</div>
            </div>
            <div className="book-step">
              <div className="book-step-num">2</div>
              <div className="book-step-text"><strong>Pick a date & time</strong>See live availability</div>
            </div>
            <div className="book-step">
              <div className="book-step-num">3</div>
              <div className="book-step-text"><strong>Get confirmed instantly</strong>Email & text confirmation</div>
            </div>
            <div className="book-step">
              <div className="book-step-num">4</div>
              <div className="book-step-text"><strong>We show up</strong>Mon–Fri 7am–1pm · Thu–Fri til 4pm · Sat–Sun 9am–2pm</div>
            </div>
          </div>
          <a href={BOOKING_URL} className="btn btn-teal" style={{ fontSize: 17, padding: "18px 44px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Open Booking Calendar
          </a>
          <p className="square-note">
            Powered by Square Appointments · Secure · Instant confirmation · <a href={BOOKING_URL}>Book now</a>
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 12 }}>
            We book in <strong style={{ color: "rgba(255,255,255,0.5)" }}>time windows</strong>, not exact arrival times. We&apos;ll be there within your chosen window.
          </p>
          <div style={{ maxWidth: 560, margin: "24px auto 0", background: "rgba(29,158,117,0.08)", border: "1px solid rgba(29,158,117,0.3)", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12, textAlign: "left" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Before your appointment:</strong> Please have your bins emptied prior to service. Failure to have bins emptied will incur a <strong style={{ color: "#1D9E75" }}>$10 fee per visit</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
