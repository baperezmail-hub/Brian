const ITEMS = [
  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, text: "Professionally Operated" },
  { icon: <polyline points="20 6 9 17 4 12" />, text: "Miami-Dade Compliant" },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
    text: "Professional Team",
  },
  { icon: <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" />, text: "Eco-Friendly Products Only" },
];

export default function InsuredBanner() {
  return (
    <div className="insured-banner">
      <div className="container">
        <div className="insured-inner">
          {ITEMS.map((item, i) => (
            <span key={i} style={{ display: "contents" }}>
              <div className="ins-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {item.icon}
                </svg>
                {item.text}
              </div>
              {i < ITEMS.length - 1 && <div className="ins-sep"></div>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
