const ITEMS = [
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    text: (
      <>
        <strong>Professionally</strong> Operated
      </>
    ),
  },
  {
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    text: (
      <>
        <strong>Instant</strong> Online Booking
      </>
    ),
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    text: (
      <>
        <strong>Open 7 Days</strong> a Week
      </>
    ),
  },
  {
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    text: (
      <>
        <strong>EN / ES / IT</strong> · Multilingual
      </>
    ),
  },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-strip-inner">
          {ITEMS.map((item, i) => (
            <div className="trust-item" key={i}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {item.icon}
              </svg>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
