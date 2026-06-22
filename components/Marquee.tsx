const ITEMS = [
  "Professionally Operated",
  "Eco-Friendly Products",
  "Miami-Dade County",
  "No Cancellation Fees",
  "Instant Online Booking",
  "Bilingual EN / ES / IT",
  "Starting at $25",
  "Open 7 Days · Mon–Sun",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track" id="marquee">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
