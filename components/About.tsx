export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-wrap">
              <svg className="about-img-svg" viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="375" fill="#0d1e38" />
                <rect x="0" y="280" width="500" height="95" fill="#0A1628" />
                <rect x="0" y="278" width="500" height="5" fill="rgba(29,158,117,0.2)" />
                <rect x="110" y="120" width="90" height="168" rx="8" fill="#1D9E75" opacity="0.12" />
                <rect x="110" y="120" width="90" height="168" rx="8" fill="none" stroke="#1D9E75" strokeWidth="1.5" />
                <rect x="103" y="106" width="104" height="20" rx="6" fill="#1D9E75" opacity="0.75" />
                <rect x="120" y="93" width="70" height="15" rx="7" fill="#0F6E56" opacity="0.65" />
                <circle cx="125" cy="291" r="10" fill="#0F6E56" opacity="0.5" />
                <circle cx="185" cy="291" r="10" fill="#0F6E56" opacity="0.5" />
                <rect x="260" y="135" width="85" height="150" rx="8" fill="#1D9E75" opacity="0.1" />
                <rect x="260" y="135" width="85" height="150" rx="8" fill="none" stroke="#1D9E75" strokeWidth="1.2" />
                <rect x="254" y="122" width="97" height="18" rx="5" fill="#1D9E75" opacity="0.6" />
                <rect x="268" y="110" width="68" height="14" rx="6" fill="#0F6E56" opacity="0.5" />
                <circle cx="275" cy="288" r="9" fill="#0F6E56" opacity="0.4" />
                <circle cx="330" cy="288" r="9" fill="#0F6E56" opacity="0.4" />
                <text x="95" y="115" fontSize="16" fill="#1D9E75" opacity="0.8">✦</text>
                <text x="350" y="130" fontSize="12" fill="#1D9E75" opacity="0.6">✦</text>
                <text x="210" y="100" fontSize="10" fill="#1D9E75" opacity="0.5">✦</text>
                <rect x="120" y="22" width="260" height="36" rx="10" fill="rgba(29,158,117,0.12)" stroke="rgba(29,158,117,0.25)" strokeWidth="1" />
                <text x="250" y="45" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#1D9E75">After — Prestige Clean</text>
              </svg>
            </div>
            <div className="about-badge">
              <div className="about-badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div className="about-badge-text">
                <div className="num">Professionally Operated</div>
                <div className="lbl">Based in Miami-Dade</div>
              </div>
            </div>
          </div>
          <div>
            <p className="section-tag">Who We Are</p>
            <h2 className="section-h">Miami&apos;s cleanliness<br />standard — raised.</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Prestige Bin Services was built on one idea: Miami homeowners deserve a cleaner, healthier property
              without lifting a finger. We bring professional-grade bin cleaning right to your driveway —
              eco-friendly, professionally operated, and hassle-free.
            </p>
            <div className="about-features">
              <div className="about-feat">
                <div className="about-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                </div>
                <div>
                  <h4>At-home service</h4>
                  <p>We come to your property Monday–Friday 7am–1pm (Thursday & Friday until 4pm), Saturday & Sunday 9am–2pm. No drop-offs, no pickups, zero effort on your end.</p>
                </div>
              </div>
              <div className="about-feat">
                <div className="about-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" /></svg>
                </div>
                <div>
                  <h4>Eco-friendly, pet-safe</h4>
                  <p>100% biodegradable, non-toxic cleaning solutions — safe for your family, pets, and Miami&apos;s environment.</p>
                </div>
              </div>
              <div className="about-feat">
                <div className="about-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                </div>
                <div>
                  <h4>No cancellation fees, ever</h4>
                  <p>Go one-time or monthly — your call. Either way, there are no cancellation fees, no hidden charges, and no fine print. We keep your business by doing great work, not by locking you in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
