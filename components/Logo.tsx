export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="500" rx="80" fill="#112240" />
      <path d="M250 80L370 130V230C370 310 318 370 250 390C182 370 130 310 130 230V130L250 80Z" fill="#1D9E75" opacity="0.15" />
      <path d="M250 80L370 130V230C370 310 318 370 250 390C182 370 130 310 130 230V130L250 80Z" stroke="#1D9E75" strokeWidth="6" fill="none" strokeLinejoin="round" />
      <rect x="190" y="155" width="32" height="160" rx="9" fill="#1D9E75" />
      <path d="M222 155H292C310 155 325 170 325 188C325 206 310 221 292 221H222V155Z" fill="#1D9E75" />
      <path d="M222 221H294C312 221 327 236 327 254C327 272 312 287 294 287H222V221Z" fill="#1D9E75" opacity="0.45" />
    </svg>
  );
}
