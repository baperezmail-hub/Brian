export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="center">
          <p className="section-tag">Why Choose Us</p>
          <h2 className="section-h">The Prestige difference.</h2>
          <p className="section-sub">
            We&apos;re not just washing bins — we&apos;re delivering a standard of cleanliness that Miami homeowners
            can count on.
          </p>
        </div>
        <div className="why-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: 840, margin: "56px auto 0" }}>
          <div className="why-card">
            <div className="why-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Professionally Operated</h3>
            <p>
              We operate as a professionally operated business in Miami-Dade County. You&apos;re protected at every
              step — your property, your peace of mind, covered.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3>Instant Online Booking</h3>
            <p>
              No calls, no waiting. Our Square calendar shows real-time availability — pick your slot and you&apos;re
              confirmed immediately. Overlaps impossible.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <h3>We Come to You</h3>
            <p>
              No drop-offs, no pickups. We arrive at your home, connect to your outdoor water connection, and handle
              everything. You do absolutely nothing.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3>No Cancellation Fees — Ever</h3>
            <p>
              Book when you need us. No subscriptions, no hidden fees, no fine print. We earn your business through
              the quality of our work, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
