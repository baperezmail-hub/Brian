import Logo from "./Logo";
import { BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Logo size={36} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: "-.01em" }}>
                  Prestige Bin Services
                </div>
                <div style={{ fontSize: 9, fontWeight: 600, color: "var(--teal)", letterSpacing: ".14em", textTransform: "uppercase" }}>
                  Miami, FL
                </div>
              </div>
            </div>
            <p className="footer-desc">
              &quot;Miami clean. Every time.&quot; Professional bin cleaning — sanitized, deodorized, and handled
              with care. Professionally operated, serving all of Miami-Dade County.
            </p>
            <div className="footer-pills">
              <span className="footer-pill">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                </svg>
                Miami-Dade
              </span>
              <span className="footer-pill">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Professionally Operated
              </span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services &amp; Pricing</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#why">Why Choose Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href={BOOKING_URL}>Book Online</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><span>305-322-6400</span></li>
              <li><span>305-799-0992</span></li>
              <li><span>305-775-5434</span></li>
              <li><a href="mailto:info@prestigebinservices.com">info@prestigebinservices.com</a></li>
              <li><span>Mon–Fri · 7am–1pm · Thu–Fri til 4pm · Sat–Sun · 9am–2pm</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Prestige Bin Services LLC. All rights reserved. Miami-Dade County, FL.</p>
          <p style={{ color: "rgba(255,255,255,.3)" }}>prestigebinservices.com</p>
        </div>
      </div>
    </footer>
  );
}
